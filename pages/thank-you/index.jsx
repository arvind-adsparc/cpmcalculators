import ThankYouHero from "../../components/Hero/ThankYou";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

const ThankYou = () => {
  return (
    <>
      <Seo
        title="CPM Calculators | Home"
        description="Designed explicitly for programmatic media planners and ad ops teams for their media planning and optimization. Get granular reporting, AI-driven data, partner-specific estimation of programmatic technology, and inventory costs instantly. With us, make your every impression count!"
      />

      <Layout>
        <section className="page">
          <ThankYouHero />
        </section>
      </Layout>
    </>
  );
};

export default ThankYou;
