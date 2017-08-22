import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  scrollToProjects() {
    window.scroll(0, 800);
  },

  render() {
    return (
      <section>
        <div className="home-banner">
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
          <div className="overlay">
            <div>
              <h1 className="title"> Shaurice Pearson
              </h1>
              <h2 className="title-sub"> I am a Front-End Developer </h2>
              <h2 className="languages">JavaScript ~ React ~ jQuery ~ HTML ~ CSS</h2>
              <button className="portfolio-button"
                      onClick={this.scrollToProjects}
                      name="button"
                      type="button">
                <a className="portfolio-button_link"> Projects
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="projects-banner">
          <div className="overlay">
            <div>
              <h1 className="projects-title"> My Projects I've Worked On...
              </h1>
            </div>
          </div>
        </div>
          <article className="article">
            <h3 className="project-names"><a href="https://javaworks.herokuapp.com/">JavaWorks App</a></h3>
            <img alt="javaworks"
                 className="screenshot"
                 src="styles/JavaWorksScreenshot.png"/>
               <p className="project-info"> There was a problem that needed to be addressed with remote workers finding suitable coffeeshops to work from that have wifi.  I built my application JavaWorks to help solve this problem with creating results based off zipcode. All the way from the initial design of how I wanted it to look down to the logo and colors used. I developed this application from the ground up using JavaScript, React, Node.js, JSON, HTML, CSS3, and five separate APIs.</p>
          </article>
          <article className="article">
            <h3 className="project-names"> <a href="https://week-6-group-project.herokuapp.com/">Spurs Blog</a> </h3>
            <img alt="spurs-blog"
                 className="screenshot"
                 src="styles/GroupProjectScreenshot.png"/>
               <p className="project-info"> I worked on this Spurs blog with three other Developers. Our biggest challenge and skill we improved most on, was using git to branch off, review each other's code, and deal with merge conflicts.</p>
          </article>
          <article className="article">
            <h3 className="project-names"> Movie Card Project </h3>
            <img alt="stockcard"
                 className="screenshot"
                 src="styles/cardScreenshot.png"/>
               <p className="project-info"> This was a card that I made using the OMDB api services on our second week of school. Styled it the way we wanted it too. Just using JSON, Ajax, HTML, CSS. </p>
          </article>
          <article className="article">
            <h3 className="project-names"> YouTube Recreation </h3>
            <img alt="YouTube"
                 className="screenshot"
                 src="styles/YoutubeRecreation.png"/>
               <p className="project-info"> This was our first weekend assignment at the start of the course. We had just learned about HTML and CSS. No JavaScript was used to make functionality.</p>
          </article>
          <article className="article">
            <h3 className="project-names"> Calculator Project </h3>
            <img alt="Calculator"
                 className="screenshot"
                 src="styles/calculator.png"/>
               <p className="project-info"> This was a calculator that was created using HTML, CSS, JavaScript, and jQuery. </p>
          </article>
          <div className="bio-banner">
            <div className="overlay">
              <div>
                <h1 className="bio-title"> A Little About Me...
                </h1>
              </div>
            </div>
          </div>
          <article className="content">
            <div>
              <img alt="profile pic"
                   className="profile-picture"
                   src="styles/shaurice_pearson.JPG"/>
                <p className="content-1">
                  I am a coffee enthusiast with a love for computer software engineering. I enjoyed my time as a barista to study for my personal training certification. I have always felt at home and happiest learning about computers from creating and editing videos to problem-solving with JavaScript, React, HTML5, and CSS3.
                </p>
                <p>
                  I am a front-end developer, I attended the fall class of 2016 at The Iron Yard in San Antonio, TX. My focus at the school was on JavaScript, using frameworks and libraries like ReactJS, jQuery, and Node.js.
                </p>
                <p>
                  My early time in computers started back in middle school when I created AMVs, which stands for Anime Music Videos. I first started using Windows Movie Maker and transitioned into using Vegas Movie Pro. I worked my way up to entering contest at annual conventions for fun.
                </p>
                <p>
                  As time went on creating more AMVs is when MySpace became popular. It was a lot of fun and rather intriguing to create my own custom profile page. Of course this was before I knew it was coding that I was actually intrigued with. Before I knew it, I was helping my friends and classmates how to put together their own profile pages using code.
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
          <div className="blog-banner">
            <div className="overlay">
              <div>
                <h1 className="title"> Blog
                </h1>
              </div>
            </div>
          </div>
          <div className="blog-container">
            <h1 className="blog-title"> Want to get to know what I usually write about on my spare time? </h1>
            <div>
              <h2 className="blog-subtitle"> Women Learn to Code San Antonio</h2>
              <h3 className="blog-date"> January 23, 2017</h3>
              <img alt="picture of women"
                   className="blog-picture"
                   src="styles/womenwhocode.jpeg"/>
                 <p className="blog-details"> I am a part of a meetup that empowers women to learn how to code. Being as someone who is just starting her career in Front end Development I am in a position that can help other women just starting out or even women who haven't even decided if they want to jump into the tech world just yet. </p>
                 <h3 className="video_link"> Watch the full video
                   <a href="http://video.klrn.org/video/2365953617/"> here.
                   </a>
                  </h3>
            </div>
            <h2 className="blog-subtitle"> Software is People.... </h2>
            <h3 className="blog-date"> January 7, 2017 </h3>
            <img alt="software"
                 className="blog-picture3"
                 src="styles/software-is-ppl.jpeg"/>
            <p className="blog-post">Not too long ago I went to a Meetup with a group I had just joined called Dinner and Code.. I realized that if I’m going to make it in the world of developing, get to know the people who might one day hire you.. lol Most people who know me know that I’m really not the type of person to really “socialize” I’m a homebody at heart.. This event along with other events I have went to in the past that dealt with topics such as technology, networking, and of course programming.. I took a particular interest in this group well….because they were feeding me.. When you’re a full-time student in a bootcamp with no job, you take what you can get to be fed.. or at least for me..

            I invited a couple of my classmates to the event so I had some familiarity surrounding me and feel more open about talking with new people.. Coding in itself has brought me out of my “Shaurice bubble” and put me into their bubble(which is a pretty GINORMOUS bubble if I must say so) When we got to the event, we were greeted by the event host and a couple of the speakers for the event.. We wrote our names on the “Hello” sticker and sat down..

            I was most interested in hearing the front-end developer speak because that is what my focus is on becoming.. I wanted to see just how the workflow of what his day looked like and just actually what he did. It surprised me to know that he taught himself how to code and was hired at a company not having all the needs to perform at the job but because of who he knew and put himself out there to be seen.. He was able to get the learning and necessary abilities to be the developer that he is today.. That’s when I realized that I may not understand everything that I am taught today in my cohort but to continue showing the ability to be open about continuing to learn and know how to work ON a team not with the team I will make it.. Technology is ever changing and the latest and greatest languages that are being used will continue to change with that. Like a lawyer needs to continue to learn new laws that change with each client they have.
            <img alt="dinner and code"
                 className="blog-picture2"
                 src="styles/Code-Dinner-2.jpg"/>
            It was an interesting take and opened my perspective to see each speaker come up and give a presentation on what they do as a whole in the company they work at and seeing the whole team that is in the process of developing software.. From UX and UI designers, to project management, to back-end and front-end developers, scrum masters, and stakeholders.. There are a lot of people in the process.. It’s a whole team and everyone on the team is a person, which coins the term “Software is people..” One thing for sure is that now I know who to take out to lunch to make my life just a little bit easier.. lol

            What I gathered from this event the most is that a project can’t be successful without everyone lending a hand and helping each other hit deadlines and goals because in the end, software is people..
            </p>
            <h2 className="blog-subtitle"> Well…. A Week off of Coding Bootcamp Kept Me Sane… </h2>
            <h3 className="blog-date"> January 4, 2017</h3>
            <img alt="anime"
                 className="blog-picture4"
                 src="styles/insane.jpeg"/>
            <p className="blog-post">This has been an emotional rollercoaster for me and I knew being a single mother to a three year old that I would have my own share of uphill battles from the beginning.. I have hysterically laughed, laughed under pressure, even cried covering my face with my laptop but I have been lucky enough to have a support system help me stay on track and finish this short term goal that helps in the long run.. So it was great that I found out we were getting a week long break for the holidays(thought we were just getting a couple days..)
            So today is the second day back from our holiday vacation, which lasted about a little over a week.. I have realized that I have come pretty far from where I started on the first day of class.. Although I still beat myself up because I have always been much harder on myself than I should. But having this week long vacation kept me sane..
            I was able to meet up with a couple classmates and catch up on a couple assignments(but not all of them); I was able to actually sit down with my son and play a couple rounds of Star Wars: BattleFront and enjoy the time with him(because I feel like he grew up in the few weeks I have been in class;) I was able to(somehow) get a couple hours of pay at my job that somehow manages to keep me on the payroll..(THANK YOU!!) I could sit down and have conversations with my family and not worry about homework the next day.. I was able to catch up on a show EVERYONE else was talking about(This Is Us..) I found out that I was 2 weeks late on Alan Thicke passing away.. That’s when I knew I was in a coding bubble..
            I love coding and being here at the bootcamp but it goes to show you that that you do NEED a SERIOUS dedication to learning the material because I also found out that it’ll be a couple years before I feel I am ready to take on a remote job with programming.. Life happens, but being a single mother, life happens MORE and it’s a real skill learning to balance life and work that I have to improve on, but the daily sacrifices right now….seem to be worth it for my son’s future..
            </p>
            <h2 className="blog-subtitle"> What is Concatenation? </h2>
            <h3 className="blog-date"> December 13, 2016 </h3>
            <img alt="coding"
                 className="blog-picture5"
                 src="styles/concatenation-process.png"/>
            <p className="blog-post">Concatenation is the process of adding strings, numbers, and keywords together.. Putting together two strings to create one equation or sentence but it is not the only way we use it. We can continue to concatenate keywords or variables together to produce a whole other outcome. Examples would be like:
            ex. console.log(“Hello my name is ” + “Shaurice”) and it would log out “Hello my name is Shaurice” we could easily change that name to either, console.log(“Hello my name is ” + “Jason”) and it would log out “Hello my name is Jason” we could even change “Hello my name is “ to console.log(“Good evening ” + “Jason”) and it would log out “Good evening Jason”</p>
            <h2 className="blog-subtitle"> Explaining the Box Model</h2>
            <h3 className="blog-date"> December 6, 2016 </h3>
            <p className="blog-post">For me to explain the box model in the easiest way possible to just say EVERYTHING IS A BOX!! And once you learn that concept, understanding what the box is makes it seems less taunting; and what I mean by everything is a box is that every element in your HTML file has its own box model concept. The box model contains 4 attributes that help with the design and structure of how the page looks. The content itself, padding, border, margin.

            The content is what you are putting in it; it can be text, pictures, bars, and videos. The content is in the middle of the box model and is what the box conforms to. The padding would be considered the space between the content and the border. So you can control the space inside the border which can in turn make the content seem bigger because it will alter the way the border looks as well. The border is what contains the content and padding inside. It can be an actual border or an invisible border, just know that the border keeps the padding and content in check. Then there is margin. Margin is the space between the border and another element. I can think of it like this.

            You see how in the Japan or New York subways everyone is squished together? I would consider that to be zero margin between people, unlike the buses in San Antonio where there is clearly space between you and the next person. That is margin or at the best way I can explain what margin is to me.</p>
          </div>
      </section>
    )
  }
})
