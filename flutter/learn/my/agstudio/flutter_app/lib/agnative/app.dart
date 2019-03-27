import 'package:flutter/material.dart';

class AgNativeApp extends StatefulWidget {

  const AgNativeApp({
    Key key,
    this.enablePerformanceOverlay = true,
    // Put App State in here
  }):super(key: key);

  final bool enablePerformanceOverlay;

  @override
  _AgNativeState createState() => _AgNativeState();
}

class _AgNativeState extends State<AgNativeApp> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Aaron Guo Studio',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Center(
         child: Text("test"),
      )
    );
  }

}