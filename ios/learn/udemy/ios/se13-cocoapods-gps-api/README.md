# Cocoapod
- code url: https://github.com/aaronguostudio/learn-ios/tree/master/ui/clima-ios12
  - WeatherViewController
  - WeatherCityViewController

## Install cocoapod
- sudo gem install cocoapods
- pod setup --verbose

## Install project dependencies
- pod init
- add pods
```ruby
platform :ios, '9.0'

target 'Clima' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!

  # Pods for Clima
  pod 'SwiftyJSON'
  pod 'Alamofire'
  pod 'SVProgressHUD'
end

```
- pod install

## Using CoreLocation
- add CLLocationManagerDelegate
- accuricy
- request location
- add Privacy to into.plist
- remove https constrains (for dev purpose)
- add delegation
- http request
  - using Alamofire
  - using SwiftyJSON to parse data
  - creating Model to hold the data
- update UI
- knowledge: how to use segues
  - checkout project about the basic of segue
- add protocol to the second page ( inorder to pass data back to the first screen )

<!-- start from here -->
https://www.udemy.com/ios-12-app-development-bootcamp/learn/lecture/10929212#overview