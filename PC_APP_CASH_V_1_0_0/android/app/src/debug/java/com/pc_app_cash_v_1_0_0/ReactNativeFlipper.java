package com.pc_app_cash_v_1_0_0;

import android.content.Context;
import com.facebook.flipper.android.AndroidFlipperClient;
import com.facebook.flipper.android.utils.FlipperUtils;
import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.network.NetworkingModule;
import com.facebook.soloader.SoLoader;

public class ReactNativeFlipper {
  public static void initializeFlipper(Context context, ReactInstanceManager reactInstanceManager) {
    if (FlipperUtils.shouldEnableFlipper(context)) {
      final FlipperClient client = AndroidFlipperClient.getInstance(context);
      // Add your plugins here
      client.start();

      ReactContext reactContext = reactInstanceManager.getCurrentReactContext();
      if (reactContext != null) {
        NetworkingModule networkingModule = reactContext.getNativeModule(NetworkingModule.class);
        networkingModule.addInterceptor(new FlipperOkhttpInterceptor(client));
      }
    }
  }
}

initializeFlipper(this, getReactNativeHost().getReactInstanceManager());

