import Link from 'next/link';
import Layout from '../components/Layout';

const Homepage = () => (
  <Layout title="Homepage">
    <div className="cover">
      <div className="hello">
        <h1>CLEAR THINKING.</h1>
        <h1>MADE SIMPLE.</h1>
        <div>Rhuwell Samano - Full Stack Software Engineer</div>
        <Link href="/about">
          <a className="view-more">LEARN MORE</a>
        </Link>
      </div>
    </div>
    <div className="latest-work">
      <h2>Latest Work</h2>
  
      <div className="">
        <Link href="/projects">
          <a className="view-more">View All</a>
        </Link>
      </div>
    </div>
    <style jsx>{`
      .cover {
        position: relative;
        min-height: 100vh;
        background: transparent url(/static/cover.jpg) no-repeat center center;
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        text-align: left;
      }
      .hello {
        font-family: 'Galano';
        color: #FFF;
        display: inline-block;
        position: relative;
        top: 30px;
        padding: 30px;
        padding-left: 80px;
        padding-right: 80px;
        opacity: 100%;

      }
      .hello h1 {
        font-family: 'Galano';
        color: #FFF;
        font-size: 82px;
        margin: 0 0 0px 0;
      }
      a.view-more {
        text-transform: uppercase;
        font-size: 16px;
      }
      .latest-work {
        text-align: center;
        padding: 30px 0;
        margin-bottom: 60px;
      }
      @media (max-width: 480px) {
        .hello {
          font-family: 'Galano Grotesque';
          font-size: 18px;
          padding: 20px;
        }
        h1 {
          font-size: 28px;
        }
      }
    `}</style>
  </Layout>
);

export default Homepage;