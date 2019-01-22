//
//  ViewController.h
//  RNHybirdiOS
//
//  Created by jph on 26/06/2018.
//  Copyright © 2018 devio. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController
- (IBAction)goTo:(id)sender;
@property (weak, nonatomic) IBOutlet UITextField *input;
@property (weak, nonatomic) IBOutlet UITextField *inputParams;


@end

