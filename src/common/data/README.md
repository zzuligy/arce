# 数据层
数据层主要包含数据的请求部分(http,socket, localStorage)、数据请求接口部分(Resource)
结构是：
                     
                组合出的业务数据逻辑
       ----------------------------------------                     
                     数据流
       ----------------------------------------   
        数据请求抽象层：    Resource【api资源列表】
       ----------------------------------------
       数据请求处理层：http|socket|localStorage

还包含API资源定义部分。API定义部分包含了资源相应的请求信息。例如
    
    /user
    get
        request:string id
        response:{name:string:'gy',age:number:10}
        
api部分作为MOCK和接口文档来使用。        
                
        

##数据请求抽象层
这一层面向resetful，对resetful接口对应的资源进行抽象。主要
抽象出一个Resource的数据结构
    
    {
        get:
        save:
        update:
        remove:   
    }
    
    
一切数据的操作都通过这样的接口规范进行
Resource api的返回都是promise。

 ## 数据请求处理层
 数据请求层包含各种请求技术，目前只包含HTTP。以后还可以扩展各种请求技术。
 但是，无论使用什么都暴露为Resource规范接口。    
 
 
 ## 中间件处理
 
    mock 
    if id exist
        mock data