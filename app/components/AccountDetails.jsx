import React from 'react';
import { Row, Column } from 'react-foundation/lib/components/grid.js';
import Settings from 'Settings';
import SwitchButton from 'react-switch-button';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class AccountDetails extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      startDate: moment()

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
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
            <Column Small={12} Medium={6} centerOnSmall>
              <div className="accountdetailsleft">
                <p style={{fontFamily:"Raleway", textDecoration:"underline"}}>Delivery</p>
                <p>Configure your delivery preferences.</p>
                <p style={{paddingTop:"5%", textDecoration:"underline"}}> Manage Addresses</p>
                <p style={{color:"red",fontSize:"12px"}}> Primary</p>
                <form onSubmit={this.handleSubmit}>
                    <textarea className="acctext" value={this.state.value} onChange={this.handleChange} />
                </form>
                <p style={{color:"green"}}>Add</p>
              </div>
            </Column>
            <Column className="accountdetailsright" isColumn Small={12} Medium={6} centerOnSmall>
              <div>
                <p style={{fontWeight:"bold"}}>Auto Confirmation</p>
                Disable  <SwitchButton/>   Enable
                <p style={{fontSize:"12px", paddingBottom:"5%"}}>When the completion for a gift  happens, the gift  is ordered automatically. Disable to change that behavior and manage it manually.
</p>

                <p style={{fontWeight:"bold"}}>Manual Settings</p>
                <span> Choose a date &nbsp;&nbsp;&nbsp;&nbsp;<DatePicker className="date" selected={this.state.startDate} onChange={this.handleChange}/></span>
                <p style={{fontSize:"12px"}}>Choosing a date means you want us to deliver it on this particular date to your Primary Address
</p>
              </div>
            </Column>
          </Row>
        </div>
    );
  }

}

export default AccountDetails;
