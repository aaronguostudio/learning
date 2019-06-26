# A challenge creating a bitcoin app
- selection app: https://github.com/londonappbrewery/Flash-Chat-iOS12
- project: BitcoinTicker-iOS12
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

# Coding
- connecting to Firebase
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

<!-- start from se199 -->
