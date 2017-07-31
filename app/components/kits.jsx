import React, { PropTypes, Component } from 'react';
import { Row, Column } from 'react-foundation/lib/components/grid.js';
import ReactDOM from 'react-dom';
var images = require('../images/asset4.png');
import BrowseGiftsSubNav from 'BrowseGiftsSubNav';

var Asset32 = require('../images/Asset32.png');
var Asset33 = require('../images/Asset33.png');
var Asset34 = require('../images/Asset34.png');
var Asset35 = require('../images/Asset35.png');
var Asset36 = require('../images/Asset36.png');


class Kits extends Component {

    render(){

    return (
        <div>
        <BrowseGiftsSubNav/>
        <div className="kitsheading">
          <div> NUWED Gifts Kits</div>
          <img src={require('../images/asset4.png')}/>
        </div>

          <Row upOnSmall={1} upOnMedium={2} upOnLarge={2} align-center className="kitsrow1">
            <Column isColumn centerOnSmall centerOnLarge centerOnMedium >
                <img src={require('../images/Asset6.png')}/>
            </Column>
            <Column isColumn centerOnSmall>
                <img src={require('../images/Asset7.png')}/>
            </Column>
          </Row>
          <Row upOnSmall={1} upOnMedium={3} upOnLarge={3} className="kitsrow2">
                <Column isColumn centerOnSmall>
                  <img src={require('../images/Asset8.png')} style={{height: "20%"}}/>
                </Column>
                <Column isColumn centerOnSmall>
                  <img src={require('../images/Asset9.png')} style={{height: "20%"}}/>
                </Column>
                <Column isColumn centerOnSmall>
                  <img src={require('../images/Asset10.png')} style={{height: "20%"}}/>
                </Column>
           </Row>

           <Row upOnSmall={1} upOnMedium={2} upOnLarge={2} style={{marginBottom:"20%"}}>
             <Column isColumn>
               <div className="grid-block-example1">
                 <div className="kitsheading"> Kit 2</div>
                 <Row upOnSmall={1} upOnMedium={2} upOnLarge={2} >
                   <Column isColumn>
                     <img src={Asset34}/>
                   </Column>
                   <Column isColumn>
                     <img src={Asset35}/>
                   </Column>
                   <Column isColumn>
                     <img src={Asset36}/>
                   </Column>
                   <Column isColumn>
                     <img src={Asset34}/>
                   </Column>
                 </Row>
                </div>
             </Column>
             <Column isColumn>
               <div className="grid-block-example2">
                 <div className="kitsheading"> Kit 3</div>
                 <Row upOnSmall={1} upOnMedium={2} upOnLarge={2} >
                   <Column isColumn>
                     <img src={Asset34}/>
                   </Column>
                   <Column isColumn>
                     <img src={Asset35}/>
                   </Column>
                   <Column isColumn>
                     <img src={Asset36}/>
                   </Column>
                   <Column isColumn>
                     <img src={Asset34}/>
                   </Column>
                 </Row>
                </div>
             </Column>
           </Row>
         </div>
    );
}
}


export default Kits;
