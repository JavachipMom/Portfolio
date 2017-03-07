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
              <h1 className="title"> Blog
              </h1>
            </div>
          </div>
        </div>
        <div className="blog-container">
          <h1 className="blog-title"> Want to get to know what I usually write about on my spare time? </h1>
            <h2 className="blog-subtitle"> Software is People.... </h2>
            <h3 className="blog-date"> January 7, 2017 </h3>
            <p className="blog-post">Not too long ago I went to a Meetup with a group I had just joined called Dinner and Code.. I realized that if I’m going to make it in the world of developing, get to know the people who might one day hire you.. lol Most people who know me know that I’m really not the type of person to really “socialize” I’m a homebody at heart.. This event along with other events I have went to in the past that dealt with topics such as technology, networking, and of course programming.. I took a particular interest in this group well….because they were feeding me.. When you’re a full-time student in a bootcamp with no job, you take what you can get to be fed.. or at least for me..

            I invited a couple of my classmates to the event so I had some familiarity surrounding me and feel more open about talking with new people.. Coding in itself has brought me out of my “Shaurice bubble” and put me into their bubble(which is a pretty GINORMOUS bubble if I must say so) When we got to the event, we were greeted by the event host and a couple of the speakers for the event.. We wrote our names on the “Hello” sticker and sat down..

            I was most interested in hearing the front-end developer speak because that is what my focus is on becoming.. I wanted to see just how the workflow of what his day looked like and just actually what he did. It surprised me to know that he taught himself how to code and was hired at a company not having all the needs to perform at the job but because of who he knew and put himself out there to be seen.. He was able to get the learning and necessary abilities to be the developer that he is today.. That’s when I realized that I may not understand everything that I am taught today in my cohort but to continue showing the ability to be open about continuing to learn and know how to work ON a team not with the team I will make it.. Technology is ever changing and the latest and greatest languages that are being used will continue to change with that. Like a lawyer needs to continue to learn new laws that change with each client they have.

            It was an interesting take and opened my perspective to see each speaker come up and give a presentation on what they do as a whole in the company they work at and seeing the whole team that is in the process of developing software.. From UX and UI designers, to project management, to back-end and front-end developers, scrum masters, and stakeholders.. There are a lot of people in the process.. It’s a whole team and everyone on the team is a person, which coins the term “Software is people..” One thing for sure is that now I know who to take out to lunch to make my life just a little bit easier.. lol

            What I gathered from this event the most is that a project can’t be successful without everyone lending a hand and helping each other hit deadlines and goals because in the end, software is people..
            </p>
            <h2 className="blog-subtitle"> What is Concatenation? </h2>
            <h3 className="blog-date"> December 13, 2016 </h3>
            <p className="blog-post">Concatenation is the process of adding strings, numbers, and keywords together.. Putting together two strings to create one equation or sentence but it is not the only way we use it. We can continue to concatenate keywords or variables together to produce a whole other outcome. Examples would be like:
            ex. console.log(“Hello my name is ” + “Shaurice”) and it would log out “Hello my name is Shaurice” we could easily change that name to either, console.log(“Hello my name is “ + “Jason”) and it would log out “Hello my name is Jason” we could even change “Hello my name is “ to console.log(“Good evening “ + “Jason”) and it would log out “Good evening Jason”</p>
            <h2 className="blog-subtitle"> Explaining What the Box Model Is</h2>
            <h3 className="blog-date"> December 6, 2016 </h3>
            <p className="blog-post">For me to explain the box model in the easiest way possible to just say EVERYTHING IS A BOX!! And once you learn that concept, understanding what the box is makes it seems less taunting; and what I mean by everything is a box is that every element in your HTML file has its own box model concept. The box model contains 4 attributes that help with the design and structure of how the page looks. The content itself, padding, border, margin.

            The content is what you are putting in it; it can be text, pictures, bars, and videos. The content is in the middle of the box model and is what the box conforms to. The padding would be considered the space between the content and the border. So you can control the space inside the border which can in turn make the content seem bigger because it will alter the way the border looks as well. The border is what contains the content and padding inside. It can be an actual border or an invisible border, just know that the border keeps the padding and content in check. Then there is margin. Margin is the space between the border and another element. I can think of it like this.

            You see how in the Japan or New York subways everyone is squished together? I would consider that to be zero margin between people, unlike the buses in San Antonio where there is clearly space between you and the next person. That is margin or at the best way I can explain what margin is to me.</p>
        </div>
      </section>
    )
  }
})
