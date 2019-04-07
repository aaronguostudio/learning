import 'package:flutter/material.dart';

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key}) : super(key: key);

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _selectedIndex = 0;
  static Color darkColor = Color.fromRGBO(0, 0, 8, 1);
  static Color lightColor = Color.fromRGBO(225, 227, 95, 1);
  final _sections = ['Tickets', 'Orders', 'Settings'];

  final _widgetOptions = [
    Container(
      color: darkColor,
      alignment: AlignmentDirectional(0.0, 0.0),
      child: Container(
        margin: EdgeInsets.symmetric(horizontal: 20.0),
        color: darkColor,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Tickets',
              style: TextStyle(
                fontSize: 32.0,
                fontWeight: FontWeight.w700,
                color: Colors.white,
              ),
            ),
            Container(
              color: Colors.blue,
              child: FlutterLogo(
                size: 60.0,
              ),
            ),
            Container(
              color: Colors.purple,
              child: FlutterLogo(
                size: 60.0,
              ),
            ),
          ],
        ),
        constraints: BoxConstraints.expand(),
      ),
    ),
    Container(
      color: darkColor,
      alignment: AlignmentDirectional(0.0, 0.0),
      child: Container(
        color: darkColor,
        child: Text("Orders"),
        constraints: BoxConstraints.expand(),
      ),
    ),
    Container(
      color: darkColor,
      alignment: AlignmentDirectional(0.0, 0.0),
      child: Container(
        color: darkColor,
        child: Text("Settings"),
        constraints: BoxConstraints.expand(),
      ),
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(
          title: Text(
            _sections[_selectedIndex],
            style: TextStyle(color: lightColor),
          ),
          backgroundColor: darkColor,
        ),
        body: Center(
          child: _widgetOptions.elementAt(_selectedIndex),
        ),
        bottomNavigationBar: new Theme(
          data: Theme.of(context).copyWith(
            // sets the background color of the `BottomNavigationBar`
            canvasColor: darkColor,
            textTheme: Theme
              .of(context)
              .textTheme
              .copyWith(
                caption: new TextStyle(color: Color.fromRGBO(127, 127, 127, 1)
              )
            ),
          ),
          child: BottomNavigationBar(
            iconSize: 20.0,
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
            fixedColor: lightColor,
            onTap: _onItemTapped,
          ),
        ),
      ),
    );
  }

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }
}