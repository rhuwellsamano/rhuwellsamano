import Link from 'next/link';
import Layout from '../components/Layout';

const Homepage = () => (
  <Layout title="Homepage">
    <div className="cover">
      <div className="hello">
        <h1>Rhuwell Samano</h1>
        <div>Full Stack Software Engineer</div>
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
        min-height: 275px;
        background: transparent url(/static/cover.jpg) no-repeat center center;
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        text-align: center;
      }
      .hello {
        display: inline-block;
        position: relative;
        top: 30px;
        background: #fff;
        border-radius: 40px;
        padding: 30px;
        padding-left: 80px;
        padding-right: 80px;
        opacity: 100%;
        box-shadow: 
        12px 12px 12px 0 rgba(0,0,0,0.5)
      }
      .hello h1 {
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