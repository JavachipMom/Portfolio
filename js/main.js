import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        <div className="home-banner">
          <div className="icon-container">
            <a href="https://github.com/JavachipMom">
              <i className="fa fa-github fa-4x"></i>
            </a>
            <a href="https://www.linkedin.com/in/shauricenicole90/">
              <i className="fa fa-linkedin-square fa-4x"></i>
            </a>
            <a href="https://medium.com/@shauricenicole">
              <i className="fa fa-medium fa-4x"></i>
            </a>
            <a href="https://www.facebook.com/shauricenicole90">
              <i className="fa fa-facebook-official fa-4x"></i>
            </a>
          </div>
          <div className="overlay">
            <div>
              <h1 className="title"> I Am a Front-End Developer
              </h1>
              <button className="portfolio-button"
                      name="button"
                      type="button"> Portfolio
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="title-projects"> Projects </h2>
          <article className="article">
            <h3 className="project-names">JavaWorks App</h3>
            <img alt="javaworks"
                 className="screenshot"
                 src="styles/JavaWorksScreenshot.png"/>
               <p className="project-info"> This was my final project of the course. I built it from the ground up using JavaScript, React, Node.js, JSON, APIs, HTML, CSS3. It is a web application for remote developers searching for the nearest coffeeshops by zipcode.</p>
          </article>
          <article className="article">
            <h3 className="project-names"> Group Project Blog </h3>
            <img alt="spurs-blog"
                 className="screenshot"
                 src="styles/GroupProjectScreenshot.png"/>
               <p className="project-info"> This was my first group project working with other people putting together all of our code into one single entity. Our biggest challenge and skill we improved most on, was using git to branch off, review each other's code, and deal with merge conflicts.</p>
          </article>
          <article className="article">
            <h3 className="project-names"> Card Project using JSON from OMDBapi.com </h3>
            <img alt="stockcard"
                 className="screenshot"
                 src="styles/cardScreenshot.png"/>
               <p className="project-info"> This was a card that I made using the OMDB api services on our second week of school. Styled it the way we wanted it too. Just using JSON, Ajax, HTML, CSS. </p>
          </article>
        </div>
      </section>
    )
  }
})
