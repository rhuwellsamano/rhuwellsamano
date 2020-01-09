import Link from 'next/link';
import Layout from '../components/Layout';

const Homepage = () => (
  <Layout title="Homepage">
    <div className="cover">
      <div className="hello">
        <h1>BRILLIANTLY DESIGNED AND BUILT.</h1>
        <div className="subtitle">RHUWELL SAMANO - FULL STACK SOFTWARE ENGINEER</div>
        <Link href="/about">
          <a className="view-more">LEARN MORE</a>
        </Link>
      </div>
    </div>

    <div className="section-container">
      <div className="text-box">
        <div className="text-left">
          <h2>About.</h2>
          <h3>INSPIRED BY DIFFERENCE.</h3>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur a nisl a tincidunt. Etiam placerat velit sem, vel suscipit augue fermentum nec. Sociis natoque penatibus et magnis dis.</h4>
          <h5>Parturient montes, nascetur ridiculus mus. Maecenas ac finibus turpis. Vivamus et elit in leo pretium pharetra. Sed lobortis urna turpis, id ultricies dolor pharetra ac. Proin suscipit odio non libero ullamcorper, sit amet tincidunt lacus porta. Aenean sodales lectus ex, non sagittis nibh ultricies at. Aliquam nec dolor posuere, vulputate mauris at, fermentum Donec ligula metus, hendrerit at malesuada vel, facilisis sit amet dui. Aliquam erat volutpat. Nulla eget ornare dolor. Pellentesque convallis dui ante, eu pretium ipsum bibendum fermentum. Proin dui arcu, mattis non ultricies ac, pellentesque eget ipsum. Nullam tincidunt orci in interdum facilisis. Vestibulum eu neque et mauris vestibulum pretium vel vitae enim. Vestibulum id ipsum risus. Suspendisse lectus tortor, pretium ut orci vitae, mollis iaculis risus.</h5>
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
          <h3>RECENT PROJECTS.</h3>
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

    <div className="section-container">
      <div className="text-box-3">
        <div className="text-left">
          <h2>Skills.</h2>
          <h3>GREAT DESIGN MATTERS.</h3>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur a nisl a tincidunt. Etiam placerat velit sem, vel suscipit augue fermentum nec. Sociis natoque penatibus et magnis dis.</h4>
          <h5>Parturient montes, nascetur ridiculus mus. Maecenas ac finibus turpis. Vivamus et elit in leo pretium pharetra. Sed lobortis urna turpis, id ultricies dolor pharetra ac. Proin suscipit odio non libero ullamcorper, sit amet tincidunt lacus porta. Aenean sodales lectus ex, non sagittis nibh ultricies at. Aliquam nec dolor posuere, vulputate mauris at, fermentum Donec ligula metus, hendrerit at malesuada vel, facilisis sit amet dui. Aliquam erat volutpat. Nulla eget ornare dolor. Pellentesque convallis dui ante, eu pretium ipsum bibendum fermentum. Proin dui arcu, mattis non ultricies ac, pellentesque eget ipsum. Nullam tincidunt orci in interdum facilisis. Vestibulum eu neque et mauris vestibulum pretium vel vitae enim. Vestibulum id ipsum risus. Suspendisse lectus tortor, pretium ut orci vitae, mollis iaculis risus.</h5>
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


    <style jsx>{`
      .cover {
        position: relative;
        min-height: 100vh;
        background: transparent url(https://avada.theme-fusion.com/resume/wp-content/uploads/sites/66/2016/07/home_bg.jpg) no-repeat center center;
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
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
        font-family: "Raleway";
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
        height: 100vh;
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
        background: url(https://avada.theme-fusion.com/resume/wp-content/uploads/sites/66/2016/07/avada-resume-about.jpg) no-repeat center center;
        background-size: cover;
        float: right;
        width 40%;
        height: 100%;
      }
      .text-box-2 {
        box-sizing: border-box;
        background: #FFF; 
        float: right;
        width 60%;
        height: 100%;
      }
      .pic-box-2 {
        box-sizing: border-box;
        background: url(https://avada.theme-fusion.com/resume/wp-content/uploads/sites/66/2016/07/works_bg_900x1600.jpg) no-repeat center center;
        background-size: cover;
        float: left;
        width: 40%;
        height: 100%;
      }
      .text-box-3 {
        box-sizing: border-box;
        background: #FFF;
        float: left;
        width: 60%;
        height: 100%;
      }
      .pic-box-3 {
        box-sizing: border-box;
        background: url(https://avada.theme-fusion.com/resume/wp-content/uploads/sites/66/2016/07/experience_bg.jpg) no-repeat center center;
        background-size: cover;
        float: right;
        width 40%;
        height: 100%;
      }
    `}</style>
  </Layout>
);

export default Homepage;