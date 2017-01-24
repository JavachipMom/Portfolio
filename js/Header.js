import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <header className="header">
        <h1> Shaurice's Portfolio </h1>
        <nav>
          <Link className="navi"
                to="/"> Homepage </Link>
          <Link className="navi"
                to="/blog"> View Blog </Link>
          <Link className="navi"
                to="/projects"> Projects </Link>
          <Link className="navi"
                to="/resume"> Resume </Link>
        </nav>
      </header>
    )
  }
})
