import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section>
        <h1> Want to get to know what I usually write about on my spare time? </h1>
        <a href="https://medium.com/@shauricenicole"> Here's a Link to my official blog</a>
        <h2 className="blog-title"> Explaining What the Box Model Is</h2>
        <h3 className="blog-date"> December 6, 2016 </h3>
        <p className="blog-post">For me to explain the box model in the easiest way possible to just say EVERYTHING IS A BOX!! And once you learn that concept, understanding what the box is makes it seems less taunting; and what I mean by everything is a box is that every element in your HTML file has its own box model concept. The box model contains 4 attributes that help with the design and structure of how the page looks. The content itself, padding, border, margin.

        The content is what you are putting in it; it can be text, pictures, bars, and videos. The content is in the middle of the box model and is what the box conforms to. The padding would be considered the space between the content and the border. So you can control the space inside the border which can in turn make the content seem bigger because it will alter the way the border looks as well. The border is what contains the content and padding inside. It can be an actual border or an invisible border, just know that the border keeps the padding and content in check. Then there is margin. Margin is the space between the border and another element. I can think of it like this.

        You see how in the Japan or New York subways everyone is squished together? I would consider that to be zero margin between people, unlike the buses in San Antonio where there is clearly space between you and the next person. That is margin or at the best way I can explain what margin is to me.</p>
      <h2 className="blog-title"> What is Concatenation? </h2>
      <h3 className="blog-date"> December 13, 2016 </h3>
      <p className="blog-post">Concatenation is the process of adding strings, numbers, and keywords together.. Putting together two strings to create one equation or sentence but it is not the only way we use it. We can continue to concatenate keywords or variables together to produce a whole other outcome. Examples would be like:
        ex. console.log(“Hello my name is ” + “Shaurice”) and it would log out “Hello my name is Shaurice” we could easily change that name to either, console.log(“Hello my name is “ + “Jason”) and it would log out “Hello my name is Jason” we could even change “Hello my name is “ to console.log(“Good evening “ + “Jason”) and it would log out “Good evening Jason”</p>
      <h2> </h2>
      </section>
    )
  }
})
