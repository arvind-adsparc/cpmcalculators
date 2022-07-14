import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/AdMetrics.module.scss";

const data = [
  {
    id: "Cost Per Click (CPC)",
    title: "Cost Per Click (CPC)",
    src: "https://res.cloudinary.com/dqove2qhg/image/upload/v1656073535/CPM%20Calculators/cpc_qmo9mc.svg",
    link: "/ad-metrics/cost-per-click",
  },
  {
    id: "EPMV",
    title: "EPMV",
    src: "https://res.cloudinary.com/dqove2qhg/image/upload/v1656073535/CPM%20Calculators/epmv_zk5b7c.svg",
    link: "/ad-metrics/epmv",
  },
  {
    id: "eCPM",
    title: "eCPM",
    src: "https://res.cloudinary.com/dqove2qhg/image/upload/v1656073535/CPM%20Calculators/eCPM_ryd3ey.svg",
    link: "/ad-metrics/ecpm",
  },
  {
    id: "Page RPM",
    title: "Page RPM",
    src: "https://res.cloudinary.com/dqove2qhg/image/upload/v1656073535/CPM%20Calculators/rpm_tararq.svg",
    link: "/ad-metrics/page-rpm",
  },
  {
    id: "Cost Per Mile (CPM)",
    title: "Cost Per Mile (CPM)",
    src: "https://res.cloudinary.com/dqove2qhg/image/upload/v1656073535/CPM%20Calculators/cpm_b4oami.svg",
    link: "/ad-metrics/cost-per-mile",
  },
  {
    id: "Ad  Viewability",
    title: "Ad  Viewability",
    src: "https://res.cloudinary.com/dqove2qhg/image/upload/v1656073542/CPM%20Calculators/ad_viewability_vamhbc.svg",
    link: "/ad-metrics/ad-viewability",
  },
  {
    id: "Ad  Impressions",
    title: "Ad  Impressions",
    src: "https://res.cloudinary.com/dqove2qhg/image/upload/v1656073542/CPM%20Calculators/ad_impressions_ld5vyt.svg",
    link: "/ad-metrics/ad-impressions",
  },
];

const AdMetrics = () => {
  return (
    <section className={styles.adMetrics}>
      <div className="container">
        <h2>Ad Metrics</h2>

        <div className={styles.grid}>
          {data.map((info) => {
            return (
              <div key={info.id} className={styles.metric}>
                <Link href={info.link}>
                  <a>
                    <div className={styles.imageDiv}>
                      <Image
                        src={info.src}
                        alt=""
                        width={100}
                        height={70}
                        layout="responsive"
                      />
                    </div>

                    <div className={styles.text}>{info.title}</div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdMetrics;
