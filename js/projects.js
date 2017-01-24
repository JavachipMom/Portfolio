import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return(
      <section>
        <h3> Here are a couple of projects throughout my weeks at <a href="https://www.theironyard.com/sanantonio">The Iron Yard-SA</a></h3>
        <ul>
          <li className="project-name"> Recreating Youtube just using HTML and CSS </li>
          <a href="https://github.com/JavachipMom/Assignments/tree/master/1.4">Click Here</a>
          <li className="project-name"> Creating a calculator using Vanilla JavaScript </li>
          <a href="https://github.com/JavachipMom/Assignments/tree/master/2.4-calculator">Click Here</a>
        </ul>
      </section>
    )
  }
})
