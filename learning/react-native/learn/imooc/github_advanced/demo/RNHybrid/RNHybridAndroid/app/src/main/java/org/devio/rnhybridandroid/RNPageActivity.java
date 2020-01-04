package org.devio.rnhybridandroid;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.KeyEvent;
import android.widget.Toast;

import com.facebook.infer.annotation.Assertions;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.devsupport.DoubleTapReloadRecognizer;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.shell.MainReactPackage;

/**
 * React Native JS Native通信 | 混合开发
 * Author: CrazyCodeBoy
 * 技术博文：http://www.devio.org
 * GitHub:https://github.com/crazycodeboy
 * Email:crazycodeboy@gmail.com
 */
public class RNPageActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler, IJSBridge {
    private static String moduleName;
    private ReactRootView mReactRootView;
    private ReactInstanceManager mReactInstanceManager;
    private DataToJSPresenter dataToJSPresenter;
    private boolean mDeveloperSupport = true;
    private DoubleTapReloadRecognizer mDoubleTapReloadRecognizer;

    public static void start(Context context, String moduleName, String initParams) {
        RNPageActivity.moduleName = moduleName;
        Intent intent = new Intent(context, RNPageActivity.class);
        intent.putExtra("initParams", initParams);
        context.startActivity(intent);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mReactRootView = new ReactRootView(this);
        mReactInstanceManager = ReactInstanceManager.builder()
            .setApplication(getApplication())
            .setBundleAssetName("index.android.bundle")
            .setJSMainModulePath("index")
            .addPackage(new MainReactPackage())
            .addPackage(new JSBridgeReactPackage())
            .setUseDeveloperSupport(BuildConfig.DEBUG)
            .setInitialLifecycleState(LifecycleState.RESUMED)
            .build();
        Bundle bundle = new Bundle();//RN初始化时传递给JS的初始化数据
        bundle.putString("params", getIntent().getStringExtra("initParams"));
        // The string here (e.g. "MyReactNativeApp") has to match
        // the string in AppRegistry.registerComponent() in index.js
        mReactRootView.startReactApplication(mReactInstanceManager, moduleName, bundle);

        setContentView(mReactRootView);
        dataToJSPresenter = new DataToJSPresenter(mReactInstanceManager, this, "by ReactInstanceManager");
        mDoubleTapReloadRecognizer = new DoubleTapReloadRecognizer();
        if (getSupportActionBar() != null) {
            getSupportActionBar().hide();
        }
    }

    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (getUseDeveloperSupport()) {
            if (keyCode == KeyEvent.KEYCODE_MENU) {//Ctrl + M 打开RN开发者菜单
                mReactInstanceManager.showDevOptionsDialog();
                return true;
            }
            boolean didDoubleTapR = Assertions.assertNotNull(mDoubleTapReloadRecognizer).didDoubleTapR(keyCode, getCurrentFocus());
            if (didDoubleTapR) {//双击R 重新加载JS
                mReactInstanceManager.getDevSupportManager().handleReloadJS();
                return true;
            }
        }
        return super.onKeyUp(keyCode, event);
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        super.onBackPressed();
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    //    @Override
    //    protected String getMainComponentName() {
    //        return moduleName;
    //    }
    @Override
    protected void onPause() {
        super.onPause();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause(this);
        }
    }

    @Override
    protected void onResume() {
        super.onResume();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this, this);
        }
    }

    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostDestroy(this);
        }
        if (mReactRootView != null) {
            mReactRootView.unmountReactApplication();
        }
    }

    @Override
    public void sendMessage(ReadableMap params) {
        Toast.makeText(this, params.toString(), Toast.LENGTH_LONG).show();
    }

    public boolean getUseDeveloperSupport() {
        return mReactInstanceManager != null && mDeveloperSupport;
    }
}
