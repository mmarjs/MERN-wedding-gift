import React from 'react';
import { Row, Column } from 'react-foundation/lib/components/grid.js';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Settings from 'Settings';
import {render} from 'react-dom';
// import Switch from 'react-toggle-switch'
require('style!css!react-switch-button/dist/react-switch-button.css');
require('style!css!react-datepicker/dist/react-datepicker.css');
import SwitchButton from 'react-switch-button';

class Personalize extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: 'Thanks a lot for contributing to our wishes',
      startDate: moment()
      //switched: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // toggleSwitch = () => {
  //   this.setState(prevState => {
  //     return {
  //       switched: !prevState.switched
  //     };
  //   });
  // };
  handleChange(event) {
  this.setState({
      value: event.target.value,
      startDate: date});
  }
  handleSubmit(event) {
    alert('Your URL is selected ' + this.state.value);
    event.preventDefault();
  }

  render () {
    return (
        <div>
          <div>
            <Settings/>
          </div>
          <Row upOnSmall={1} upOnMedium={2} upOnLarge={2}>
            <Column Small={12} Medium={6} centerOnSmall className="personalizeleft">
              <div>
                <p style={{color:"red", fontFamily:"Raleway"}}>Thank You Note</p>
                <div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <textarea className="pertext" value={this.state.value} onChange={this.handleChange} />
                </form>
              </div>
            </Column>
            <Column className="personalizeright" isColumn Small={12} Medium={6} centerOnSmall>
              <div>
                <p> <span style={{color:"red"}}>Automatically</span> Send the Thank you note as the gift is completed.</p>
                  Disable  <SwitchButton/>   Enable
                <p style={{paddingTop:"1em",paddingBottom:"1em"}}>or</p>
                 <p><span style={{color:"red"}}>Set Date</span> to send it on a particular date to all who donated.</p>
                <DatePicker className="date" selected={this.state.startDate} onChange={this.handleChange}/>
              </div>
            </Column>
          </Row>
        </div>
    );
  }

}

export default Personalize;
