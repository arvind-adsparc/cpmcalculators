import Head from "next/head";

const Seo = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
