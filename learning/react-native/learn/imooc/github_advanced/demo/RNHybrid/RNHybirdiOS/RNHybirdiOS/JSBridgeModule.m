//
//  DataToJSPresenter.m
//  RNHybirdiOS
//
//  Created by jph on 27/06/2018.
//  Copyright © 2018 devio. All rights reserved.
//

#import "JSBridgeModule.h"

@implementation JSBridgeModule

RCT_EXPORT_MODULE();
- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();//让RN在主线程回调这些方法
}
RCT_EXPORT_METHOD(doAdd:(NSInteger )num1 num2:(NSInteger )num2 resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    NSInteger result=num1+num2;
    resolve([NSString stringWithFormat:@"%ld",(long)result]);//回调JS
}
RCT_EXPORT_METHOD(sendMessage:(NSDictionary*)params){//接受RN发过来的消息
    [[NSNotificationCenter defaultCenter] postNotificationName:@"sendMessage" object:params];
}
@end
