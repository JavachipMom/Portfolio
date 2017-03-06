import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
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
              I am a front-end developer, I attended the fall class of 2016 at The Iron Yard in San Antonio, TX. My focus at the school was on JavaScript, using frameworks and libraries like ReactJS, jQuery, and Node.js.
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
