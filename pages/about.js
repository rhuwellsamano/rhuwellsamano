import Link from 'next/link';
import Layout from '../components/Layout';

const About = () => (
  <Layout title="About Me">
    <div className="cover">
      <div className="hello">
        <h1>ABOUT ME.</h1>
        <div className="subtitle">WANT TO KNOW MY STORY, SO FAR?</div>
          <a href="#jump-to-top" className="view-more">LEARN MORE</a>
      </div>
    </div>

    <div className="section-container">
      <div id="jump-to-top" className="text-box">
        <div className="text-left">
          <h2>About.</h2>
            <h3>CONNECTED THROUGH CREATION</h3>
            <h4>"What you leave behind is not what is engraved in stone monuments, but what is woven into the lives of others." -- Pericles</h4>
            
            <h5>My name is Rhuwell Samano and I'm a Full Stack Software Engineer. I specialize in React and mainly code in Javascript. I have a particularly rare combination of skills that allow me to have valuable insight into many, if not all, types of digital projects. </h5>
            <h5>
            By using Software Engineering, Digital Marketing and Web & App Design, I'm able to understand all of the moving parts of a project and connect them together into a beautiful handcrafted system that fuels and grows powerful brands. </h5>

            <h5>I'm passionate about creating world-class experiences for various communities using websites, applications, and digital media. The most important person I care about and create for is the end-user. I thoroughly enjoy working with others towards achieving that goal, no matter the project.</h5>

            <div className="">
              <Link href="/about">
                <a className="view-more">Read More</a>
              </Link>
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
      <h2>About.</h2>
          <h3>CONNECTED THROUGH CREATION</h3>
          <h4>I've had many jobs in many fields. I've gained a lot of foresight in my creation process through various perspectives.</h4>
          <h5>Full Stack Software Engineer with a background in digital marketing, video/photo production, and social media who enjoys combining creativity and technical abilities to bring projects from idea to completion.</h5>
          <h5>
          Passionate about creating world class experiences for targeted audiences using websites, applications, and digital media.</h5>
          <h5>Natural-born leader and proactive team-player, with strong listening skills and empathetic communication skills who loves using storytelling to inspire others to take action.</h5>

          <div className="">
            <Link href="/projects">
              <a className="view-more">View All</a>
            </Link>
          </div>

        </div>
      </div>
    </div>

    <div className="section-container">
      <div className="text-box-3">
        <div className="text-left">
        <h2>About.</h2>
          <h3>CONNECTED THROUGH CREATION</h3>
          <h4>I've had many jobs in many fields. I've gained a lot of foresight in my creation process through various perspectives.</h4>
          <h5>Full Stack Software Engineer with a background in digital marketing, video/photo production, and social media who enjoys combining creativity and technical abilities to bring projects from idea to completion.</h5>
          <h5>
          Passionate about creating world class experiences for targeted audiences using websites, applications, and digital media.</h5>
          <h5>Natural-born leader and proactive team-player, with strong listening skills and empathetic communication skills who loves using storytelling to inspire others to take action.</h5>

          <div className="">
            <Link href="/projects">
              <a className="view-more">View All</a>
            </Link>
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
          <h2>About.</h2>
          <h3>CONNECTED THROUGH CREATION</h3>
          <h4>I've had many jobs in many fields. I've gained a lot of foresight in my creation process through various perspectives.</h4>
          <h5>Full Stack Software Engineer with a background in digital marketing, video/photo production, and social media who enjoys combining creativity and technical abilities to bring projects from idea to completion.</h5>
          <h5>
          Passionate about creating world class experiences for targeted audiences using websites, applications, and digital media.</h5>
          <h5>Natural-born leader and proactive team-player, with strong listening skills and empathetic communication skills who loves using storytelling to inspire others to take action.</h5>

          <div className="">
            <Link href="/projects">
              <a className="view-more">View All</a>
            </Link>
          </div>
          
        </div>
      </div>
    </div>

    <div className="section-container">
      <div className="text-box-5">
        <div className="text-left">
          <h2>About.</h2>
          <h3>CONNECTED THROUGH CREATION</h3>
          <h4>I've had many jobs in many fields. I've gained a lot of foresight in my creation process through various perspectives.</h4>
          <h5>Full Stack Software Engineer with a background in digital marketing, video/photo production, and social media who enjoys combining creativity and technical abilities to bring projects from idea to completion.</h5>
          <h5>
          Passionate about creating world class experiences for targeted audiences using websites, applications, and digital media.</h5>
          <h5>Natural-born leader and proactive team-player, with strong listening skills and empathetic communication skills who loves using storytelling to inspire others to take action.</h5>

          <div className="">
            <Link href="/projects">
              <a className="view-more">View All</a>
            </Link>
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
        background: url(/static/pro-about-me.JPG) no-repeat center right;
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
        background: url(/static/pro-cover.JPG) no-repeat center right;
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

export default About;