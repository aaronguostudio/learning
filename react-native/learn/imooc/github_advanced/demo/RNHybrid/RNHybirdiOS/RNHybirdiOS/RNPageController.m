//
//  RNPageController.m
//  RNHybirdiOS
//
//  Created by jph on 26/06/2018.
//  Copyright © 2018 devio. All rights reserved.
//

#import "RNPageController.h"
#import <React/RCTRootView.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTEventEmitter.h>

@interface RNPageController ()
@property(nonatomic,assign)int width;

@end

@implementation RNPageController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.width=CGRectGetWidth(self.view.frame);
    [self initRCTRootView];
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(sendMessage:) name:@"sendMessage" object:nil];
}
- (void)initRCTRootView{
    NSURL *jsCodeLocation;
    //    jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"]; //手动拼接jsCodeLocation用于开发环境
    //       jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"]; //release之后从包中读取名为main的静态js bundle
    jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil]; // 通过RCTBundleURLProvider生成，用于开发环境
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
                                moduleName: self.moduleName //这个"App1"名字一定要和我们在index.js中注册的名字保持一致
                         initialProperties:@{@"params":self.paramsInit}//RN初始化时传递给JS的初始化数据
                             launchOptions: nil];
    self.view=rootView;
    [self initView];
}

- (void)initView {
    UIView*containerView=[[UIView alloc] initWithFrame:CGRectMake(0, 0, self.width, 120)];
    
    UIButton * backBtn=[[UIButton alloc] initWithFrame:CGRectMake(0, 20, 50, 30)];
    [backBtn setTitle:@"Back" forState:UIControlStateNormal];
    [backBtn setTitleColor:[UIColor blackColor] forState:(UIControlStateNormal)];
    [backBtn addTarget:self action:@selector(backClick:) forControlEvents:UIControlEventTouchUpInside];
    [containerView addSubview:backBtn];
    
    self.titleLabel=[[UILabel alloc] initWithFrame:CGRectMake(50, 20, self.width-100, 30)];
    self.titleLabel.textAlignment=NSTextAlignmentCenter;
    self.titleLabel.textColor =[UIColor blackColor];
    self.titleLabel.text=@"RNHybird ";
    [containerView addSubview:self.titleLabel];
    
    self.showLabel=[[UILabel alloc] initWithFrame:CGRectMake(0, 50, self.width, 30)];
    self.showLabel.textColor =[UIColor blackColor];
    self.showLabel.text=@"收到JS消息在这展示：";
    [containerView addSubview:self.showLabel];
    
    self.inputView=[[UITextField alloc] initWithFrame:CGRectMake(0, 80, self.width-150, 30)];
    self.inputView.textColor =[UIColor blackColor];
    self.inputView.borderStyle=UITextBorderStyleLine;
    [containerView addSubview:self.inputView];
    
    UIButton *btnSend=[[UIButton alloc] initWithFrame:CGRectMake(self.width-150, 80, 150, 30)];
    [btnSend setTitle:@"Send data to JS" forState:UIControlStateNormal];
    [btnSend setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
    [btnSend addTarget:self action:@selector(sendMsgToJS) forControlEvents:UIControlEventTouchUpInside];
    [containerView addSubview:btnSend];
    
    [self.view addSubview:containerView];
}
- (void)backClick:(UIButton*)target{
    [self dismissViewControllerAnimated:true completion:nil];
}
- (void)sendMsgToJS{
    NSString*data=self.inputView.text;
    [[NSNotificationCenter defaultCenter] postNotificationName:@"fireData" object:@{@"name":@"testData",@"params":@{@"data":data}}];
}
-(void)sendMessage:(NSNotification*)notification{
    NSDictionary*params=notification.object;
    UIAlertView *alert=[[UIAlertView alloc] initWithTitle:@"收到JS Data" message:[params description] delegate:nil cancelButtonTitle:@"OK" otherButtonTitles:nil, nil];
    [alert show];
}
@end
