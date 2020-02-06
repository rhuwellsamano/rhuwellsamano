import Link from 'next/link';
import Layout from '../components/Layout';

const Projects = () => (
  <Layout title="Projects">
    <div className="cover">
      <div className="hello">
        <h1>PROJECTS.</h1>
        <div className="subtitle">SOFTWARE DEVELOPMENT • UI/UX • WEB & APP DESIGN</div>
          <a href="#jump-to-top" className="view-more">LEARN MORE</a>
      </div>
    </div>

    <div className="section-container">
      <div id="jump-to-top" className="text-box">
        <div className="text-left">
          <h2 className="blink-h2">Blink Health.</h2>
          <h3>React • Redux • Python • Flow • Jest</h3>

          <h4>"Blink Health is the new way for all Americans to save on their prescriptions. With our proprietary technology, everyone now has access to one, low negotiated price on over 15,000 medications."</h4>

          <h5>With an exponentially growing customer-base of well over 1 million people, it was vital to innovate and design solutions to maintain the product's stability as it continued to evolve and become a reliable household brand.</h5>

          <ul>
            <h3>What I Did:</h3>
            <li><h5 className="features-h5">Built reusable components in React using object-oriented/functional programming to improve performance on the website</h5></li>
              <li><h5 className="features-h5">Collaborated with the UX/front-end development team in an Agile/TDD environment to consistently complete deliverables</h5></li>
              <li><h5 className="features-h5">Created A/B test experiments to collect usage data to increase user sign-up conversion and retention rates</h5></li>
          </ul>

          <div className="">
            <a href="http://www.blinkhealth.com" className="view-more">Website</a>
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
      <div className="text-right">
          <h2>Sick Fits.</h2>
          <h3>React • Next • GraphQL • Prisma • Jest</h3>
          <h4>An e-commerce app for buying and selling apparel, shoes, and accessories.</h4>

          <h5>In this highly digital age, it's become almost necessary to be able to buy and sell products outside of the classic brick-and-mortar storefront. By using modern technologies like React and GraphQL, it's completely possible to build a fast and reliable e-commerce platform for your brand to grow faster than ever!</h5>

          <ul>
            <h3>What I Did:</h3>
            <li><h5 className="features-h5">Built with React, Next and Apollo GraphQL to utilize reusable components, have ultrafast page loading speeds, and to make one single call to access data in any component.</h5></li>
              <li><h5 className="features-h5">Incorporated Jest and Enzyme to allow for thorough unit testing to ensure app stability.</h5></li>
              <li><h5 className="features-h5">Added Stripe API in order to add a dependable payment method for users</h5></li>
              <li><h5 className="features-h5">Utilized Cloudinary to handle resizing of uploaded product photos before they are saved to the backend</h5></li>
          </ul>

          <div className="">
            <a href="https://github.com/rhuwellsamano/advanced-react/tree/master/sick-fits/frontend" className="view-more">Frontend Repo</a>
            <a href="https://github.com/rhuwellsamano/advanced-react/tree/master/sick-fits/backend" className="view-more">Backend Repo</a>
            <a href="https://www.youtube.com/watch?v=ytATWMdlS_w" className="view-more">Demo</a>
          </div>

        </div>
      </div>
    </div>

    <div className="section-container">
      <div className="text-box-3">
        <div className="text-left">
          <h2>Portfolio.</h2>
          <h3>React • Next • JavaScript</h3>
          <h4>Made from scratch, this portfolio project is worth mentioning.</h4>

          <h5>Having a portfolio website can provide more details and context to your story than you can fit on your resume. By using React and Next, I'm able to build fast and focus on the User Interface and User Experience. I also used a consistent style guide to maintain beautiful eye-catching typography and a refreshing cool-toned color theme. </h5>

          <ul>
            <h3>What I Did:</h3>
            <li><h5 className="features-h5">Built with React and Next to get up-and-running relatively fast</h5></li>
              <li><h5 className="features-h5">Gathered layout and design inspiration on Dribbble and sketched out a wireframe of the website before I started developing</h5></li>
              <li><h5 className="features-h5">Ran a couple of UI/UX user tests along the way to make sure every aspect of the website was received well</h5></li>
          </ul>

          <div className="">
            <a href="https://github.com/rhuwellsamano/rhuwellsamano" className="view-more">GitHub Repo</a>
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
      <div className="text-right">
          <h2>LinkedUP.</h2>
          <h3>React • Ruby on Rails • WebSockets</h3>
          <h4>A self-destructing chat app that aims to mimic real-life interactions.</h4>

          <h5>Inspired by real-life occurences of meeting new people, I wanted to create a time-based chat app that allowed users to meet other professionals based off their LinkedIn profiles. Perfect for people who want to expand their networks without the hassle! </h5>

          <ul>
            <h3>What I Did:</h3>
            <li><h5 className="features-h5">Built with React for the front-end, Ruby on Rails for the back-end and PostgreSQL for Database Management</h5></li>
              <li><h5 className="features-h5">Implemented ActionCable (WebSockets) to provide instant and live chat updates to all users in the Chatroom</h5></li>
              <li><h5 className="features-h5">Added User Authorization/Login functionality by using JSON Web Tokens and Encryption/Decryption algorithms</h5></li>
              <li><h5 className="features-h5">Enabled full CRUD functionality for User Profiles including a “Like” feature as well as updating user details</h5></li>
          </ul>

          <div className="">
            <a href="https://github.com/rhuwellsamano/linkedup-frontend" className="view-more">Frontend Repo</a>
            <a href="https://github.com/rhuwellsamano/linkedup-backend" className="view-more">Backend Repo</a>
            <a href="https://www.youtube.com/watch?v=welfAhsiNm4" className="view-more">Demo</a>
          </div>

        </div>
      </div>
    </div>

    <div className="section-container">
      <div className="text-box-5">
        <div className="text-left">
          <h2>Majin Sushi.</h2>
          <h3>JavaScript • Ruby on Rails</h3>
          <h4>An interactive restaurant game where you create and eat sushi.</h4>

          <h5>Still my favorite app to have worked on - it's a JavaScript game with a bunch of adorable sushi characters, animations and sounds. You have in-game currency that you use to purchase sushi to eat as you get hungry.. and you will get hungry. I'm planning on working on a sequel in the near future - Majin Sushi 2 , coming soon!</h5>

          <ul>
            <h3>What I Did:</h3>
            <li><h5 className="features-h5">Built with Javascript for the front-end, Ruby on Rails for the back-end and PostgreSQL for Database Management</h5></li>
              <li><h5 className="features-h5">Used CSS Animations, Music, and Sounds to create an immersive and enjoyable experience for users</h5></li>
              <li><h5 className="features-h5">Added a Hunger Meter feature that decreased over time and aggressively alerted the user if it fell below a certain number</h5></li>
              <li><h5 className="features-h5">Utilized full CRUD functionality to allow users to create, edit, and destroy in-game Sushis</h5></li>
          </ul>

          <div className="">
            <a href="https://github.com/rhuwellsamano/majin-sushi-frontend" className="view-more">Frontend Repo</a>
            <a href="https://github.com/rhuwellsamano/majin-sushi-backend" className="view-more">Backend Repo</a>
            <a href="https://www.youtube.com/watch?v=klHWjDFI4IM" className="view-more">Demo</a>
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
        <div className="text-right">
        <h2>Contact.</h2>
            <h3>HOW CAN I HELP YOU?</h3>

            <h5>What challenges are you facing?
            Do you think I would be able to help your team?</h5>

            <h5>If so, I'm currently available for new opportunities as a Software Engineer!</h5> 
            <h5>If you would like to get in touch with me, I'm always checking my e-mails!</h5>

            <h3>rhuwell.samano@gmail.com</h3>
            <h2 className="contact-h2">Thank you!</h2>
        </div>
      </div>
    </div>

    <style jsx>{`
      .cover {
        position: relative;
        min-height: 112vh;
        background: transparent url(/static/pro-about-me.JPG) no-repeat center center;
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
      a.view-more {
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
        font-size: 120px;
        color: #F2F2F2;
        padding-top: 30px;
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
        font-size: 16px;
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
        height: 112vh;
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
        background: url(/static/pro-cover.JPG) no-repeat center right;
        background-size: cover;
        background-position: top right 20%;
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
        background: url(/static/pro-work.JPG) no-repeat center right;
        background-size: cover;
        background-position: top right 20%;
        float: left;
        width: 40%;
        height: 100%;
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
    `}</style>
    </Layout>
  );
  
  export default Projects;