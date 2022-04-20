中青看点版本：2.0.2

  [toc]  

 # <center> 中青看点使用说明 </center>

 [跳转至底部](#注意事项)  ----  [回到主页](https://github.com/Sunert/Script)

### IOS配置教程
 ```
[MITM]
hostname = kd.youth.cn, kandian.wkandian.com 
 ```

#### Quantumult X:
   * [远程重写配置](https://raw.githubusercontent.com/Sunert/Script/master/TaskConf/youth/qx_rewite.txt)
   
```
[rewrite_remote]
https://raw.githubusercontent.com/Sunert/Script/master/TaskConf/youth/qx_rewite.txt
```
   * 本地重写配置
   
```
[rewrite_local]
https:\/\/kd\.youth\.cn\/WebApi\/NewTaskIos\/getTaskList url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/youth.js
https:\/\/kandian\.wkandian\.com\/v5\/article\/info\.json url script-request-header https://raw.githubusercontent.com/Sunert/Script/master/Task/youth.js
https:\/\/kandian\.wkandian\.com\/v5\/user\/stay\.json url script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/youth.js
https:\/\/kandian\.wkandian\.com\/v5\/\w+\/withdraw\d?\.json url script-request-body https://raw.githubusercontent.com/Sunert/Script/master/Task/youth.js
```
   * 本地任务配置
   
```
[task_local]
1 */5 * * * https://raw.githubusercontent.com/Sunert/Script/master/Task/youth.js, enabled=true, tag=中青看点
```
###  获取Cookie方法
  * 打开极速版APP，进去我的"任务中心"，提示获取Cookie
  - 打开一篇短文资讯，提示获取阅读请求
  * 多阅读几篇短文，随机获取阅读时长请求(至少1分钟左右，增加时长有关)
  - 正常提现一次，获取提现请求(可选，AC无添加)
  
 >>> [回到顶部](#IOS配置教程)

 
### 注意事项:
 - __提现金额需该请求一致，只更改提现金额无效，默认30元__
 
 * __惊喜红包已下架，现所有请求均采用IOS新版APP任务__
