package org.devio.rnhybridandroid;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.EditText;
import android.widget.RadioGroup;


/**
 * i
 * React Native JS Native通信 | 混合开发
 * Author: CrazyCodeBoy
 * 技术博文：http://www.devio.org
 * GitHub:https://github.com/crazycodeboy
 * Email:crazycodeboy@gmail.com
 */
public class MainActivity extends AppCompatActivity {
    private EditText input, paramInput;
    private boolean useMode2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        input = findViewById(R.id.input);
        paramInput = findViewById(R.id.paramInput);
        RadioGroup radioGroup = findViewById(R.id.radioGroup);
        radioGroup.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup group, int checkedId) {
                if (checkedId == R.id.mode1) {
                    useMode2 = false;
                } else if (checkedId == R.id.mode2) {
                    useMode2 = true;
                }
            }
        });
    }

    public void onClick(View view) {
        int id = view.getId();
        if (id == R.id.jump) {
            doJump();
        }
    }

    private void doJump() {
        String moduleName = input.getText().toString().trim();
        String inputParams = paramInput.getText().toString().trim();
        if (useMode2) {
            RNPageActivity.start(this, moduleName, inputParams);
        } else {
            ReactPageActivity.start(this, moduleName, inputParams);
        }
    }
}
