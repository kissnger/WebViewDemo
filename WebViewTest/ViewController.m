//
//  ViewController.m
//  WebViewTest
//
//  Created by Massimo on 15/10/28.
//  Copyright © 2015年 Massimo. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()<UIWebViewDelegate>
@property (weak, nonatomic) IBOutlet UIWebView *webView;

@end

@implementation ViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  // Do any additional setup after loading the view, typically from a nib.

  NSString *path = [[NSBundle mainBundle] pathForResource:@"index" ofType:@"html" inDirectory:@"releaseA"];
  NSURLRequest *request = [NSURLRequest requestWithURL:[NSURL fileURLWithPath:path]];
  _webView.delegate=self;
  [_webView loadRequest:request];
  _webView.scalesPageToFit = YES;
  [self.view addSubview:_webView];
//  aksdjf
}

- (void)webViewDidFinishLoad:(UIWebView *)webView
{


}
- (void)didReceiveMemoryWarning {
  [super didReceiveMemoryWarning];
  // Dispose of any resources that can be recreated.
}

@end
