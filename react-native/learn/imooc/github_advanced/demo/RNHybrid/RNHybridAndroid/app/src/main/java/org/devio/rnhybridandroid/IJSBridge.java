package org.devio.rnhybridandroid;

import com.facebook.react.bridge.ReadableMap;
/**
 * React Native JS Native通信 | 混合开发
 * Author: CrazyCodeBoy
 * 技术博文：http://www.devio.org
 * GitHub:https://github.com/crazycodeboy
 * Email:crazycodeboy@gmail.com
 */
public interface IJSBridge {
    void sendMessage(ReadableMap params);
}
