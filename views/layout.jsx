var React = require('react');

var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
        	<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
        	<title>{this.props.title}</title>
        	<link rel="stylesheet" href="//cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css" />
        	<link rel='stylesheet' href='/stylesheets/style.css' />
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
});

module.exports = DefaultLayout;