//
//  RNPageController.h
//  RNHybirdiOS
//
//  Created by jph on 26/06/2018.
//  Copyright © 2018 devio. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface RNPageController : UIViewController
@property(strong,nonatomic)NSString*moduleName;
@property(strong,nonatomic)NSString*paramsInit;

@property(nonatomic, strong) UILabel *titleLabel;
@property(nonatomic, strong) UILabel *showLabel;
@property(nonatomic, strong) UITextField *inputView;
@end
