import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  
  render() {
    return (
      <html>
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
          <link href='//cdn.jsdelivr.net/npm/devicons@1.8.0/css/devicons.min.css' rel='stylesheet' />
          <link
            rel="preload"
            href="/fonts/Varta.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Raleway.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Larsseit.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Galano.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/HomepageBaukasten-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Cocogoose.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/CarreNoir.otf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}