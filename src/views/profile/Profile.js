import React from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// components
import Button from "components/CustomButtons/Button.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import leonid from "assets/img/leonid.jpg";

import profileComponentStyle from "assets/jss/profileComponentStyle.js";

// Profile sections
// todo

const useStyles = makeStyles(profileComponentStyle);

export default function ProfileViewComponent() {
  const classes = useStyles();
  const socialNetworks = [{
      "socialNetwork":"github",
      "link":"https://github.com/leonidguadalupe/"
    },{
      "socialNetwork":"linkedin",
      "link":"https://www.linkedin.com/in/leonid-adolph-guadalupe-b2a54179/"
    },{
      "socialNetwork":"facebook",
      "link":"https://www.facebook.com/iamleonidme"
    }];
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return(
    <div>
      <Parallax
        image={require("assets/img/japan.jpg")}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <img src={leonid} alt="..." className={imageClasses} />
                <div className={classes.name}>
                  <h3 className={classes.title}>Leonid Adolph Guadalupe</h3>
                  <h6> Fullstack Developer </h6>
                  {
                    socialNetworks.map((network, key) =>
                      <Button
                        justIcon
                        simple
                        color={network.socialNetwork}
                        className={classes.margin5}
                        key={key}
                        onClick={()=> window.open(network.link, "_blank")}
                      >
                        <i className={classes.socials + " fab fa-" + network.socialNetwork}></i>
                      </Button>
                    )
                  }
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textCenter)}>
            <p>
                An engineeer who has the drive and passion to build. Started 
                working in a startup environment, I worked with Python and Django
                with a young team of professionals. After 2 years, I left to finish
                my undergrad and worked as a freelancer at the same time. Now, I'm
                continuously growing in a corporate environment. I dream of living 
                and working in Japan in the future.{" "}
            </p>
          </div>
          <div className={classes.container}>
            
          </div>
        </div>
      </div>
    </div>
  )
}

