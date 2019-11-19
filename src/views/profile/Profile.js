import React from 'react';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons components
import School from "@material-ui/icons/School"
import Terrain from "@material-ui/icons/Terrain";
import Work from "@material-ui/icons/Work";
// components
import Button from "components/CustomButtons/Button.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import leonid from "assets/img/leonid.jpg";

import profileComponentStyle from "assets/jss/profileComponentStyle.js";

// Profile sections
import HobbySectionComponent from "./sections/HobbyTab.js";
import StudyTabComponent from "./sections/StudyTab.js";
import WorkTabComponent from "./sections/WorkTab.js";

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
                and working overseas in the future.{" "}
            </p>
            <Clearfix />
          </div>
          <div className={classes.profileTabs}>
            <GridContainer justify="center">
              <h4 className={classes.title}>About Me</h4>
            </GridContainer>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "Work",
                  tabIcon: Work,
                  tabContent:(
                    <WorkTabComponent 
                      classes={classes} />
                  )
                },
                {
                  tabButton: "School",
                  tabIcon: School,
                  tabContent:(
                    <StudyTabComponent 
                      classes={classes} />
                  )
                },
                {
                  tabButton: "Hobbies",
                  tabIcon: Terrain,
                  tabContent:(
                    <HobbySectionComponent 
                      classes={classes} />
                  )
                }
              ]}
            />

          </div>
        </div>
      </div>
    </div>
  )
}

