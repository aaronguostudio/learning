//
//  DataToJSPresenter.m
//  RNHybirdiOS
//
//  Created by jph on 27/06/2018.
//  Copyright © 2018 devio. All rights reserved.
//

#import "DataToJSPresenter.h"

@implementation DataToJSPresenter

RCT_EXPORT_MODULE();

- (NSArray<NSString *> *)supportedEvents
{
    return @[@"testData"];
}
- (instancetype)init {
    if (self = [super init]) {//在module初始化的时候注册fireData广播
        [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(fireData:) name:@"fireData" object:nil];
    }
    return self;
}
- (void)fireData:(NSNotification *)notification{//发送数据给RN
    NSString *eventName = notification.object[@"name"];
    NSDictionary *params = notification.object[@"params"];
    [self sendEventWithName:eventName body:params];
}

@end
