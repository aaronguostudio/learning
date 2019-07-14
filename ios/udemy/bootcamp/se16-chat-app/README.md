# Project
- project: Flash Chat App
- template: https://github.com/londonappbrewery/Flash-Chat-iOS12
- code: ./code/ios/imooc/Flash-Chat-iOS12

# Preparatiom
- use Firebase platform
  - create an ios app
  - add bundle id
  - download and move the plist file
  - install pods
```ruby
pod 'Firebase/Core'
pod 'Firebase'
pod 'Firebase/Auth'
pod 'Firebase/Database'
pod 'SVProgressHUD'
pod 'ChameleonFramework'
```
  - get rid of the warning, add
```ruby
post_install do |installer|
  installer.pods_project.targets.each do |target|
    target.build_configurations.each do |config|
      config.build_settings['CLANG_WARN_DOCUMENTATION_COMMENTS'] = 'NO'
    end
  end
end
```
  - pod update

# Coding outline
- connecting to Firebase
  - add email auth on firebase configuration
  - add connecting code in AppDelegate
  - create real-time database
- Firebase
  - sign-in method: add email/password
  - add auth code from Firebase SDK
- Closures
  - Review in Anki card
- try catch in swift
- Navigation Controller
  - select controller -> editor -> embed in -> Navigation Controller
- TableView in chat Controller
  - tableView delegate: UITableViewDelegate, UITableViewDataSource
  - declare: cellForRowAtIndexPath
  - declare: numberOfRowsInSection
  - .xib / .nib to design the custom cell
    - create a sub-class for UITableViewCell
    - register the nib
    - config cell to make its height adjust automatically
- Message Model
- Animation
  - update constrain params
  - declare: UITextFieldDelegate
    - textFieldDidBeginEditing()
    - textFieldDidEndEditing()
  - trigger textFieldBeginEditing

```swift
UIView.animate(withDuration: 0.3) {
  self.heightConstraint.constant = ...
  self.view.layoutIfNeeded()
}
```

  - add UITapGestureRecognizer()
  - add @objc to compatible with object-C
- Send message and save to firebase
  - save message as a dictionary
- Retrieve data from db and convert to dictionary data type
  - using observe method to subscript new messages
  - convert returned new message as dictionary

```swift
messageDB.observe(.childAdded) {
  { snapshot } in
  let snapshot = snapshot.value as! Dictionary<String, String>
  ...

  self.messageTableView.reloadData()
}
```

- Diplay data in the UI
- Update firebase rules
  - "rules": {
        ".read": "auth != null",
        ".write": "auth != null"
    }
- add progress bar
- using ChameleonFramework for colors
