import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Column } from 'react-foundation/lib/components/grid.js';
var {Link} = require('react-router');
var SubNav = require('SubNav');
var OurStoryProfile = require('OurStoryProfile');
var ProfileNames = require('ProfileNames');
var BrideProfile = require('BrideProfile');
var GroomProfile = require('GroomProfile');
import ImageGallery from '../components/ImageGallery';
const arrow = require('../images/arrow.png');
const Asset28 = require('../images/Asset28.png');
require('style!css!node_modules/react-dropzone-component/styles/filepicker.css');
require('style!css!node_modules/dropzone/dist/min/dropzone.min.css');
import DropzoneComponent from 'react-dropzone-component';
var ReactDOMServer = require('react-dom/server');
var componentConfig = { postUrl: 'no-url'};
var djsConfig = { autoProcessQueue: false }
var eventHandlers = { addedfile: (file) => console.log(file) }

  class OurStory extends React.Component{

    constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
      value1: 'Start your story here...',
      value2: 'Start your story here...',
      value3: 'Start your story here...'
    };
  }

  handleClick = () => {
    this.setState({isEditing: true,
      value1: event.target.value,
      value2: event.target.value,
      value3: event.target.value});
  }

  handleChange(event) {
  this.setState({

    });
  }
componentDidMount(){

  let {user,couple} = this.props.accounts;
  var gender = user.gender;
  if (gender === 'male'){
    this.props.bridecouplecreate(user.id)
  }else{
    this.props.groomcouplecreate(user.id)
  }
}
   render() {

     let {user,couple} = this.props.accounts;
     if(!user){
       user={};
     }
     if(!couple){
       couple={};
     }
     let groomname = couple.groom.name;
     let groompic=couple.groom.profilePictureUrl;
     let bridename = couple.bride.name;
     let bridepic = couple.bride.profilePictureUrl;

       return(
          <div>
              <SubNav isEditing={this.state.isEditing}/>
              <div className="row ourstory">
                <div className="column small-centered medium-6 large-4">
                  <OurStoryProfile/>
                  <ProfileNames bridename={bridename} groomname={groomname}/>
                </div>
              </div>
              <h6> BRIDE & GROOM</h6>
              <Row upOnSmall={1} upOnMedium={4} upOnLarge={4}>
                <Column isColumn offsetOnLarge={3} offsetOnMedium={3} centerOnSmall>
                    <BrideProfile bridename={bridename} bridepic={bridepic}/>
                </Column>
                <Column isColumn centerOnSmall>
                    <GroomProfile groomname={groomname} groompic={groompic}/>
                  </Column>
              </Row>
              <Row className="text-editor" onClick={this.handleClick}>
                <Column large={6} medium={6}>
                  <form onSubmit={this.handleSubmit}>
                      <textarea className="storytextbride" value={this.state.value1} onChange={this.handleChange} />
                  </form>
                </Column>
                <Column large={6} medium={6}>
                  <form onSubmit={this.handleSubmit}>
                      <textarea className="storytextgroom" value={this.state.value2} onChange={this.handleChange} />
                  </form>
                </Column>
              </Row>
              <h6> OUR STORY</h6>
                <form onSubmit={this.handleSubmit}>
                    <textarea className="storytextcouple" value={this.state.value3} onChange={this.handleChange} />
                </form>
                <DropzoneComponent config={componentConfig}
                       eventHandlers={eventHandlers}
                       djsConfig={djsConfig} />,


              <div className="schedule">
                <h6>SCHEDULE</h6>
                <h4>Wedding</h4>
                <Row>
                  <Column isColumn small={12} medium={6} small-centered className="venue">
                    Venue :
                  </Column>
                  <Column isColumn small={12} medium={6} small-centered className="venuedate">
                    Date : 23/09/2017
                  </Column>
                </Row>
                <img src={Asset28} style={{marginLeft:"45%",marginTop:"2%"}}/>
                <h4>add A Ceremony</h4>
              </div>
              <div className="thankyou">
                <h1 style={{fontSize:'70px', color:"#58b9b0", fontFamily:"Sacramento", paddingBottom:"0.5em"}}>Thank You!</h1>
                <h5>View Our Wishlist</h5>
                <img src={arrow} style={{height:"10%",width:"15%"}}/>
              </div>

        </div>
      );
    }
    };

module.exports = OurStory;
