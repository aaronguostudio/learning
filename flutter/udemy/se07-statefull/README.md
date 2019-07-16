
```dart
import 'package:flutter/material.dart';
import 'dart:math';

void main() {
  return runApp(
    MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.red,
        appBar: AppBar(
          title: Text('Dicee'),
          backgroundColor: Colors.red,
        ),
        body: DicePage(),
      ),
    ),
  );
}

class DicePage extends StatefulWidget {
  @override
  _DicePageState createState() => _DicePageState();
}

class _DicePageState extends State<DicePage> {
  int diceIndex1 = generateDice();
  int diceIndex2 = generateDice();

  void updateDices () {
    diceIndex1 = generateDice();
    diceIndex2 = generateDice();
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
        children: <Widget>[
          Expanded(
            child: FlatButton(
              onPressed: () {
                setState(() {
                  updateDices();
                });
              },
              child: Image.asset("images/dice$diceIndex1.png"),
            ),
          ),
          Expanded(
            child: FlatButton(
              onPressed: () {
                setState(() {
                  updateDices();
                });
              },
              child: Image.asset("images/dice$diceIndex2.png"),
            ),
          )
        ],
      ),
    );
  }
}

int generateDice () {
  var random = new Random();
  int n = random.nextInt(6) + 1;
  print(n);
  return n;
}
```


<!-- start from 60 -->
