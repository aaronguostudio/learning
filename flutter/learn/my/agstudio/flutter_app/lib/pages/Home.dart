import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Container(
      height: 30.0,
      padding: const EdgeInsets.symmetric(horizontal: 8.0),
      child: Row(
        children: <Widget>[
          Text("Test"),
          Text("Test"),
          IconButton(
            icon: Icon(
              Icons.home,
              color: Colors.amberAccent
            )
          ),
        ],
      ),
    );
  }
}