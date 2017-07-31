import React from 'react';
import { Row, Column } from 'react-foundation/lib/components/grid.js';
import OurStoryProfile from 'OurStoryProfile';
import {name} from 'ProfileNames';
import Share from 'Share';
const one = require('../images/Asset25.png');
const two = require('../images/Asset26.png');
const gift = require('../images/Asset23.png');
const arrow = require('../images/Asset24.png');

class Publish extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: 'www.nuwed.com/'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
  this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('Your URL is selected ' + this.state.value);
    event.preventDefault();
  }

  render () {
    return (
        <div>
          <Row upOnSmall={1} upOnMedium={2} upOnLarge={2}>
            <Column Small={12} Medium={6} centerOnSmall>
              <p style={{color:"grey", textAlign:"center",fontFamily:"Raleway", marginBottom:"0",marginTop:"5%",fontSize:"20px"}}>Successfully Published</p>
              <div className="publishleft">
                <div className="publishtext">
                  <OurStoryProfile/>
                  <img src={arrow} style={{zIndex:"10", marginLeft:"17%",position:"absolute"}}/>
                  <p style={{fontSize:'45px', color:"#58b9b0", fontFamily:"Sacramento"}}>Congratulate</p>
                  <p style={{fontSize:'22px', color:"#58b9b0", fontFamily:"Sacramento"}}>Akshay & Saheli</p>
                  <p><img src={gift}/>&nbsp;&nbsp;&nbsp;Have a look at what Akshay & Saheli are looking forward to!</p>
                </div>

                <p>This is ready to be shared > ></p>
              </div>

            </Column>

            <Column className="publishright" isColumn Small={12} Medium={6} centerOnSmall>
              <div>
                <p style={{fontSize:'24px', color:"red", fontFamily:"Raleway"}}><img src={one}/>&nbsp;&nbsp;&nbsp;Customize your Link</p>
                  <Row>
                    <Column small={10}>
                      <form onSubmit={this.handleSubmit}>
                        <textarea className="text" value={this.state.value} onChange={this.handleChange} />
                      </form>
                    </Column>
                    <Column small={2}>
                      <ul className="no-bullet">
                        <li style={{color:"green"}}>Available</li>
                        <li>UnAvailable</li>
                      </ul>
                    </Column>
                  </Row>
                  <p>(Note : You can change the link name only now )</p>
                  <p style={{marginBottom:"0em"}}>Suggestions &nbsp;&nbsp;&nbsp;  www.SamAndIshiDaViah.nuwed.com</p>
                  <p style={{paddingLeft:"7em"}}>www.SamAndIshiDaViah.nuwed.com</p>
                  <button isHollow onClick={this.handleSubmit} style={{border:"1px solid grey",padding:"10px 50px 10px 50px",borderRadius:"20px", color:"#58b9b0",marginLeft:"30%",marginRight:"50%"}}>Select</button>
                  <p style={{fontSize:'24px', color:"red", fontFamily:"Raleway",paddingTop:"2em"}}><img src={two}/>&nbsp;&nbsp;&nbsp;Share via</p>
                  <div style={{width:"60%",marginLeft:"10%",paddingTop:"5%"}}>
                    <Share/>
                  </div>

              </div>
            </Column>
          </Row>
        </div>
    );
  }

}

Publish.contextTypes = {
  router: React.PropTypes.object
};

export default Publish;
