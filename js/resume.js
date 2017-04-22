import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return(
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
              <iframe
                src="https://docs.google.com/document/d/1H8YHgm-NNKk7P-FV-PUabtRr0_XJJ4uMQmLIVXMqWUo/pub?embedded=true">
              </iframe>
            </div>
          </div>
        </div>
      </section>
    )
  }
})
