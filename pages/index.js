import AboutCPM from "../components/AboutCPM";
import AdMetrics from "../components/AdMetrics";
import CTABar from "../components/CTABar";
import HeroHome from "../components/Hero/Home";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import RecentArticle from "../components/RecentArticle";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="CPM Calculators | Home"
        description="Designed explicitly for programmatic media planners and ad ops teams for their media planning and optimization. Get granular reporting, AI-driven data, partner-specific estimation of programmatic technology, and inventory costs instantly. With us, make your every impression count!"
      />
      <Layout>
        <section className="page">
          <HeroHome />
          <AboutCPM />
          <CTABar />
          <AdMetrics />
          <Newsletter />
          <RecentArticle />
        </section>
      </Layout>
    </>
  );
}
