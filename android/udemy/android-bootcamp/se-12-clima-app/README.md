# Clima App
- build.gradle (project)
  - project level gradle file is for building the whole project
  - the whole project may contain multiple modules, for example wearable device, android app...
- build.gradle (module)
- Gradle libraries
  - in gradle: implementation fileTree(dir: 'libs', include: ['*.jar']) will add all jar files in lib folder in the project and use as dependencies
- jcenter is a popular android center repo
  - put in gradle
    - compile 'com.loopj.android:android-async-http:1.4.8'
- add permissions in AndroidManifest.xml
```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```


