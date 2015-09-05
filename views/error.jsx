var React = require('react');
var ErrorLayout = require('./errorLayout');


var ErrorMessage = React.createClass({
  

  render: function() {
    return (
      <ErrorLayout title="Error">
        <div className="main container center">
          <div>
            <a><img src="/images/error.jpg" /></a>
            <h1>Error</h1>
            <h2>{this.props.message}</h2>
            <h2>{this.props.error.status}</h2>
          </div>
          
        </div>

        
      </ErrorLayout>
    );
  }
});

module.exports = ErrorMessage;