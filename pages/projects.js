import Layout from '../components/Layout';

const Projects = () => (
    <Layout title="Projects">
      <div className="cover">
        <div className="hello">
          <h1>Portfolio Projects</h1>
        </div>
      </div>
      <style jsx>{`
      .cover {
        position: relative;
        min-height: 220px;
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
        padding: 0px;
        padding-left: 80px;
        padding-right: 80px;
        opacity: 100%;
        box-shadow: 
          12px 12px 12px 0 rgba(0,0,0,0.5)
      }
    `}</style>
    </Layout>
  );
  
  export default Projects;