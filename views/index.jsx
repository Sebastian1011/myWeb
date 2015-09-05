var React = require('react');
var DefaultLayout = require('./layout');


var HelloMessage = React.createClass({
  

  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div className="navbar-default navbar-fixed-top" >
          <div className="container center-block">
            <h1>小名之家 <small>欢迎{this.props.name}Version 0.0.1</small></h1>
          </div>
        </div>
        <div className="main container">
          <div></div>
          <a href="/html/myself.html" id="myself">关于我</a>
        </div>

        
      </DefaultLayout>
    );
  }
});

module.exports = HelloMessage;