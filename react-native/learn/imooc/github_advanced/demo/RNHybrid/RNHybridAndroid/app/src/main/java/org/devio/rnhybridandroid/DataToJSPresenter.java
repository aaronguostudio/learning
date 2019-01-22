package org.devio.rnhybridandroid;

import android.app.Activity;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.TextView;

import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * React Native JS Native通信 | 混合开发
 * Author: CrazyCodeBoy
 * 技术博文：http://www.devio.org
 * GitHub:https://github.com/crazycodeboy
 * Email:crazycodeboy@gmail.com
 */
public class DataToJSPresenter implements View.OnClickListener {
    ReactContext reactContext;
    ReactInstanceManager reactInstanceManager;
    Activity activity;
    TextView textShow;
    EditText input;
    String title;

    public DataToJSPresenter(ReactContext reactContext, @NonNull Activity activity, String title) {
        this.reactContext = reactContext;
        this.activity = activity;
        this.title = title;
        init();
    }

    public DataToJSPresenter(ReactInstanceManager reactInstanceManager, @NonNull Activity activity, String title) {
        this.reactInstanceManager = reactInstanceManager;
        this.activity = activity;
        this.title = title;
        init();
    }

    private void init() {
        ViewGroup contentView = activity.findViewById(android.R.id.content);
        View view = LayoutInflater.from(activity).inflate(R.layout.item_container, null);
        contentView.addView(view);
        textShow = view.findViewById(R.id.textShow);
        input = view.findViewById(R.id.input);
        TextView titleView = view.findViewById(R.id.title);
        titleView.setText(title);
        view.findViewById(R.id.btnSend).setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        int id = v.getId();
        if (id == R.id.btnSend) {
            String data = input.getText().toString();
            WritableMap params = Arguments.createMap();
            params.putString("data", data);
            sendEvent(getReactContext(), "testData", params);
        }
    }

    private void sendEvent(ReactContext reactContext, String eventName, @Nullable WritableMap params) {
        if (reactContext == null) {
            return;
        }
        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, params);
    }

    private ReactContext getReactContext() {
        return reactContext != null ? reactContext : reactInstanceManager != null ? reactInstanceManager.getCurrentReactContext() : null;
    }
}
