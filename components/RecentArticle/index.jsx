import Image from "next/image";

import styles from "../../styles/RecentArticle.module.scss";

const data = [
  {
    id: "What is Ad Fill Rate?)",
    title: "What is Ad Fill Rate?",
    src: "https://res.cloudinary.com/dqove2qhg/image/upload/v1656409762/CPM%20Calculators/Ad-Fill-Rate_fpmgvq.jpg",
    para: "Introduction Modern-day websites are attractive digital constructs that relay pertinent information to the visitors while maximizing their user experience. The primary objective …",
  },
  {
    id: "What is CPV?",
    title: "What is CPV?",
    src: "https://res.cloudinary.com/dqove2qhg/image/upload/v1656409745/CPM%20Calculators/What-is-CPV_klbbkh.jpg",
    para: "Introduction Online advertising is a dynamic part of the digital world. Advertising comes in many shapes and forms yet always has to …",
  },
  {
    id: "What is CPC?",
    title: "What is CPC?",
    src: "https://res.cloudinary.com/dqove2qhg/image/upload/v1656919044/CPM%20Calculators/what-is-cpc_jzmutv.jpg",
    para: "Introduction Advertising is a prominent part of Digital Marketing. Whether you’re running your website or trying to increase your outreach on a social media platform,",
  },
];

const RecentArticle = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className="container">
        <h2>Recent Articles</h2>

        <div className={styles.articles}>
          {data.map((info) => {
            return (
              <div key={info.id} className={styles.article}>
                <div>
                  <Image
                    src={info.src}
                    alt=""
                    layout="responsive"
                    width={100}
                    height={50}
                  />
                </div>
                <div className={styles.text}>
                  <h3>{info.title}</h3>

                  <p>{info.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentArticle;
