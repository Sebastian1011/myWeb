var React = require('react');
var DefaultLayout = require('./layout');


var HelloMessage = React.createClass({
  

  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div className="navbar-default navbar-fixed-top" >
          <div className="container center-block">
            <h1>小名之家<small>Version 0.0.1</small></h1>
          </div>
        </div>
        <div className="main container">
          <div>欢迎 {this.props.name}</div>
          <a href="/html/myself.html" id="myself">about myself</a>
        </div>

        
      </DefaultLayout>
    );
  }
});

module.exports = HelloMessage;