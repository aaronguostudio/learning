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
- load and decode data from plist

# Core Data
- 6 different approaches of storing data in iOS, check anki card
- create a project has core data, the purpose is copying the template code to todoey app
- create a DataModel type of file in todoey app and paste the related code from new project
  - import CoreData
  - change the model name
- create an Entity in DataModel
  - add attributes and check optionl
  - select Module to Current Product Module
  - codegen types
    - Category/Extension could add some custom code
    - Class Definition is auto-generated
    - Manul/None is fully costum designed
  - NSPersistentContainer will use default container
  - Updatting Item as CoreData model and add save/load functions
- in core data
  - what is contenxt
- load and delete data from coreData
- searchBar
  - add searchBar delegate
```swfit
// another way to delegate
extension TodoListViewController : UISearchBarDelegate {
  func searchBarSearchButtonClicked(_ searchNar: UISearchBar) {
    // ...
  }
}

```
  - NSPredicate and query from the database
    - check this to learn more: https://academy.realm.io/posts/nspredicate-cheatsheet/
    - query the database
  - hide search bar in an async in main Thread

# Add category for todo list
- create a new tableViewController and link it to navigation controller as a Relational Segue
- create class for this new tableViewController
- create Category model and setup the relationship
- add category related functions
- add category item navigation
  - add prepare and performSegue
  - add selectedCategory property for TodoListViewController and add didSet hook
- add NSCompoundPredicate to trigger multiple query based on parentCategory and query

<!-- start from 248 -->
