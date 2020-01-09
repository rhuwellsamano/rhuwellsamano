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
        font-family: 'Varta';
        src: url('/fonts/Varta.ttf'); 
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'Raleway';
        src: url('/fonts/Raleway.ttf'); 
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
        overflow-x: hidden; 
      }
      body {
        margin: 0;
        font-size: 18px;
        line-height: 1.8;
        background: #f1f1f1;
        color: #454545;
        font-family: 'Varta';
        text-rendering: optimizeLegibility;
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