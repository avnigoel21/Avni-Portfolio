import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ACCENTURE from "../../assets/img/experience/smartbridge.webp";
import L_ibm from "../../assets/img/experience/IBM LOGO.webp";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
               <Card.Img variant="top" className="img-resize" src={L_ACCENTURE} alt=" IBMlogo" />
                <Card.Img variant="top" className="img-resize" src={L_ibm} alt=" IBMlogo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">SmartBridge In Collarboration With IBM</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <UrlButton href="https://github.com/SmartPracticeschool/llSPS-INT-1937-Predicting-Life-Expectancy-using-Machine-Learning" target="_blank">
                     SOURCE CODE
                    </UrlButton>
                  
                    <br />
                    <strong>Role:</strong> Summer Machine Learning Intern
                    <br />
                    <strong>Description:</strong> <strong>Predicting Life Expectancy Using IBM services</strong> Create a regression model to predict the life expectancy of a country based on features such as year, GDP(gross domestic product), education, alcohol intake of people in the country, expenditure on healthcare system and some specific disease related deaths that happened in the country.
                    <br />
                    <strong>Technology:</strong> Node-Red, IBM Watson, IBM Cloud, Machine Learning
                    <br />
                    <strong>Duration:</strong> June 2020 - july 2020
                      <br />
                    <UrlButton href="https://drive.google.com/file/d/1SzDruwM4RSfB3WoNANQXCGo--4OYp-ei/view?usp=sharing" target="_blank">
                     WATCH DEMO
                    </UrlButton>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
