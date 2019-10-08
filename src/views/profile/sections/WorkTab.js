import React from 'react';

//icons
import Work from "@material-ui/icons/Work";

//components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardAvatar from "components/Card/CardAvatar.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Timeline from "components/Timeline/Timeline.js";

import workImage1 from "assets/img/appen.jpg";
import workImage2 from "assets/img/ingenuity.jpg";
import workImage3 from "assets/img/luffy.png";

const workHistoryObjects = [
  {
    img: workImage1,
    color:"info",
    title: "Assistant Manager of Software Engineering",
    year: "2017 - present",
    description: "Tech stack: Python(Falcon/Django), Javascript(ReactJS, Apollo), PostgresQL, GraphQL, Redis, Docker, Kubernetes, Asterisk, Twilio, Nginx, Debian",
  },
  {
    img: workImage1,
    color:"warning",
    title: "Senior Software Engineer",
    year: "2016-2017",
    description: "Tech stack: Python(Django/Flask), Javascript(ReactJS, jQuery), PostgresQL, RestAPI, Redis, Asterisk, Twilio, Nginx, Debian",
  },
  {
    img: workImage1,
    color:"success",
    title: "Python Engineer",
    year: "2014-2016",
    description: "Tech stack: Python, Asterisk, Flask, PostgresQL, Debian",
  },
  {
    img: workImage3,
    color:"danger",
    title: "Freelance",
    year: "2010-2014",
    description: "Tech stack: PHP, Kohana, Python, Django, Javascript(AngularJS, JQuery), Apache",
  },
  {
    img: workImage2,
    color:"info",
    title: "Django Developer",
    year: "2011-2013",
    description: "Python(Django), Javascript(JQuery, Vanilla), Actionscript, Nginx",
  } 
]
export default function WorkTabComponent(props) {
  const classes = props.classes;
  var stories = [];
  workHistoryObjects.forEach(function(workObject, key){
    stories.push({
      badgeColor: workObject.color,
      badgeIcon: Work,
      inverted: key % 2 === 0,
      body: (
        <GridContainer className={classes.workhistory}>
          <GridContainer>
            <GridItem xs={12} sm={3} md={3}>
              <CardAvatar plain profile>
                <img src={workObject.img} alt="..." />
              </CardAvatar>
            </GridItem>
            <GridItem xs={12} sm={9} md={9}>
              <h6 className={classes.cardTitle}>{workObject.title}</h6>
              <h6> { workObject.year } </h6>
              <p>
                { workObject.description }
              </p>
            </GridItem>
          </GridContainer>
        </GridContainer>
      )
    })
  })
  return(
    <GridContainer>
      <GridItem xs={12}>
        <Card plain>
          <CardBody plain>
            <Timeline stories={ stories } />
            </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  )
}