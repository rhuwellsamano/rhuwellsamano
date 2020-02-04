import Link from 'next/link';
import Layout from '../components/Layout';

const Projects = () => (
  <Layout title="Projects">
    <div className="cover">
      <div className="hello">
        <h1>PROJECTS.</h1>
        <div className="subtitle">SOFTWARE DEVELOPMENT • UI/UX • WEB DESIGN</div>
        <Link href="/about">
          <a className="view-more">LEARN MORE</a>
        </Link>
      </div>
    </div>

    <div className="section-container">
      <div className="text-box">
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

      <div className="pic-box">
      </div>
    </div>

    <div className="section-container">
      <div className="pic-box-2">

      </div>

      <div className="text-box-2">
      <div className="text-right">
          <h2>Work.</h2>
          <h3>RECENT PROJECTS</h3>
          <div className="projects-row-container">
            <div className="projects-row-1">

              <div className="project-image-container">
                <img className="project-image" src="/static/blink-health-mockup.png" alt=""></img>
              </div>

              <div className="project-image-container">
                <img className="project-image" src="/static/sick-fits-mockup.png" alt=""></img>
              </div>

            </div>

            <div className="projects-row-1">

              <div className="project-image-container">
                <img className="project-image" src="/static/majin-sushi-mockup.png" alt=""></img>
              </div>

              <div className="project-image-container">
                <img className="project-image" src="/static/linkedup-mockup.png" alt=""></img>
              </div>

            </div>

          </div>
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
          <h2>Skills.</h2>
          <h3>THE PERFECT TRIFECTA</h3>


          <div className="skills-row">
            <div className="skills-image-container">
              <img className="project-image" src="/static/software-engineer.png" alt=""></img>
            </div>

            <div className="skills-text-container">
              <h3>SOFTWARE ENGINEERING</h3>
              <h5>This is an H5! Here's some lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur a nisl a tincidunt.</h5>
            </div>
          </div>

          <div className="skills-row">
            <div className="skills-image-container">
              <img className="project-image" src="/static/digital-marketing.png" alt=""></img>
            </div>

            <div className="skills-text-container">
              <h3>DIGITAL MARKETING</h3>
              <h5>This is an H5! Here's some lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur a nisl a tincidunt.</h5>
            </div>
          </div>

          <div className="skills-row">
            <div className="skills-image-container">
              <img className="project-image" src="/static/designer.png" alt=""></img>
            </div>

            <div className="skills-text-container">
              <h3>WEB & APP DESIGN</h3>
              <h5>This is an H5! Here's some lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur a nisl a tincidunt.</h5>
            </div>
          </div>

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
          <h2>Tech.</h2>
          <h3>TOOLS OF THE TRADE</h3>
          <div className="tech-rows-container">
            <div className="tech-row">
              <div className="tech-image-container">
                <span className="devicons devicons-react" />
              </div>

              <div className="tech-image-container">
                <span className="devicons devicons-python" />
              </div>

              <div className="tech-image-container">
                <span className="devicons devicons-django" />
              </div>

              <div className="tech-image-container">
                <span className="devicons devicons-ruby_on_rails" />
              </div>
            </div>

            <div className="tech-row">
              <div className="tech-image-container">
                <span className="devicons devicons-javascript_badge" />
              </div>

              <div className="tech-image-container">
                <span className="devicons devicons-nodejs" />
              </div>

              <div className="tech-image-container">
                <span className="devicons devicons-html5" />
              </div>

              <div className="tech-image-container">
                <span className="devicons devicons-css3" />
              </div>
            </div>

            <div className="tech-row">
              <div className="tech-image-container">
                <span className="devicons devicons-npm" />
              </div>

              <div className="tech-image-container">
                <span className="devicons devicons-swift" />
              </div>

              <div className="tech-image-container">
                <span className="devicons devicons-photoshop" />
              </div>

              <div className="tech-image-container">
                <span className="devicons devicons-illustrator" />
              </div>
            </div>
          </div>

          <h5>GitHub Contributions - Updated January 21st, 2020</h5>
          <img src="/static/github-calendar.png" alt=""></img>

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
          <h2>Education.</h2>
          <h3>KNOWLEDGE IS KEY</h3>
          
          <div className="education-row">
            <div className="education-image-container">
              <img className="project-image" src="/static/flatironschool.png" alt=""></img>
            </div>

            <div className="education-text-container">
              <h3>FLATIRON SCHOOL</h3>
              <h4>The "Ivy League of coding bootcamps"</h4>
              <h5>Full Stack Software Engineering | React, Javascript, Ruby on Rails</h5>
            </div>
          </div>

          <div className="education-row">
            <div className="education-image-container">
              <img className="project-image" src="/static/teamtreehouse.png" alt=""></img>
            </div>

            <div className="education-text-container">
              <h3>TEAMTREEHOUSE</h3>
              <h4>A top-tier online school for learning code</h4>
              <h5>Full Stack Javascript Development & Full Stack Web Development</h5>
            </div>
          </div>

          <div className="education-row">
            <div className="education-image-container">
              <img className="project-image" src="/static/csi.png" alt=""></img>
            </div>

            <div className="education-text-container">
              <h3>COLLEGE OF STATEN ISLAND</h3>
              <h4>The largest campus in all of New York City</h4>
              <h5>BS: Business Marketing | Learned Design skills on the side</h5>
            </div>
          </div>

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
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur a nisl a tincidunt. Etiam placerat velit sem, vel suscipit augue fermentum nec. Sociis natoque penatibus et magnis dis.</h4>
          <h5>Parturient montes, nascetur ridiculus mus. Maecenas ac finibus turpis. Vivamus et elit in leo pretium pharetra. Sed lobortis urna turpis, id ultricies dolor pharetra ac. Proin suscipit odio non libero ullamcorper, sit amet tincidunt lacus porta. Aenean sodales lectus ex, non sagittis nibh ultricies at. Aliquam nec dolor posuere, vulputate mauris at, fermentum Donec ligula metus, hendrerit at malesuada vel, facilisis sit amet dui. Aliquam erat volutpat. Nulla eget ornare dolor. Pellentesque convallis dui ante, eu pretium ipsum bibendum fermentum. Proin dui arcu, mattis non ultricies ac, pellentesque eget ipsum. Nullam tincidunt orci in interdum facilisis. Vestibulum eu neque et mauris vestibulum pretium vel vitae enim. Vestibulum id ipsum risus. Suspendisse lectus tortor, pretium ut orci vitae, mollis iaculis risus.</h5>
          <div className="">
            <Link href="/projects">
              <a className="view-more">View All</a>
            </Link>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`
      .cover {
        position: relative;
        min-height: 112vh;
        background: transparent url(/static/pro-cover.JPG) no-repeat center center;
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
      a.view-more:hover {
        color: #FECE00;
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