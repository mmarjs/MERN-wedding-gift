import React, { Component } from 'react';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';
import { Row, Column } from 'react-foundation/lib/components/grid.js';

import exampleImage from '../images/asset1.png';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const RedditIcon = generateShareIcon('reddit');

class Share extends Component {
  render() {
    const shareUrl = 'http://nuwed.in';
    const title = 'NuWed';

    return (
      <Row className="Demo__container">
        <Column className="Demo__some-network" small={3}>
          <FacebookShareButton
            url={shareUrl}
            title={title}
            picture={`${String(window.location)}/${exampleImage}`}
            className="Demo__some-network__share-button">
            <FacebookIcon
              size={48}
              round />
          </FacebookShareButton>

        </Column>

        <Column className="Demo__some-network" small={3}>
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button">
            <TwitterIcon
              size={48}
              round />
          </TwitterShareButton>

          <div className="Demo__some-network__share-count">
            &nbsp;
          </div>
        </Column>


        <Column className="Demo__some-network" small={3}>
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=":: "
            className="Demo__some-network__share-button">
            <WhatsappIcon size={48} round />
          </WhatsappShareButton>

          <div className="Demo__some-network__share-count">
            &nbsp;
          </div>
        </Column>

        <Column className="Demo__some-network" small={3}>
          <GooglePlusShareButton
            url={shareUrl}
            className="Demo__some-network__share-button">
            <GooglePlusIcon
              size={48}
              round />
          </GooglePlusShareButton>
        </Column>

      </Row>
    );
  }
}

export default Share;
