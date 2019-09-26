import Document, { Html, Head, Main, NextScript } from 'next/document'

const isDev = process.env.NODE_ENV === 'development';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }

  _head() {
    return (
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <title>un.sdg</title>
        <link rel="stylesheet" href="/static/bundle.css" />
      </head>
    );
  }

  render() {
    if (isDev) {
      return (
        <Html>
          <Head />
          <body>
            <div id='un-sdg'>
              <Main />
              <NextScript />
            </div>
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src='/_next/static/un-sdg.js' />
          </body>
        </Html>
      );
    }
    return (
      <Html>
        {this._head()}
        <body>
          <div id='un-sdg'>
            <Main />
          </div>
          <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
          <script src='/static/un-sdg.js' />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
