import Head from "next/head";

const Seo = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={image} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
