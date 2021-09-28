/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class Mydocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Ecommerce with Next" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          />
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
          <script src="https://kit.fontawesome.com/a076d05399.js"></script>
          <script
            src={`https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}`}
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Mydocument;
