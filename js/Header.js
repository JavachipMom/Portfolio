import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <header className="header">
        <Link to="/">
          <h1 className="name"> Shaurice Pearson </h1>
        </Link>
        <nav className="navibar">
          <Link className="navi"
                to="/"> Portfolio </Link>
          <Link className="navi"
                to="/aboutme"> About Me </Link>
          <Link className="navi"
                to="/blog"> Blog </Link>
          <a className="navi"
             href="https://docs.google.com/document/d/1H8YHgm-NNKk7P-FV-PUabtRr0_XJJ4uMQmLIVXMqWUo/edit?usp=sharing"> Resume </a>
        </nav>
      </header>
    )
  }
})
