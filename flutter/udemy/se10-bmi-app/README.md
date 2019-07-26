# BMI App

- Theme
```dart
MaterialApp(
  theme: ThemeData(...// with all of the others params)
)

// or I can only define some
return MaterialApp(
  theme: ThemeData.dark().copyWith(
    primaryColor: Color(0xff0A0E21),
    scaffoldBackgroundColor: Color(0xff0A0E21),
  )
  home: InputPage(),
);
```

- how to import component from other file
- final vs const
- create resuable component
  - pass params and child Widget into the component
- add package
- using GestureDetector
- using enum

```dart
void main () {
  Car myCar = Car(carStyle: CarType.convertible)
}

class Car {
  CarType carStyle;
  Car({this.carStyle})

}

enum CarType {
  SUV,
  coupe,
  hatchback,
  convertible
}

```

- passing by function

```dart
void main () {
  int res1 = calculator(3, 4, add);
  int res2 = calculator(3, 4, multiply);

  calculator(1, 2, add)
}

int calculator(int n1, int n2, Function calculation) {
  return calculation(n1, n2);
};

final Function calculator = (int n1, int n2, Function calculation) {
  return calculation(n1, n2)
}

int add (int a, int b) {
  return a + b
}

int multiply (int a, int b) {
  return a * b
}


class Car {
  Car({this.drive})
  Function drive;
}

void slowDrive() {
  print('slow')
}

void fastDrive() {
  print('slow')
}

Car myCar = Car(drive: slowDrive)

```

- using slider and using sliderTheme

```dart
SliderTheme(
  // SliderTheme.of(context) will copy all current styles, instead of
  // define all of them. then use copyWith to overwrite some
  data: SliderTheme.of(context).copyWith(
    inactiveTrackColor: Color(0xF8D8E98),
    activeTrackColor: Colors.white,
    thumbColor: Color(0xFFEB1555),
    overlayColor: Color(0x29EB1555),
    thumbShape: RoundSliderThumbShape(enabledThumbRadius: 12.0),
    overlayShape: RoundSliderOverlayShape(overlayRadius: 20.0),
  ),
  child: Slider(
      value: height.toDouble(),
      min: 120.0,
      max: 220.0,
      onChanged: (double height) {
        setState(() {
          this.height = height.round();
        });
      }
  ),
)
```

- flutter const naming convention
  - adding k as prefix represents for const

- Using RawMaterialButton and compose it as a custom component

- navigation
  - tempalte project
  - https://github.com/londonappbrewery/Navigation-Flutter-Demo
  - Navigator.push()
  - Navigator.pop()
  - Using Named Route

```dart
return MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (context) => Screen0(),
    '/first': (context) => Screen1(),
    '/second': (context) => Screen2(),
  },
);

// go to a named route
Navigator.pushNamed(context, '/first');
```

- Dart maps
```dart
Map<String, int> phoneBook = {
  'Aaron': 123323,
  'Ben': 12144,
}

main () {
  print(phoneBook['Aaron'])
}
```

