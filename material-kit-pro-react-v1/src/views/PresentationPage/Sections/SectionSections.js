import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// core components
import Button from "components/CustomButtons/Button.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import sectionsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/sectionsStyle.js";

// images array used in rendering a function for this section
import imgs from "assets/img/assets-for-demo/sections/imgs.js";

const useStyles = makeStyles(sectionsStyle);

export default function SectionSections() {
  const renderContainerFluid = cssClass => {
    return imgs.map(row => {
      return (
        <GridContainer key={row[0]}>
          {row.map((el, index) => {
            return (
              <GridItem
                md={3}
                sm={3}
                xs={12}
                key={el + "_" + index}
                className={cssClass}
              >
                <img
                  src={require(`assets/img/assets-for-demo/sections/${el}.jpg`)}
                  alt={el}
                  key={el[index]}
                />
              </GridItem>
            );
          })}
        </GridContainer>
      );
    });
  };
  const classes = useStyles();
  return (
    <div className={classes.sectionSections}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem
            md={8}
            className={classNames(classes.mrAuto, classes.mlAuto)}
          >
            <div className={classes.sectionDescription}>
              <h2 className={classes.title}>Ready to Use Sections</h2>
              <h5 className={classes.description}>
                Build your page section by section! We have created multiple
                options for you to put together and customise into pixel perfect
                pages. From headers to footers, you will be able to choose the
                best combination for your project.
              </h5>
              <Link to={"/sections"}>
                <Button
                  color="rose"
                  target="_blank"
                  className={classes.navButton}
                  round
                >
                  view all sections
                </Button>
              </Link>
            </div>
          </GridItem>
        </GridContainer>
      </div>
      <div className={classes.containerFluid}>
        {renderContainerFluid(classes.photoGallery)}
      </div>
    </div>
  );
}
