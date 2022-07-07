import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import CTABar from "../../components/CTABar";
import AdMetrics from "../../components/AdMetrics";
import Newsletter from "../../components/Newsletter";
import RecentArticle from "../../components/RecentArticle";
import AbouteCPM from "../../components/About/abouteCPM";
import AbouteEPMV from "../../components/About/aboutEPMV";

const eCPMCalculator = () => {
  return (
    <>
      <Seo title="EPMV Calculator - CPM Calculators" description="" />

      <Layout>
        <section className="page">
          <AbouteEPMV />

          <CTABar
            text="AdSparc’s Result-driven Approach and Cross Channel Monetization Solution empower you with Better User Engagement & Amplified Revenue Generation."
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
