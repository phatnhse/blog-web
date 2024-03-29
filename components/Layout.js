import Head from "next/head";

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <link rel="shortcut icon" href="/logo.png" />
        <title>{pageTitle}</title>
      </Head>
      <main>
        <div className="content">{children}</div>
      </main>
    </>
  );
}
