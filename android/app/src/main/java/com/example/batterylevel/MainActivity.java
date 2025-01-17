package com.example.batterylevel;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

import io.dcloud.common.DHInterface.ICallBack;
import io.dcloud.feature.sdk.DCSDKInitConfig;
import io.dcloud.feature.sdk.DCUniMPJSCallback;
import io.dcloud.feature.sdk.DCUniMPSDK;


import io.dcloud.feature.sdk.MenuActionSheetItem;
import io.flutter.embedding.android.FlutterActivity;
import io.flutter.embedding.engine.FlutterEngine;
import io.flutter.plugin.common.MethodChannel;

import android.Manifest;
import android.content.Context;
import android.content.ContextWrapper;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.PackageManager;
import android.os.BatteryManager;
import android.os.Build.VERSION;
import android.os.Build.VERSION_CODES;
import android.os.Bundle;
import android.os.Environment;
import android.os.Handler;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;


import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

public class MainActivity extends FlutterActivity {
    private static final String CHANNEL = "samples.flutter.dev/battery";
    private static final String WGT_PATH = "/Users/li.pinliang/Documents/html";
    Context mContext;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mContext = this.getContext();

        MenuActionSheetItem item = new MenuActionSheetItem("关于", "gy");
        List<MenuActionSheetItem> sheetItems = new ArrayList<>();
        sheetItems.add(item);
        DCSDKInitConfig config = new DCSDKInitConfig.Builder()
                .setCapsule(true)
                .setMenuDefFontSize("16px")
                .setMenuDefFontColor("#ff00ff")
                .setMenuDefFontWeight("normal")
                .setMenuActionSheetItems(sheetItems)
                .build();
        DCUniMPSDK.getInstance().initialize(this, config, new DCUniMPSDK.IDCUNIMPPreInitCallback() {
            @Override
            public void onInitFinished(boolean isSuccess) {
                Log.e("unimp", "onInitFinished-----------"+isSuccess);
            }
        });

        android.util.Log.d("", "onCreate: ");
    }

    @Override
    public void configureFlutterEngine(@NonNull FlutterEngine flutterEngine) {
        super.configureFlutterEngine(flutterEngine);

        checkNeedPermissions();

        new MethodChannel(flutterEngine.getDartExecutor().getBinaryMessenger(), CHANNEL)
                .setMethodCallHandler(
                        (call, result) -> {
                            // Note: this method is invoked on the main thread.
                            if (call.method.equals("getBatteryLevel")) {
                                try {
                                    DCUniMPSDK.getInstance().startApp(mContext,"__UNI__04E3A11",MySplashView.class);
                                } catch (Exception e) {
                                    e.printStackTrace();
                                }
                                int batteryLevel = getBatteryLevel();
                                if (batteryLevel != -1) {
                                    result.success(batteryLevel);
                                } else {
                                    result.error("UNAVAILABLE", "Battery level not available.", null);
                                }
                            }else if (call.method.equals("openMiniProgram2")) {
                                try {
                                    DCUniMPSDK.getInstance().startApp(mContext,"__UNI__5032A61.wgt");
                                } catch (Exception e) {
                                    e.printStackTrace();
                                }
                            }else if (call.method.equals("openMiniProgram3")) {
                                String SDPATH = Environment.getExternalStorageDirectory() + "/Download/";
                                String wgtPath = SDPATH +"/__UNI__5032A61.wgt";
                                android.util.Log.d("dsadsa", "configureFlutterEngine: " + wgtPath);
                                DCUniMPSDK.getInstance().releaseWgtToRunPathFromePath("__UNI__5032A61", wgtPath, new ICallBack() {
                                    @Override
                                    public Object onCallBack(int code, Object pArgs) {
                                        if(code ==1) {//释放wgt完成
                                            try {
                                                Toast.makeText(getApplicationContext(), wgtPath,
                                                        Toast.LENGTH_SHORT).show();
                                                DCUniMPSDK.getInstance().startApp(mContext, "__UNI__5032A61");
                                            } catch (Exception e) {
                                                e.printStackTrace();
                                            }
                                        } else{//释放wgt失败
                                            Toast.makeText(mContext, "资源释放失败", Toast.LENGTH_SHORT).show();
                                        }
                                        return null;
                                    }
                                });
                            }else {
                                result.notImplemented();
                            }
                        }
                );
    }

    private int getBatteryLevel() {

        int batteryLevel = -1;
        if (VERSION.SDK_INT >= VERSION_CODES.LOLLIPOP) {
            BatteryManager batteryManager = (BatteryManager) getSystemService(BATTERY_SERVICE);
            batteryLevel = batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY);
        } else {
            Intent intent = new ContextWrapper(getApplicationContext()).
                    registerReceiver(null, new IntentFilter(Intent.ACTION_BATTERY_CHANGED));
            batteryLevel = (intent.getIntExtra(BatteryManager.EXTRA_LEVEL, -1) * 100) /
                    intent.getIntExtra(BatteryManager.EXTRA_SCALE, -1);
        }

        return batteryLevel;
    }

    private void checkNeedPermissions(){
        if (ContextCompat.checkSelfPermission(this, Manifest.permission.WRITE_EXTERNAL_STORAGE)
                != PackageManager.PERMISSION_GRANTED
                || ContextCompat.checkSelfPermission(this, Manifest.permission.READ_EXTERNAL_STORAGE)
                != PackageManager.PERMISSION_GRANTED) {
            //多个权限一起申请
            ActivityCompat.requestPermissions(this, new String[]{
                    Manifest.permission.WRITE_EXTERNAL_STORAGE,
                    Manifest.permission.READ_EXTERNAL_STORAGE
            }, 1);
        }
    }
}
