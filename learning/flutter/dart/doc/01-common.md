# Future
```dart
import 'dart:async'; 
test() async {
  int result = await Future.delayed(Duration(milliseconds: 2000), () {
    return Future.value(1);
  });
  print('t3: ' + DateTime.now().toString());
  print(result);
}
main() {
  print('t1: ' + DateTime.now().toString());
  test();
  print('t2: ' + DateTime.now().toString());
}
```