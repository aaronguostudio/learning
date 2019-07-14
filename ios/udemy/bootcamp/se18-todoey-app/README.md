# Core Data, Realm,User Defaults, Learn Persistent Local Data Storage
- create a todoey app
- project: ./ios/imooc/Todoey

## UserDefaults
> userDefaults is for storing sample data, it should be really small
- check branch: todoey-app-codable
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
  - plist is designed for simple key value storage, use codeable to store custom datatype
- use encoder to save custom data to plist
- load and decode data from plist

# Core Data
- check branch: todoey-app-core-data
- 6 different approaches of storing data in iOS, check anki card
- create a project has core data, the purpose is copying the template code to todoey app
- create a DataModel type of file in todoey app and paste the related code from new project
  - import CoreData
  - change the model name
- create an Entity in DataModel
  - add attributes and check optionl
  - select Module to Current Product Module, in the shield icon menu
  - codegen types
    - Category/Extension could add some custom code
    - Class Definition is auto-generated
    - Manul/None is fully costum designed
  - in AppDelegation, NSPersistentContainer will use default container
  - Updatting Item as CoreData model and add save/load functions
- in core data
  - what is contenxt
  - in Controller, get context that created in the AppDelegation
    - (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContainer
- load and delete data from coreData
- searchBar
  - add searchBar delegate
  ```swfit
  // another way to delegate
  extension TodoListViewController : UISearchBarDelegate {
    func searchBarSearchButtonClicked(_ searchNar: UISearchBar) { ... }
  }
  ```
  - NSPredicate and query from the database
    - check this to learn more: https://academy.realm.io/posts/nspredicate-cheatsheet/
    - query the database
  - hide search bar in an async in main Thread
- create a new tableViewController and link it to navigation controller as a Relational Segue
- create class for this new tableViewController
- create Category model and setup the relationship
- add category related functions
- add category item navigation
  - add prepare and performSegue
  - add selectedCategory property for TodoListViewController and add didSet hook
- add NSCompoundPredicate to trigger multiple query based on parentCategory and query

# Realm
- install pod 'RealmSwift'
- init realm in AppDelegation
  - init a class without reference: _ = try Realm()
- create data model and add @objc dynamic var name : String = ""
- check the location of realm storage
  - print(Realm.Configuration.defaultConfiguration.fileURL)
  - use realm browser open the file, command + shift + G to go to the path
- create Item and Category data models and define the relationships
- fix the code to align with realm implementation
- CRUD
  - load categories
  - deal with the situation when categories is nil
  - save categories and items
  - delete items
  - query and sort items
  - add an item for Category
    - currentCategory.items.apprend(newItem)
  - add new dateCreated field on Item
  - delete the app to make the data to migrate

# Dress up
- add pod
  - pod 'SwipeCellKit', '2.5.4'
- create a new controller
- add delete method as documentation mentioned
- add delete icon
- make Content View inherits from SwipTableViewCell and module as SwipeCellKit
- add delete function
- add expansion to delete
- add a parent SwipeTableViewController which has the expansion deletion function
  - define cellForRowAt function to define the cell, also change the cell name to genaric "Cell"
  - get cell from parentView: let cell = super.tableView(...)
  - retrieve cell from super: let cell = super.tableView(tableView, cellForRowAt: indexPath)
  - override delete function
  - do it on the TodoListViewController, don't forget to chagne the cell to inherits the module SwipeCellKit
- Chameleon
  - add colors
- Improve the UI
  - navigationController check Perfers Large Titles
  - how to use guard
  - using viewWillAppear hook, this will make sure navigationController loaded
  - using guard let instead of if let
  - reset nav bar color in viewWillDisappear hook

# Done
- so many knowledge from this module, will create a practice app using the concepts
