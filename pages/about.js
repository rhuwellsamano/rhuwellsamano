import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => (
  <Layout title="About Me">
    <div className="cover">
      <div className="hello">
        <h1>ABOUT ME.</h1>
        <div className="subtitle">WANT TO KNOW MY STORY, SO FAR?</div>
          <a href="#jump-to-top" className="button">LEARN MORE</a>
          <a href="http://medium.com/@rhuwell" className="button">MEDIUM</a>
          <a href="https://www.linkedin.com/in/rhuwellsamano/" className="button">LINKEDIN</a>
          <a href="https://github.com/rhuwellsamano" className="button">GITHUB</a>
      </div>
    </div>

    <div className="section-container">
      <div id="jump-to-top" className="text-box">
        <div className="text-left">
          <h2>Origin Story.</h2>
            <h3>WHERE IT ALL BEGAN</h3>
            <h4>Chapter One</h4>
            
            <h5>I've been learning about code since I was 6 years old. I used to read my uncle's programming books out of curiosity. In 7th grade, I hacked the school's laptops through the Terminal to get on YouTube to watch funny videos. I found ways to hack my video games, too. In High School, I designed a handful of my own websites with HTML and CSS.</h5>
            <h5>
            In college, I started a clothing business and built the website, hacked a popular messaging app as a prank on my friends, and developed an app from scratch for a startup to help manage their digital signage. It was also during my collegiate years that I read a lot of leadership, personal development, and business books.</h5>

            <h5>They were all just "a thing I did" or a hobby of mine. It was only recently I decided to turn my lifelong passions into a career. If you ask me how many years of experience I have, I'm tempted to say my entire life because frankly, it's true. The journey I've been on has given me three major abilities that make me a unique asset to any team.</h5>

            <div className="">
              <a href="#web-design" className="button">Continue Reading</a>
            </div>

        </div>
      </div>

      <div className="pic-box">
      </div>
    </div>

    <div className="section-container">
      <div className="pic-box-2">

      </div>

      <div className="text-box-2">
      <div id="web-design" className="text-right">
      <h2>Web Design.</h2>
          <h3>EVERYTHING YOU CAN IMAGINE IS REAL</h3>
          <h4>Chapter Two</h4>

          <h5>I've always had quite the eye for creativity. I'm hyper-aware of all the little details that go into a piece of visual art - whether it's an illustration, a film, a graphic t-shirt, typography, but most importantly: websites and applications.</h5>

          <h5>When it comes to web/app design, it's a matter of conveying the right emotions to the audience through visual cues. It's empathizing with the user and understanding them, followed by offering deliberately warm and thoughtful responses in return that create a heightened experience for every single person.</h5>

          <h5>That may or may not have gone over your head as not everyone can understand the power behind design. But, if you understand this part, then you know that it's not just the visuals that matter - it's largely a numbers game, too.</h5>

          <div className="">
            <a href="#digital-marketing" className="button">Continue Reading</a>
          </div>

        </div>
      </div>

      <div className="pic-box-2-mobile">

      </div>

    </div>

    <div className="section-container">
      <div id="digital-marketing"className="text-box-3">
        <div className="text-left">
        <h2>Digital Marketing.</h2>
          <h3>INSPIRE OTHERS TO THE NEXT LEVEL</h3>
          <h4>Chapter Three</h4>

          <h5>Digital Marketing at it's core is just storytelling. The catch is, the main character of the story is the person you're telling it to! The goal is to develop a deeper level of trust between the target audience and the brand by taking them through sequential steps in your funnel.</h5>

          <h5>Sure, I went to college for Marketing but I mostly learned on my own through books, blogs, YouTube, podcasts - but most notably, my own hands-on experience. I've worked on an ad campaign for Ariana Grande with a water bottle startup. In another startup, I raised Facebook engagement by over 800% through social media marketing which led to a major increase in sales for the coming months.</h5>

          <h5>With design and digital marketing under my belt now, it was time to complete the trifecta and officially learn how to completely build digital products myself.</h5>

          <div className="">
            <a href="#software-engineering" className="button">Continue Reading</a>
          </div>

        </div>
      </div>

      <div className="pic-box-3">
      </div>
    </div>

    <div className="section-container">
      <div className="pic-box-4">

      </div>

      <div className="text-box-4">
      <div id="software-engineering" className="text-right">
          <h2>Software Engineering.</h2>
          <h3>CONNECTED THROUGH CREATION</h3>
          <h4>Chapter Four</h4>

          <h5>I've been coding my whole life, yes. But, as far as career goes, I was actually working my way up to becoming a bartender for this world-famous cocktail bar in New York City. Then, one day, I decided I wanted more rewarding work so I applied to Flatiron School to get a more formal education in coding and be up-to-date with popular technologies being used today.</h5>

          <h5>I was accepted into their Full Stack Software Engineering course. While I was there, I learned how to design and develop my own fully-functional applications filled with unique features and how to work with others on a tech project - no matter how big or small. In my spare time, I also refined my software engineering skills through additional online courses at TeamTreehouse.</h5>

          <h5>Afterwards, I landed a position as a Software Engineer for a wonderful startup called Blink Health that has well over a million active users.<br/> It was an amazing experience that really opened my eyes to what I was capable of achieving, especially working with other engineers!</h5>

          <div className="">
            <a href="#whats-next" className="button">Continue Reading</a>
          </div>
          
        </div>
      </div>

      <div className="pic-box-4-mobile">

      </div>

    </div>

    <div className="section-container">
      <div className="text-box-5">
        <div id="whats-next" className="text-left">
          <h2>What's Next?</h2>
          <h3>A GLIMPSE INTO MY FUTURE</h3>
          <h4>Chapter 5</h4>

          <h5>The journey has been an interesting one, so far. But, the real fun is just about to begin. Now equipped with three of the most valuable skills in this digital world and having a first-hand taste working in a rapidly growing tech startup, I'm more than ready for the next adventure.</h5>

          <h5>What I would absolutely love to do is to be able to work on a big, life-changing project. I want to help build the future, even if it's just an app or a website. The results I truly aim to achieve are to help improve the lives of as many people as I can.</h5>

          <h5>If you have an opportunity you would like to share with me, would possibly like to work together, or if you just have any questions - let's chat! ☕️</h5>

          <div className="">
            <a href="#contact-me" className="button">Contact Me</a>
          </div>

        </div>
      </div>

      <div className="pic-box-5">
      </div>
    </div>

    <div className="section-container">
      <div className="pic-box-6">

      </div>

      <div className="text-box-6">
      <div id="contact-me" className="text-right">
      <h2>Contact.</h2>
          <h3>HOW CAN I HELP YOU?</h3>

          <h5>I hope you've enjoyed learning more about me! <br/>It's definitely just scratching the surface of my abilities and definitely my personality, too. <br/>The industry has coined a term for someone<br/> with my skillset but I refuse to be labeled as a Unicorn. 😅 Jokes aside, I'm very well-rounded and I approach challenges head-on with an aura of high-spirits and unshakeable confidence.</h5>

          <h5>What challenges are you currently facing? <br/>Is there anything you think I can help you with?
          <br/>Do you think I would be a good addition<br/> to your engineering team? 🤔</h5>

          <h5>If so, I'm currently available <br/>for new opportunities <br/>as a Full Stack Software Engineer!</h5> 
          <h5>If you would like to get in touch with me, <br/>I'm always checking my e-mails!</h5>

          <h3>rhuwell.samano@gmail.com</h3>
          <h2 className="contact-h2">Thank you!</h2>
        </div>
      </div>

      <div className="pic-box-6-mobile">

      </div>

    </div>

    <style jsx>{`
      .cover {
        position: relative;
        min-height: 130vh;
        background: transparent url(/static/pro-work.JPG) no-repeat center center;
        background-size: cover;
        background-attachment: fixed;
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        text-align: left;
      }
      .hello {
        color: #FFF;
        line-height: 1.4;
        display: inline-block;
        position: relative;
        top: 200px;
        left: 50px;
        padding-left: 80px;
        padding-right: 80px;
        opacity: 100%;
      }
      .hello h1 {
        line-height: 1.0;
        font-family: 'Galano';
        color: #FFF;
        font-size: 92px;
        margin: 0 0 0px 0;
        padding: 0px;
      }
      .subtitle {
        font-family: "HomepageBaukasten-Bold";
        font-size: 16px;
        margin-top: 10px;
        margin-left: 5px;
      }
      a.button {
        font-family: 'Larsseit';
        display: inline-block;
        text-transform: uppercase;
        font-size: 16px;
        background: #F5AD25;
        margin-left: 5px;
        margin-top: 30px;
        padding: 10px 40px;
        top: 25px;
        color: #FFF;
        border-radius: 5px;
      }
      .text-left {
        text-align: left;
        padding: 20px 130px;
      }
      .text-right {
        text-align: right;
        padding: 20px 130px;
      }
      h2 {
        font-family: 'Galano';
        font-size: 80px;
        color: #F2F2F2;
        padding-top: 30px;
        margin-bottom: 10px;
        line-height: 0.9;
      }
      .work-h2 {
        font-family: 'Galano';
        font-size: 120px;
        color: #F2F2F2;
        padding-top: 0px;
        margin-bottom: 10px;
        line-height: 0.3;
      }
      .blink-h2 {
        font-family: 'Galano';
        font-size: 90px;
        color: #F2F2F2;
        padding-top: 30px;
        margin-bottom: 10px;
        line-height: 0.3;
      }
      .contact-h2 {
        font-family: 'Galano';
        font-size: 80px;
        color: #F2F2F2;
        padding-top: 0px;
        margin-bottom: 10px;
        line-height: 0.3;
      }
      h3 {
        font-family: 'Galano';
        font-size: 30px;
        color: #343D4F;
        padding: 0px 0;
        margin-bottom: 0px;
        line-height: 0.1;
      }
      .contact-h5 {
        font-family: 'Galano';
        font-size: 30px;
        color: #343D4F;
        padding: 0px 0;
        margin-bottom: 0px;
        margin-top: 0px;
      }
      h4 {
        font-family: 'CarreNoir';
        font-size: 20px;
        color: #a6b1b9;
        padding: 0px 0;
        margin-bottom: 0px;
      }
      h5 {
        font-family: 'Varta';
        font-size: 16px;
        color: #a6b1b9;
        line-height: 2.2;
        padding: 0px 0;
        margin-bottom: 0px;
      }
      .features-h5 {
        font-family: 'Varta';
        font-size: 12px;
        color: #a6b1b9;
        line-height: 2.2;
        padding: 0px 0;
        margin-bottom: 0px;
        margin-top: 0px;
      }
      @media (max-width: 480px) {
        .hello {
          font-family: 'Galano';
          font-size: 18px;
          padding: 20px;
        }
        h1 {
          font-size: 28px;
        }
      }
      .section-container {
        height: 150vh;
        display: block;
        max-width: 100%;
        margin: 0 auto;
      }
      .section-container-sickfits {
        height: 130vh;
        display: block;
        max-width: 100%;
        margin: 0 auto;
      }
      .section-container-linkedup {
        height: 130vh;
        display: block;
        max-width: 100%;
        margin: 0 auto;
      }
      .text-box {
        box-sizing: border-box;
        background: #FFF;
        float: left;
        width: 60%;
        height: 100%;
      }
      .pic-box {
        box-sizing: border-box;
        background: url(/static/pro-about-me.JPG) no-repeat center right;
        background-size: cover;
        background-position: top right 25%;
        float: right;
        width 40%;
        height: 100%;
      }
      .text-box-2 {
        box-sizing: border-box;
        background: #f2efef; 
        float: right;
        width 60%;
        height: 100%;
      }
      .text-box-2 h2 {
        color: #FFF;
      }
      .pic-box-2 {
        box-sizing: border-box;
        background: url(/static/pro-cover.JPG) no-repeat center right;
        background-size: cover;
        background-position: top right 20%;
        float: left;
        width: 40%;
        height: 100%;
      }
      @media (max-width: 480px) {
        .pic-box-2-mobile {
          box-sizing: border-box;
          background: url(/static/pro-work.JPG) no-repeat center right;
          background-size: cover;
          background-position: top right 20%;
          float: left;
          width: 100%;
          height: 100%;
        }
      }
      .projects-row-1 {
        display: flex;
      }
      .project-image-container {
        width: 100%;
      }
      .project-image {
        width: 100%;
        padding: 7px;
        padding-top: 0px;
      }
      .text-box-3 {
        box-sizing: border-box;
        background: #1C212A;
        float: left;
        width: 60%;
        height: 100%;
      }
      .pic-box-3 {
        box-sizing: border-box;
        background: url(/static/pro-skills.JPG) no-repeat center right;
        background-size: cover;
        background-position: top right 35%;
        float: right;
        width 40%;
        height: 100%;
      }
      .pic-box-4 {
        box-sizing: border-box;
        background: url(/static/pro-tech.JPG) no-repeat center right;
        background-size: cover;
        background-position: top right 25%;
        float: left;
        width: 40%;
        height: 100%;
      }
      .skills-row {
        display: flex;
        width: 100%;
        padding-top: 40px;
        padding-bottom: 20px;
      }
      .skills-image-container {
        width: 20%;
        height: 20%;
        display: flex;
        margin-right: 5%;
      }
      .skills-text-container {
        line-height: 1.2;
        width: 75%;
        display: inline;
      }
      .skills-text-container h3 {
        padding-top: 0px;
        margin-top: 0px;
      }
      .skills-text-container h5 {
        padding-top: 0px;
        margin-top: 0px;
      }
      .text-box-4 {
        box-sizing: border-box;
        background: #FFF; 
        float: right;
        width 60%;
        height: 100%;
      }
      .tech-rows-container {
        margin-top: 30px;
      }
      .tech-row {
        display: flex;
      }
      .tech-image-container {
        width: 30%;
        padding: 5px;
      }
      .tech-image-container span {
        font-size: 100px;
        -o-transition:.3s;
        -ms-transition:.3s;
        -moz-transition:.3s;
        -webkit-transition:.3s;
        transition:.3s;
      }
      .tech-image-container span:hover {
        color: #F5AD25;
      }
      .pic-box-5 {
        box-sizing: border-box;
        background: url(/static/pro-education.JPG) no-repeat center right;
        background-size: cover;
        background-position: bottom right 20%;
        float: left;
        width: 40%;
        height: 100%;
      }
      .text-box-5 {
        box-sizing: border-box;
        background: #1C212A;
        float: left;
        width: 60%;
        height: 100%;
      }
      .text-box-5 h2 {
        font-size: 85px;
      }
      .education-row {
        display: flex;
        width: 100%;
        padding-top: 40px;
        padding-bottom: 20px;
      }
      .education-image-container {
        width: 20%;
        height: 20%;
        display: flex;
        margin-right: 5%;
      }
      .education-text-container {
        line-height: 1.2;
        width: 75%;
        display: inline;
      }
      .education-text-container h3 {
        padding-top: 0px;
        margin-top: 0px;
      }
      .education-text-container h4 {
        padding-top: 0px;
        margin-top: 0px;
      }
      .education-text-container h5 {
        padding-top: 0px;
        margin-top: 0px;
      }
      .pic-box-6 {
        box-sizing: border-box;
        background: url(/static/pro-contact-me.JPG) no-repeat center right;
        background-size: cover;
        background-position: top right 25%;
        float: left;
        width: 40%;
        height: 100%;
      }
      .text-box-6 {
        box-sizing: border-box;
        background: #FFF; 
        float: right;
        width 60%;
        height: 100%;
      }









      @media (max-width: 480px) {
        .cover {
          box-sizing: border-box;
          background: transparent url(/static/pro-work.JPG) no-repeat center right;
          background-size: cover;
          background-position: top right 25%;
          text-align: left;
          height: 80vh;
        }
        .hello {
          color: #FFF;
          line-height: 1.4;
          display: inline-block;
          position: relative;
          top: 500px;
          left: 10px;
          padding-left: 20px;
          padding-right: 80px;
          opacity: 100%;
        }
        .hello h1 {
          line-height: 1.0;
          font-family: 'Galano';
          color: #FFF;
          font-size: 30px;
          margin: 0 0 0px 0;
          padding: 0px;
        }
        .subtitle {
          font-family: "HomepageBaukasten-Bold";
          font-size: 10px;
          margin-top: 10px;
          margin-left: 0px;
        }
        a.button {
          font-family: 'Larsseit';
          display: inline-block;
          text-transform: uppercase;
          font-size: 10px;
          background: #F5AD25;
          margin-left: 5px;
          margin-top: 30px;
          padding: 8px 30px;
          top: 25px;
          color: #FFF;
          border-radius: 5px;
        }
        .text-left {
          text-align: left;
          padding: 5px 40px;
        }
        .text-right {
          text-align: right;
          padding: 5px 40px;
        }
        h2 {
          font-family: 'Galano';
          font-size: 40px;
          color: #F2F2F2;
          padding-top: 30px;
          margin-bottom: 10px;
          line-height: 0.9;
        }
        .blink-h2 {
          font-family: 'Galano';
          font-size: 40px;
          color: #F2F2F2;
          padding-top: 30px;
          margin-bottom: 10px;
          line-height: 0.3;
        }
        .majin-h2 {
          font-family: 'Galano';
          font-size: 40px;
          color: #F2F2F2;
          padding-top: 30px;
          margin-bottom: 10px;
          line-height: 0.3;
        }
        .work-h2 {
          font-family: 'Galano';
          font-size: 60px;
          color: #F2F2F2;
          padding-top: 0px;
          margin-bottom: 10px;
          line-height: 0.3;
        }
        .contact-h2 {
          font-family: 'Galano';
          font-size: 40px;
          color: #F2F2F2;
          padding-top: 0px;
          margin-bottom: 10px;
          line-height: 0.3;
        }
        h3 {
          font-family: 'Galano';
          font-size: 12px;
          color: #343D4F;
          padding: 5px 0;
          margin-bottom: 0px;
          line-height: 0.1;
        }
        .contact-h5 {
          font-family: 'Galano';
          font-size: 30px;
          color: #343D4F;
          padding: 0px 0;
          margin-bottom: 0px;
          margin-top: 0px;
        }
        h4 {
          font-family: 'CarreNoir';
          font-size: 12px;
          color: #a6b1b9;
          padding: 0px 0;
          margin-bottom: 0px;
          line-height: 1.0;
        }
        h5 {
          font-family: 'Varta';
          font-size: 12px;
          color: #a6b1b9;
          line-height: 2.2;
          padding: 0px 0;
          margin-bottom: 0px;
        }
        @media (max-width: 480px) {
          .hello {
            font-family: 'Galano';
            font-size: 18px;
            padding: 20px;
          }
          h1 {
            font-size: 28px;
          }
        }
        .section-container {
          height: 150vh;
          display: block;
          max-width: 100%;
          margin: 0 0;
        }
        .section-container-sickfits {
          height: 140vh;
          display: block;
          max-width: 100%;
          margin: 0 0;
        }
        .section-container-linkedup {
          height: 140vh;
          display: block;
          max-width: 100%;
          margin: 0 0;
        }
        .text-box {
          box-sizing: border-box;
          background: #FFF;
          float: left;
          width: 100%;
          height: 100%;
        }
        .pic-box {
          box-sizing: border-box;
          background: url(/static/pro-about-me.JPG) no-repeat center right;
          background-size: cover;
          background-position: top right 28%;
          float: right;
          width: 100%;
          height: 100vh;
        }
        .text-box-2 {
          box-sizing: border-box;
          background: #f2efef; 
          float: left;
          width 100%;
          height: 100%;
        }
        .text-box-2 h2 {
          color: #FFF;
        }
        .pic-box-2 {
          display: none;
          box-sizing: border-box;
          background: url(/static/pro-cover.JPG) no-repeat center right;
          background-size: cover;
          background-position: top right 20%;
          width: 100%;
          height: 100%;
        }
        .pic-box-2-mobile {
          box-sizing: border-box;
          background: url(/static/pro-cover.JPG) no-repeat center right;
          background-size: cover;
          background-position: top right 20%;
          float: right;
          height: 90vh;
        }
        .projects-row-1 {
          display: justify;
        }
        .project-image-container {
          width: 50%;
        }
        .project-image {
          width: 100%;
          padding: 7px;
          padding-top: 0px;
        }
        .text-box-3 {
          box-sizing: border-box;
          background: #1C212A;
          float: left;
          width: 100%;
          height: 100%;
        }
        .pic-box-3 {
          box-sizing: border-box;
          background: url(/static/pro-skills.JPG) no-repeat center right;
          background-size: cover;
          background-position: top right 35%;
          float: right;
          width 100%;
          height: 100%;
        }
        .pic-box-4 {
          display: none;
          box-sizing: border-box;
          background: url(/static/pro-tech.JPG) no-repeat center right;
          background-size: cover;
          background-position: top right 25%;
          float: left;
          width: 100%;
          height: 100%;
        }
        .pic-box-4-mobile {
          box-sizing: border-box;
          background: url(/static/pro-tech.JPG) no-repeat center right;
          background-size: cover;
          background-position: top right 25%;
          float: left;
          width: 100%;
          height: 100%;
        }
        .skills-row {
          display: flex;
          width: 100%;
          padding-top: 40px;
          padding-bottom: 20px;
        }
        .skills-image-container {
          width: 80px;
          height: 60px;
          display: flex;
          margin-right: 5px;
        }
        .skills-text-container {
          line-height: 1.2;
          width: 75%;
          display: inline;
        }
        .skills-text-container h3 {
          padding-top: 0px;
          margin-top: 0px;
        }
        .skills-text-container h5 {
          padding-top: 0px;
          margin-top: 0px;
        }
        .text-box-4 {
          box-sizing: border-box;
          background: #FFF; 
          float: right;
          width 100%;
          height: 100%;
        }
        .tech-rows-container {
          margin-top: 30px;
        }
        .tech-row {
          display: flex;
        }
        .tech-image-container {
          width: 30%;
          padding: 5px;
        }
        .tech-image-container span {
          font-size: 60px;
          -o-transition:.3s;
          -ms-transition:.3s;
          -moz-transition:.3s;
          -webkit-transition:.3s;
          transition:.3s;
        }
        .tech-image-container span:hover {
          color: #F5AD25;
        }
        .pic-box-5 {
          box-sizing: border-box;
          background: url(/static/pro-education.JPG) no-repeat center right;
          background-size: cover;
          background-position: bottom right 20%;
          float: left;
          width: 100%;
          height: 90vh;
        }
        .text-box-5 {
          box-sizing: border-box;
          background: #1C212A;
          float: left;
          width: 100%;
          height: 100%;
        }
        .text-box-5 h2 {
          font-size: 40px;
        }
        .education-row {
          display: flex;
          width: 100%;
          padding-top: 40px;
          padding-bottom: 20px;
        }
        .education-image-container {
          height: 70px;
          width: 80px;
          display: flex;
          margin-right: 5%;
        }
        .education-text-container {
          line-height: 1.2;
          width: 75%;
          display: inline;
        }
        .education-text-container h3 {
          padding-top: 0px;
          margin-top: 0px;
        }
        .education-text-container h4 {
          padding-top: 0px;
          margin-top: 0px;
        }
        .education-text-container h5 {
          padding-top: 0px;
          margin-top: 0px;
        }
        .pic-box-6 {
          display: none;
          box-sizing: border-box;
          background: url(/static/pro-contact-me.JPG) no-repeat center right;
          background-size: cover;
          background-position: top right 25%;
          float: left;
          width: 100%;
          height: 100%;
        }
        .pic-box-6-mobile {
          box-sizing: border-box;
          background: url(/static/pro-contact-me.JPG) no-repeat center right;
          background-size: cover;
          background-position: top right 25%;
          float: left;
          width: 100%;
          height: 100vh;
        }
        .text-box-6 {
          box-sizing: border-box;
          background: #FFF; 
          float: right;
          width 100%;
          height: 100%;
        }  
      }
    `}</style>
  </Layout>
);

export default About;