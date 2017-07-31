var React = require('react');
//const bridepic = require('../images/bridepic.png');

var BrideProfile = React.createClass({

  render:function() {
    var bridename = this.props.bridename;
    var bridepic = this.props.bridepic;
    console.log(bridepic);
    console.log(bridename);
    return(
        <div className="name">
          <div className="row bridegroomprofile">
            <img src={bridepic} className="bridegroomprofile"/>
          </div>
          <div style={{fontSize:'20px', color:"green"}} className="row">
            {bridename}
          </div>
        </div>
    );
  }
});

module.exports = BrideProfile;
