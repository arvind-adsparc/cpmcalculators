import About from "../components/About";
import AdMetrics from "../components/AdMetrics";
import CTABar from "../components/CTABar";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import RecentArticle from "../components/RecentArticle";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="CPM Calculators | Home"
        image={
          "https://res.cloudinary.com/dqove2qhg/image/upload/v1656426401/CPM%20Calculators/hero-image_ndouct.svg"
        }
        description="Designed explicitly for programmatic media planners and ad ops teams for their media planning and optimization. Get granular reporting, AI-driven data, partner-specific estimation of programmatic technology, and inventory costs instantly. With us, make your every impression count!"
      />
      <Layout>
        <section className="page">
          <Hero name="CPM" />
          <About />
          <CTABar
            text="AdSparc’s result-driven approach and cross-channel monetization solution empower you with better user engagement & amplified revenue generation."
            // btnText="Get Free Revenue Estimate"
            btnText="Get Started"
            btnColor="pink"
          />
          <AdMetrics />
          <Newsletter />
          <RecentArticle />
          <CTABar
            text="Want to increase your monthly revenue and yield by 30%? AdSparc empowers publishers to maximize their revenue by offering next-generation monetization solutions.  We are an official Google MCM Partner."
            btnText="Supercharge your  CPMs"
            btnColor="pink"
          />
        </section>
      </Layout>
    </>
  );
}
