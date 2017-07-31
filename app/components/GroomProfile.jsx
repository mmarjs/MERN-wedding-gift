var React = require('react');
//const groompic = require('../images/groompic.png');


var GroomProfile = React.createClass({

  render:function() {
    var groomname = this.props.groomname;
    var groompic = this.props.groompic;
    console.log(groompic);
    console.log(groomname);
    return(
      <div className="name">
        <div className="row bridegroomprofile">
          <img src={groompic} className="bridegroomprofile"/>
        </div>

        <div style={{fontSize:'20px', color:"green"}} className="row">
          {groomname}
        </div>
      </div>
    );
  }
});

module.exports = GroomProfile;
