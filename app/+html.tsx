import { Html, Head, Main, NextScript } from "expo-router/html";

export default function HtmlRoot() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/icon-512.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}