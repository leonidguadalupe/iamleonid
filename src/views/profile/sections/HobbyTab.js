import React from 'react';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import hobbyObjects from "data/hobbyObjects.js";

export default function HobbyTabComponent(props) {
  const classes = props.classes;
  return(
    <div>
      <GridContainer>
        {
          hobbyObjects.map((obj, key) =>
          <GridItem xs={obj.xs} sm={obj.sm} md={obj.md}>
            <Card
              background
              style={{ backgroundImage: "url(" + obj.img + ")" }}
            >
              <CardBody background>
                <a href={obj.href}>
                  <h3 className={classes.cardTitle}>
                    {obj.title}
                  </h3>
                </a>
                <p className={classes.category}>
                  {obj.description}
                </p>
              </CardBody>
            </Card>
          </GridItem>
          )
        }
      </GridContainer>
    </div>
  )
}