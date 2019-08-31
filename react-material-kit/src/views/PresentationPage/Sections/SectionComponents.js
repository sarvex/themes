import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import componentsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/componentsStyle.js";

import macbookImage from "assets/img/assets-for-demo/presentationViewSectionComponent/laptop-basics.png";
import shoppingCartImage from "assets/img/assets-for-demo/presentationViewSectionComponent/table.jpg";
import shareButtonImage from "assets/img/assets-for-demo/presentationViewSectionComponent/share-btn.jpg";
import cardImage from "assets/img/assets-for-demo/presentationViewSectionComponent/coloured-card-with-btn.jpg";
import twitterImage from "assets/img/assets-for-demo/presentationViewSectionComponent/coloured-card.jpg";
import iconsImage from "assets/img/assets-for-demo/presentationViewSectionComponent/social-row.jpg";
import repostImage from "assets/img/assets-for-demo/presentationViewSectionComponent/pin-btn.jpg";

const useStyles = makeStyles(componentsStyle);

export default function SectionComponents() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={5} lg={5} sm={12} xs={12}>
            <h3 className={classes.title}>Basic Components</h3>
            <h6 className={classes.description}>
              The core elements of your website
            </h6>
            <h5 className={classes.description}>
              We re-styled every Bootstrap element to make it resemble Material
              Design and also fit with each other. All the Bootstrap components
              that you need in a development have been re-design with the new
              look. Besides the numerous basic elements, we have also created
              additional classes. All these items will help you take your
              project to the next level.
            </h5>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} lg={6} className={classes.mlAuto}>
            <div className={classes.imageContainer}>
              <img
                src={macbookImage}
                alt="macbook"
                className={classes.componentsMacbook}
              />
              <img
                src={shoppingCartImage}
                alt="macbook"
                className={classes.shoppingCart}
              />
              <img
                src={shareButtonImage}
                alt="macbook"
                className={classes.shareButton}
              />
              <img
                src={cardImage}
                alt="macbook"
                className={classes.cardImage}
              />
              <img
                src={twitterImage}
                alt="macbook"
                className={classes.twitterImage}
              />
              <img
                src={iconsImage}
                alt="macbook"
                className={classes.iconsImage}
              />
              <img
                src={repostImage}
                alt="macbook"
                className={classes.repostImage}
              />
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
