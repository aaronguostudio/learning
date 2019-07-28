- gps package: geolocator
  - get current geolocation
- using async and await in dart
- Widget lifecycles
  - initState()
  - Widget build() {}
  - void deactivate () {}
- exceptions in dart
```dart
String a = 'a';

try {
  double b = double.parse(a);
} catch (e) {
  print(e)
}

```

- Dart ?? Null Aware Operator
```dart
// similar to swift
var a;
a ?? 30.0
```

```dart
import 'package:flutter/material.dart';
import 'package:clima/services/location.dart';

class LoadingScreen extends StatefulWidget {
  @override
  _LoadingScreenState createState() => _LoadingScreenState();
}

class _LoadingScreenState extends State<LoadingScreen> {

  void getLocation () async {
    Location location = Location();
    await location.getLocation();
    print(location.lng);
    print(location.lat);
  }

  @override
  void initState() {
    super.initState();
    getLocation();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text('test')
      ),
    );
  }
}

```dart
import 'package:geolocator/geolocator.dart';

class Location {
  double lng;
  double lat;

  Future<void> getLocation () async {
    Position position;
    try {
      position = await Geolocator().getCurrentPosition(desiredAccuracy: LocationAccuracy.low);
      lng = position.longitude;
      lat = position.latitude;
    } catch (e) {
      print(e);
    }
  }
}
```

<!-- starts from https://www.udemy.com/flutter-bootcamp-with-dart/learn/lecture/14485916#overview -->

- using http to call api
- using dart:convert to parse json
- using flutter_spinkit to show a loader
- passing data from loading screen to location screen
- padding data back to the preverious screen

