import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  scrollToProjects() {
    window.scroll(0, 625);
  },
  render() {
    return (
      <section>
        <div className="home-banner">
          <div className="icon-container">
            <a className="icon"
               href="https://github.com/JavachipMom">
              <i className="fa fa-github fa-4x"></i>
            </a>
            <a className="icon"
               href="https://www.linkedin.com/in/shauricenicole90/">
              <i className="fa fa-linkedin-square fa-4x"></i>
            </a>
            <a className="icon"
               href="https://medium.com/@shauricenicole">
              <i className="fa fa-medium fa-4x"></i>
            </a>
            <a className="icon"
               href="https://www.facebook.com/shauricenicole90">
              <i className="fa fa-facebook-official fa-4x"></i>
            </a>
            <a className="icon"
               href="https://twitter.com/MomReese210">
              <i className="fa fa-twitter fa-4x"></i>
            </a>
            <a className="icon"
               href="https://angel.co/shaurice-pearson">
              <i className="fa fa-angellist fa-4x"></i>
            </a>
          </div>
          <div className="overlay">
            <div>
              <h1 className="title"> Shaurice Pearson
              </h1>
              <h2 className="title-sub"> I am a Front-End Developer </h2>
              <h2 className="languages">JavaScript ~ React ~ jQuery ~ HTML ~ CSS</h2>
              <button className="portfolio-button"
                      onClick={this.scrollToProjects}
                      name="button"
                      type="button">
                <a className="portfolio-button_link"> Projects
                </a>
              </button>
            </div>
          </div>
        </div>
          <h2 className="title-projects"> Projects </h2>
          <article className="article">
            <h3 className="project-names"><a href="https://javaworks.herokuapp.com/">JavaWorks App</a></h3>
            <img alt="javaworks"
                 className="screenshot"
                 src="styles/JavaWorksScreenshot.png"/>
               <p className="project-info"> There was a problem that needed to be addressed with remote workers finding suitable coffeeshops to work from that have wifi.  I built my application JavaWorks to help solve this problem with creating results based off zipcode. All the way from the initial design of how I wanted it to look down to the logo and colors used. I developed this application from the ground up using JavaScript, React, Node.js, JSON, HTML, CSS3, and five separate APIs.</p>
          </article>
          <article className="article">
            <h3 className="project-names"> <a href="https://week-6-group-project.herokuapp.com/">Spurs Blog</a> </h3>
            <img alt="spurs-blog"
                 className="screenshot"
                 src="styles/GroupProjectScreenshot.png"/>
               <p className="project-info"> I worked on this Spurs blog with three other Developers. Our biggest challenge and skill we improved most on, was using git to branch off, review each other's code, and deal with merge conflicts.</p>
          </article>
          <article className="article">
            <h3 className="project-names"> Movie Card Project </h3>
            <img alt="stockcard"
                 className="screenshot"
                 src="styles/cardScreenshot.png"/>
               <p className="project-info"> This was a card that I made using the OMDB api services on our second week of school. Styled it the way we wanted it too. Just using JSON, Ajax, HTML, CSS. </p>
          </article>
          <article className="article">
            <h3 className="project-names"> YouTube Recreation </h3>
            <img alt="YouTube"
                 className="screenshot"
                 src="styles/YoutubeRecreation.png"/>
               <p className="project-info"> This was our first weekend assignment at the start of the course. We had just learned about HTML and CSS. No JavaScript was used to make functionality.</p>
          </article>
          <article className="article">
            <h3 className="project-names"> Calculator Project </h3>
            <img alt="Calculator"
                 className="screenshot"
                 src="styles/calculator.png"/>
               <p className="project-info"> This was a calculator that was created using HTML, CSS, JavaScript, and jQuery. </p>
          </article>
      </section>
    )
  }
})
