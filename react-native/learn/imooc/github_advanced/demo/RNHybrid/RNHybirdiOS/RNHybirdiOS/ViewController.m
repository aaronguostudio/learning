//
//  ViewController.m
//  RNHybirdiOS
//
//  Created by jph on 26/06/2018.
//  Copyright © 2018 devio. All rights reserved.
//

#import "ViewController.h"
#import "RNPageController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


- (IBAction)goTo:(id)sender {
    NSString*inputString=[self.input text];
    NSString*inputParams=[self.inputParams text];
    
    RNPageController *next = [[self storyboard] instantiateViewControllerWithIdentifier:@"RNPage"];
    next.moduleName=inputString;
    next.paramsInit=inputParams;
    [self presentViewController:next animated:true completion:nil];
}
@end
