# Keywords


# Project
- res > values > strings.xml
  - contains all the contents that will be used in the project
- link buttons to controller
  - mTrueButton, m represents member
- learn Activity class
- learn View class
- Add click event and handler for buttons
- create Toast on click
- generate questions and put them in array
- learn TextView class
  - setText accepts string/resid
- learn how to use ProgressBar and Toast, AlertDialog
```java
AlertDialog.Builder alert = new AlertDialog.Builder(this);
alert.setTitle("Game Over");
alert.setCancelable(false);
alert.setMessage("You scored " + mScore + " points!");
alert.setPositiveButton("Close Application", new DialogInterface.OnClickListener() {
    @Override
    public void onClick(DialogInterface dialogInterface, int i) {
        finish();
    }
});
alert.show();
```
- set screenOrientation="portrait" to prevent landscape mode in AndroidManifest.xml

- Andorid App Lifecycle
  - onCreate()
    - Non-Existent -> Stopped
  - onStart()
    - Stopped -> Paused
  - onResume()
    - Paused -> Running
  - onPause() // still visible
    - Running -> Paused
  - onStop() // no visible
    - Paused -> Stopped
  - onDestroy
    - Stopped -> Non-Existent

- When android update rotation, it will run onDestroy() and then onCreate()
  - Also, during rotation, onSaveInstanceState() will be called after onPause
  - onSaveInstanceState() could store current app state

- Store app state in onSaveInstanceState()
```java
@Override
protected void onSaveInstanceState(Bundle outState) {
    super.onSaveInstanceState(outState);

    outState.putInt("ScoreKey", mScore);
    outState.putInt("IndexKey", mIndex);

}
```

- Retrive stored state from onCreate(Bundle savedInstanceState)
