//加载依赖库
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//加载路由控制
var routes = require('./routes/index');
var users = require('./routes/users');

//创建项目实例
var app = express();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
//add express-react-views to our app

//定义jsx模版引擎和模版文件位置，也可以使用ejs和html，jade等模版
var engineOptions = { harmony: true };
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine(engineOptions));


// uncomment after placing your favicon in /public
//定义icon图标
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//定义日志和输出级别
app.use(logger('dev'));
//定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//定义cookie解析器
app.use(cookieParser());
//定义静态文件目录
app.use(express.static(path.join(__dirname, 'public')));
//匹配路径和路由
app.use('/', routes);
app.use('/users', users);

//404错误处理
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
//开发环境，500错误处理和错误堆栈跟踪
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

//生产环境500错误处理
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//输出模型app
module.exports = app;
