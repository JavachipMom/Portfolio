import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <header>
        <h1> Shaurice's Portfolio </h1>
        <nav>
          <Link to="/blog"> View Blog </Link>
          <Link to="/home"> Homepage </Link>
          <Link to="/projects"> Projects </Link>
        </nav>
      </header>
    )
  }
})
