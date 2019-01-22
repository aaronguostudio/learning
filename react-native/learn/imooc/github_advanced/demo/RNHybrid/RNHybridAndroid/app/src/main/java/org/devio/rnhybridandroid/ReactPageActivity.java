package org.devio.rnhybridandroid;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.bridge.ReadableMap;

import javax.annotation.Nullable;

/**
 * React Native JS Native通信 | 混合开发
 * Author: CrazyCodeBoy
 * 技术博文：http://www.devio.org
 * GitHub:https://github.com/crazycodeboy
 * Email:crazycodeboy@gmail.com
 */
public class ReactPageActivity extends ReactActivity implements IJSBridge {
    private static String moduleName;

    public static void start(Context context, String moduleName, String initParams) {
        ReactPageActivity.moduleName = moduleName;
        Intent intent = new Intent(context, ReactPageActivity.class);
        intent.putExtra("initParams", initParams);
        context.startActivity(intent);
    }

    DataToJSPresenter dataToJSPresenter;

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Nullable
            @Override
            protected Bundle getLaunchOptions() {
                if (getIntent() != null) {
                    Bundle bundle = new Bundle();//RN初始化时传递给JS的初始化数据
                    bundle.putString("params", getIntent().getStringExtra("initParams"));
                    return bundle;
                }
                return super.getLaunchOptions();
            }
        };
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        dataToJSPresenter = new DataToJSPresenter(getReactInstanceManager(), this, "by ReactActivity+ReactApplication");
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return moduleName;
    }

    @Override
    public void sendMessage(ReadableMap params) {
        Toast.makeText(this, params.toString(), Toast.LENGTH_LONG).show();
    }
}
