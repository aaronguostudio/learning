```dart
import 'dart:math';
void main() {
  var random = Random();
  Future.delayed(Duration(seconds: 3), () {
    if (random.nextBool()) {
      return 100;
    } else {
      throw 'boom!';
    }
  })
  .timeout(new Duration(seconds: 2))
  .then(print).catchError(print).whenComplete(() {
    print(print);
  });
}
```