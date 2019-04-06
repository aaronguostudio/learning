import 'package:flutter/material.dart';

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key}) : super(key: key);

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _selectedIndex = 1;
  final _widgetOptions = [
    Container(
      child: Text('Test 1'),
    ),
    Container(
      child: Text('Test 2'),
    ),
    Container(
      child: Text('Test 3'),
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: Center(
          child: _widgetOptions.elementAt(_selectedIndex),
        ),
        bottomNavigationBar: new Theme(
          data: Theme.of(context).copyWith(
            // sets the background color of the `BottomNavigationBar`
            canvasColor: Color.fromRGBO(0, 0, 8, 1),
            textTheme: Theme
              .of(context)
              .textTheme
              .copyWith(
                caption: new TextStyle(color: Color.fromRGBO(127, 127, 127, 1)
              )
            ),
          ),
          child: BottomNavigationBar(
            items: <BottomNavigationBarItem>[
              BottomNavigationBarItem(
                icon: Icon(Icons.home),
                title: Text('Tickets')
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.business),
                title: Text('Orders')
              ),
              BottomNavigationBarItem(
                icon: Icon(Icons.school),
                title: Text('Settings')
              ),
            ],
            currentIndex: _selectedIndex,
            fixedColor: Color.fromRGBO(225, 227, 95, 1),
            onTap: _onItemTapped,
          ),
        )
      ),
    );
  }

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }
}