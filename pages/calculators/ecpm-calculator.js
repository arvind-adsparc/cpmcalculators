import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import CTABar from "../../components/CTABar";
import AdMetrics from "../../components/AdMetrics";
import Newsletter from "../../components/Newsletter";
import RecentArticle from "../../components/RecentArticle";
import AbouteCPM from "../../components/About/abouteCPM";
import DefaultHome from "../../components/Hero";

const eCPMCalculator = () => {
  return (
    <>
      <Seo title="eCPM Calculator - CPM Calculators" description="" />

      <Layout>
        <section className="page">
          <DefaultHome
            name="eCPM"
            heroImage="https://res.cloudinary.com/dqove2qhg/image/upload/v1656073535/CPM%20Calculators/eCPM_ryd3ey.svg"
          />
          <AbouteCPM />

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
            text="Ready to get Started?"
            btnText="Supercharge your  CPMs"
            btnColor="pink"
          />
        </section>
      </Layout>
    </>
  );
};

export default eCPMCalculator;
