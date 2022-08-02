import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import CTABar from "../../components/CTABar";
import AdMetrics from "../../components/AdMetrics";
import Newsletter from "../../components/Newsletter";
import RecentArticle from "../../components/RecentArticle";
import AboutRPM from "../../components/About/aboutRPM";
import DefaultHome from "../../components/Hero";

const RPMCalculator = () => {
  return (
    <>
      <Seo title="RPM Calculators - CPM Calculators" description="" />

      <Layout>
        <section className="page">
          <DefaultHome
            name="RPM"
            heroImage="https://res.cloudinary.com/dqove2qhg/image/upload/v1656073535/CPM%20Calculators/rpm_tararq.svg"
          />
          <AboutRPM />

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
};

export default RPMCalculator;
