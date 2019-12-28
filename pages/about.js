import Layout from '../components/Layout';

const About = () => (
  <Layout title="About Me">
    <div className="cover">
      <div className="hello">
        <h1>About Me</h1>
        <ul className="my-info">
          <li>
            <span className="name">Rhuwell Samano</span>
          </li>
          <li>Full Stack Software Engineer</li>
          <li>New York, NY</li>
          <li>
            <a href="mailto:rhuwell.samano@gmail.com">rhuwell.samano@gmail.com</a>
          </li>
          <li>
            SOCIAL ICONS PLACEHOLDER
          </li>
        </ul>
      </div>
    </div>
    <div className="about-text">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut est euismod, iaculis ante efficitur, sodales
        nisl. Nulla non orci vitae nibh ullamcorper finibus. Morbi a nisl tempor, sodales ex quis, aliquet neque. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p>
        Praesent gravida a diam ut faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Sed sed nibh a ipsum sagittis finibus ac in magna. Curabitur id mauris quis nulla commodo
        tristique.
      </p>
      <p>
        Nunc eu mi et justo sodales vehicula. Vestibulum velit erat, tincidunt sed tortor id, viverra egestas felis.
        Cras in ullamcorper ex. Etiam diam lacus, interdum sed rhoncus vel, ultricies ut nisi. Nam ut orci at ante
        auctor mollis. Phasellus eget augue ac nibh vestibulum pellentesque. Nulla enim augue, placerat id malesuada at,
        maximus sed tortor.
      </p>
    </div>
    <style jsx>{`
      .cover {
        position: relative;
        min-height: 445px;
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
        padding-bottom: 0px;
        opacity: 100%;
        box-shadow: 
          12px 12px 12px 0 rgba(0,0,0,0.5)
      }
      .hello h1 {
        margin: 0 0 0px 0;
      }
      .my-info {
        margin: 0 0 100px 0;
        padding: 0;
        list-style: none;
        font-size: 18px;
      }
      .name {
        font-weight: 700;
        font-size: 24px;
      }
      .about-text {
        color: #777;
        text-align: left;
        max-width: 800px;
        margin: 0 auto 100px;
        padding: 40px;
      }
      img {
        float: right;
        margin: 10px 0 20px 20px;
      }
      @media (max-width: 600px) {
        .about-text img {
          float: none;
          display: block;
          margin: 0 auto 30px;
        }
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

export default About;