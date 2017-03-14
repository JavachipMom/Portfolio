import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
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
        <div className="home-banner">
          <div className="overlay">
            <div>
              <h1 className="title"> A Little About Me
              </h1>
            </div>
          </div>
        </div>
        <article className="content">
          <div>
            <img alt="profile pic"
                 className="profile-picture"
                 src="styles/ProfessionalPic.jpg"/>
               <p className="content-1">
              I am a front-end developer, I attended the fall class of 2016 at The Iron Yard in San Antonio, TX. My focus at the school was on JavaScript, using frameworks and libraries like ReactJS, jQuery, and Node.js.<br/>
            <br/>
              I work hard to get the job done and the job done right. I spent the majority of my time learning the skills to get my foot in the door in technology. Monday through Friday from 9AM to 5PM
            </p>
            <p>
              My understanding of languages so far are:
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>jQuery</li>
              <li>Node.js</li>
            </ul>
          </div>
        </article>
      </section>
    )
  }
})
