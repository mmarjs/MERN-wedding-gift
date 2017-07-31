var React = require('react');
const logo = require('../images/edit.png');
var ProfileNames = React.createClass({

  render: function() {
    var groomname = this.props.groomname;
    var bridename = this.props.bridename;
    return(
        <div>
        <div className="row profilenames">
          <div className="column small-12 medium-12 large-12 medium-centered small-centered" style={{fontSize:'40px', color:"#58b9b0"}}>
              {bridename} & {groomname}<span><img style={{width:"10%", height:"10%"}} src={logo}/> </span>
          </div>
        </div>
          <div className="row profilenames">
            <div className="column small-6 medium-6 medium-centered small-centered">
              7/05/2019
          </div>
          </div>
        </div>
    );
  }
});

module.exports = ProfileNames;
