- Using named path
- Using Hero component
- Custom Animation
  - Animation Elements
    - Ticker
    - Animation Controller
    - Animation Value
```dart
AnimationController controller;
  Animation animation;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    controller = AnimationController(
      duration: Duration(seconds: 1),
      vsync: this,
      upperBound: 1.0
    );

    // curve animation
//    animation = CurvedAnimation(parent: controller, curve: Curves.decelerate);
//    animation.addStatusListener((status) {
//      if (status == AnimationStatus.completed) {
//        controller.reverse(from: 1.0);
//      } else if (status == AnimationStatus.dismissed) {
//        controller.forward();
//      }
//    });

    controller.forward();

    // tween animation
    animation = ColorTween(begin: Colors.blueGrey, end: Colors.white).animate(controller);


    controller.addListener(() {
      setState(() {});
      print(animation.value);
    });
  }

```


- Mixins in dart
```dart
void main () {
  Animal().move();
  Fish().move();
  Bird().move();
  Duck().move();
  Duck().fly();
  Duck().swim();
}

class Animal {
  void move () {
    print('move');
  }
}

class Fish extends Animal {
  @override
  void move () {
    super.move();
    print('swim');
  }
}

class Bird extends Animal {
  @override
  void move () {
    super.move();
    print('fly');
  }
}

// duck can swim and fly, using mixin to add the other functions
class Duck extends Animal with CanSwim, CanFly {

}

mixin CanSwim {
  void swim () {
    print('swim');
  }
}

mixin CanFly {
  void fly () {
    print('fly');
  }
}
```

<!-- starts from here https://www.udemy.com/flutter-bootcamp-with-dart/learn/lecture/14486510#overview -->
