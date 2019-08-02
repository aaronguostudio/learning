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

- Setup Firebase
  - add andorid app
  - update android > app > build.gradle application id
  - add google-services.json (download) into android > app folder
  - add dependencies to android:
    - https://firebase.google.com/docs/android/setup?authuser=0
    - build on android device and check if it works
      - notice, using the package version in the course, or it will have issue
  - add ios app in the same firebase project
  - add dependencies to ios:
    - open Runner.xcodeproj
    - put GoogleService-Info.plist into Runner
    - build app on ios to make sure it works
  - add flutter packages
    - firebase_core: ^0.4.0+8
    - firebase_auth: ^0.14.0
  - before start run on ios, update package first
    - pod repo update
    - sudo gem install cocoapods
    - pod setup
  - flutter 安装的包在 iOS 上，无论是视频里面，还是官网，都是无法运行的。
    - firebase_auth: ^0.11.1+3 可以肯定的是问题出在 firebase_auth 导致的闪退
    - cloud_firestore: ^0.12.9
    - 安卓可以运行。作为选择，可以先完成课程，之后跟踪看官方是否有解决方案
