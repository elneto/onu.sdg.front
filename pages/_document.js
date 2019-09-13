import Document, { Html, Head, Main, NextScript } from 'next/document'

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
    if (process.env.NODE_ENV === 'development') {
      return (
        <Html>
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
    return (
      <Html>
        {this._head()}
        <body>
          <Main />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
