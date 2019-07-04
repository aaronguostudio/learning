# Core Data, Realm,User Defaults, Learn Persistent Local Data Storage
- create a todoey app
- project: ./ios/imooc/Todoey

## Code
- check off landscape
- add TableViewController and set it as initial controller
- reconnect TableViewController to a ViewController class
- add id for TableViewCell
- embed in navigation controller
- add datasource and cell for tableview
- load mock array data for table cells
- add click for table row
- add accessory as checkmark for tablecell
- add barButtonItem in navigation, add as system item
- handle user input and update the table view
- introduce about appDelegate and it's lifecycle
  - application
  - applicationWillResignActive
  - applicationDidEnterBackground
  - applicationWillEnterForeground
  - applicationDidBecomeActive
  - applicationWillTeminate
- store data in userDefaults
  - userDefaults will load all at once
  - userDefaults can only store small data
  - userDefaults can not store an array of custom objects
- get data from userDefaults
- get stored file location
  print(NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true).last! as String)
- singelton in swift
- using ItemDataModel for storing items
  - save an array of ItemDataModel in userDefault will cause the app crashing
- use encoder to save custom data to plist

  <!-- start from 234 -->







