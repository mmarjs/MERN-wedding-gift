import React from 'react';
import { Row, Column } from 'react-foundation/lib/components/grid.js';
import Settings from 'Settings';

class PaymentGifts extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
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
          <div>
            <Settings/>
          </div>
          <Row upOnSmall={1} upOnMedium={2} upOnLarge={2}>
            <Column Small={12} Medium={6} centerOnSmall>
              <div className="paymentgiftsleft">
                <p style={{fontFamily:"Raleway", textDecoration:"underline"}}>Auto Confirmation</p>
                <p>When the comple on for a gi  happens, the gi  is ordered automa cally. Disable to change that behavior and manage it manually.</p>
                <p style={{paddingTop:"5%", textDecoration:"underline"}}> Manage Addresses</p>
                <p style={{color:"red",fontSize:"12px"}}> Primary</p>
                <form onSubmit={this.handleSubmit}>
                    <textarea className="pgtext" value={this.state.value} onChange={this.handleChange} />
                </form>
                <p style={{color:"green"}}>Add</p>
              </div>
            </Column>
            <Column className="paymentgiftsright" isColumn Small={12} Medium={6} centerOnSmall>
              <div>
                <p style={{fontSize:"12px"}}> <span style={{paddingRight:"18em"}}>Secondary</span><span style={{color:"green"}}>Set as Primary</span></p>
                <form onSubmit={this.handleSubmit}>
                    <textarea className="pgtextright" value={this.state.value} onChange={this.handleChange} />
                </form>
                <p style={{fontSize:"12px"}}> <span style={{paddingRight:"18em"}}>Secondary</span><span style={{color:"green"}}>Set as Primary</span></p>
                <form onSubmit={this.handleSubmit}>
                    <textarea className="pgtextright" value={this.state.value} onChange={this.handleChange} />
                </form>
              </div>
            </Column>
          </Row>
        </div>
    );
  }

}

export default PaymentGifts;
