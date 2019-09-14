import React from 'react';
//components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardAvatar from "components/Card/CardAvatar.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
//images
import studyImage1 from "assets/img/up.png";

export default function StudyTabComponent(props) {
  const classes = props.classes;
  const studyHistoryObjects = [
    {
      img: studyImage1,
      title: "Masters in Management",
      year: "2014",
      description: "I studied management for 2 years. However I haven't finished\
        this as I was too busy with work. I am lacking computer",
    },
    {
      img: studyImage1,
      title: "Bachelor in Computer Science",
      year: "2012",
      description: "I was studying in the campus and around 2010 worked as a freelance\
        programmer which extended my degree",
    }
    
  ]
  return(
    <GridContainer className={classes.workhistory}>
      { 
        studyHistoryObjects.map((studyObject, key) =>
          <Card plain profile className={classes.card}>
            <GridContainer>
              <GridItem xs={12} sm={2} md={2}>
                <CardAvatar plain profile>
                  <img src={studyObject.img} alt="..." />
                </CardAvatar>
              </GridItem>
              <GridItem xs={12} sm={10} md={10}>
                <h4 className={classes.cardTitle}>{studyObject.title}</h4>
                <h5> { studyObject.year } </h5>
                <p>
                  { studyObject.description }
                </p>
              </GridItem>
            </GridContainer>
          </Card>
        )
      }
    </GridContainer>
  )
}