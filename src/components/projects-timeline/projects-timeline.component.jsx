import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_scraping from "../../assets/img/projects/scraping.webp";
import L_portfoliopic from "../../assets/img/projects/portfoliopic.webp";
import L_delhihacks from "../../assets/img/projects/delhihacks.webp";
import L_anonybooks from "../../assets/img/projects/anonybooks.webp";
import L_bhumiputra from "../../assets/img/projects/bhumiputra.webp";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";

import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* Project: Get GitHub Info */}
          <ImageEvent date="1/10/2020" className="text-center" text="50Days Challenge Of WebScraping" src={L_scraping} alt="Get GitHub Info">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Created 50 WebScraping challenges for "The Wire Us Challenge 2020". Implemented Python libraries like Scrapy, bs4, and Selenium in creating real-world problems, Used Rest APIs, and various techniques in extracting data efficiently from websites.

                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Scrap websites</li>
                          <li>Make Scraping Tool</li>
                        </ul>
                        <hr />
                        
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://thewireuschallenge.com/Topics/Topic-MachineLearning.html/" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="https://github.com/avnigoel21/TheWireUsChallenge" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Smart Brain */}
          <ImageEvent date="2/09/2020" className="text-center" text="Delhi Hacks Website" src={L_delhihacks} alt="Smart Brain Face Detect">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Project on developing a fully working dynamic website for DelhiHacks Under Script Foundation.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register new user</li>
                          <li>Signin exiting user</li>
                          <li>Keep tracks of entries for each user</li>
                        </ul>
                        <hr />
                        
                       
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://delhihacks.xyz/" target="_blank">
                  SEE LIVE
                </UrlButton>
                
                <UrlButton href="https://github.com/utsavkuchhal/Delhi-Hack" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: RoboFriends */}

          <ImageEvent date="28/8/2020" className="text-center" text="Portfolio using React" src={L_portfoliopic} alt="Robo Friends">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is my first portfolio website built using React.
                        <hr />
                        
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>About Me</li>
                          <li>View my projects</li> 
                          <li>Contact Me</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                           <li>
                            <span className="p-2">
                              <Image src={L_REACT} alt="React" rounded className="image-style1 m-1"></Image> React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_BOOTSTRAP4} alt="Bootstrap 4" rounded className="image-style m-1"></Image> Bootstrap 4
                            </span>
                          </li>
                         
                        </ul>
                        <hr />
                        
                       
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Product_Hunt_Clone */}

          <ImageEvent date="15/7/2020" className="text-center" text="AnonyBooks Website" src={L_anonybooks} alt="Product Hunt Clone">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Anonybooks is a platform which
provides you the opportunity
to unveil your thoughts without
unveiling your identity.This
website is divided into two
sections that are STORY and
CONFESS. In story you can write a
blog or story while in confess you
can share anything whether its a
truth or lie.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Register as new user</li>
                          <li>Signin as existing user</li>
                          
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image src={L_HTML5} alt="HTML 5" rounded className="image-style m-1"></Image> HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_CSS3} alt="CSS 3" rounded className="image-style m-1"></Image> CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image src={L_BOOTSTRAP4} alt="Bootstrap 4" rounded className="image-style m-1"></Image> Bootstrap 4
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://www.anonybooks.com/" target="_blank">
                  WATCH LIVE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Portfolio using Django */}
          <ImageEvent date="28/12/2019" className="text-center" text="Bhumiputra Through ML" src={L_bhumiputra} alt="Portfolio using Django">
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This Hack tackles a major concern seen
among farmers in rural areas. Presenting 
a prototype system for detection and
of crop(rice) diseases based on
images of infected crop(rice) plants. This
project will help farmers to use the best of
everything in best ratio and aspects like
proper use of Pesticides, Fertilizers, etc. A
device is to bè made for the convenience of
farmers to detect the real-time diseases of
crop according to the possible environmental climatic conditions for the crop.
                        <hr />
                       
                        
                       
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="https://github.com/avnigoel21/Bhumiputra" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
