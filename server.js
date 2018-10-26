var http = require('http');
var server = http.createServer(function(req,res){
    /*
        req用来接受客户端数据
        res用来向客户端发送服务器数据
    */
    console.log('有客户端连接');//创建连接成功显示在后台

    //一参是http请求状态，200连接成功
    //连接成功后向客户端写入头信息
    res.writeHeader(200,{
        'content-type' : 'text/html;charset="utf-8"'
    });

    // res.write('这是正文部分');
    res.end();
    // onBack({a:1});

}).listen(8888);

console.log('服务器开启成功');
