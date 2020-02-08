import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = props => (
  <div className="site-wrapper">
          <Head>
      <title>
        {props.title ? `${props.title} | ` : ''}
        Rhuwell Samano
      </title>
      {props.description ? <meta name="description" content={props.description} /> : null}
    </Head>

    <Header />

    <div className="content-wrapper">{props.children}</div>

    <Footer />

    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      @font-face {
        font-family: 'devicons';
        src: url("../fonts/devicons.eot?xqxft6");
        src: url("../fonts/devicons.eot?#iefixxqxft6") format("embedded-opentype"), url("../fonts/devicons.woff?xqxft6") format("woff"), url("../fonts/devicons.ttf?xqxft6") format("truetype"), url("../fonts/devicons.svg?xqxft6#devicons") format("svg");
        font-weight: normal;
        font-style: normal;
      }      
      @font-face {
        font-family: 'Varta';
        src: url('/fonts/Varta.ttf'); 
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'HomepageBaukasten-Bold';
        src: url('/fonts/HomepageBaukasten-Bold.ttf'); 
        font-style: semibold;
        font-display: swap;
      }
      @font-face {
        font-family: 'Larsseit';
        src: url('/fonts/Larsseit.ttf'); 
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'Galano';
        src: url('/fonts/Galano.otf'); 
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'Cocogoose';
        src: url('/fonts/Cocogoose.ttf'); 
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'CarreNoir';
        src: url('/fonts/CarreNoir.otf'); 
        font-display: swap;
      }
      html {
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        scroll-behavior: smooth;
        overflow-x: hidden; 
      }
      body {
        margin: 0;
        padding: 0;
        font-size: 18px;
        line-height: 1.8;
        background: #f1f1f1;
        color: #454545;
        font-family: 'Varta';
        text-rendering: optimizeLegibility;
        overflow-x: hidden; 
      }



      a {
        color: #FF7519;
        text-decoration: none;
      }

      a:hover {
        color: #FF6600;
      }
      p {
        margin: 0 0 10px;
      }
      img {
        max-width: 100%;
        overflow-x: hidden; 
      }
      ul {
        margin-left: 0px;
        padding-left: 5px;
      }
      li {
        text-align: left;
      }

      /* Layout */

      .content-wrapper {
        min-height: 600px;
        text-align: center;
      }
    `}</style>
  </div>
);

export default Layout;