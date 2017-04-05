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
                I am a coffee enthusiast with a love for computer software engineering. I enjoyed my time as a barista to study for my personal training certification. I have always felt at home and happiest learning about computers from creating and editing videos to problem-solving with JavaScript, React, HTML5, and CSS3. <br/>
                <br/>
                I am a front-end developer, I attended the fall class of 2016 at The Iron Yard in San Antonio, TX. My focus at the school was on JavaScript, using frameworks and libraries like ReactJS, jQuery, and Node.js.<br/>
                <br/>
                My early time in computers started back in middle school when I created AMVs, which stands for Anime Music Videos. I first started using Windows Movie Maker and transitioned into using Vegas Movie Pro. I worked my way up to entering contest at annual conventions for fun.<br/>
                <br/>
                As time went on creating more AMVs is when MySpace became popular. It was a lot of fun and rather intriguing to create my own custom profile page. Of course this was before I knew it was coding that I was actually intrigued with. Before I knew it, I was helping my friends and classmates how to put together their own profile pages using code.<br/>
                <br/>
                
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
