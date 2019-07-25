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


<!-- start from here https://www.udemy.com/flutter-bootcamp-with-dart/learn/lecture/14485546#overview -->
