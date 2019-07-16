# In App Purchase
- go to developer.apple.com and follow the steps to create an app id
- go to appstoreconnect
  - add bank agreement
  - add a new app and setup In-App purchases feature
- go to Products > switch on In-App purchase
- add data into table view
- add productID which created from the previous steps
- using StoreKit
  ```swift
  if SKPaymentQueue.canMakePayments() {
      let paymentRequest = SKMutablePayment()
      paymentRequest.productIdentifier = productID
      SKPaymentQueue.default().add(paymentRequest)
  } else {
      print("User can't make payment")
  }
  ```
- delegate SKPaymentTransactionObserver
  ```swift
  SKPaymentQueue.default().add(self)

  ...

  func paymentQueue(_ queue: SKPaymentQueue, updatedTransactions transactions: [SKPaymentTransaction]) {
        for transaction in transactions {
            if transaction.transactionState == .purchased {
                print("Success")
            } else if transaction.transactionState == .failed {
                print("Failed")
            }
        }
    }
  ```
- create a sandbox user
  - appstoreconnect > Users and Access > Sandbox Testers > add test user
  - tricks: using gmail alias to create multiple users
    - aaronguostudio+ios@gmail.com
  - logout current user from app store and login as the sandbox user
- Got error message "cannot connect to iTunes Store", maybe the paid apps is still pending, will circle this later
- close the transaction and get error
  ```swift
  func paymentQueue(_ queue: SKPaymentQueue, updatedTransactions transactions: [SKPaymentTransaction]) {
      for transaction in transactions {
          if transaction.transactionState == .purchased {
              print("Success")

              SKPaymentQueue.default().finishTransaction(transaction)
          } else if transaction.transactionState == .failed {
              print("Failed")

              if let error = transaction.error {
                  let errorDescription = error.localizedDescription
                  print(errorDescription)
              }

              SKPaymentQueue.default().finishTransaction(transaction)
          }
      }
  }
  ```

<!-- start from 274 -->
