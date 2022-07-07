import styles from "../../styles/RecentArticle.module.scss";
import Post from "../Post/post";

const data = [
  {
    id: "What is Ad Fill Rate?)",
    title: "What is Ad Fill Rate?",
    slug: "what-is-ad-fill-rate/",
    src: "https://res.cloudinary.com/dqove2qhg/image/upload/v1656409762/CPM%20Calculators/Ad-Fill-Rate_fpmgvq.jpg",
    excerpt:
      "Introduction Modern-day websites are attractive digital constructs that relay pertinent information to the visitors while maximizing their user experience. The primary objective …",
  },
  {
    id: "What is CPV?",
    title: "What is CPV?",
    slug: "what-is-cpv",
    src: "https://res.cloudinary.com/dqove2qhg/image/upload/v1656409745/CPM%20Calculators/What-is-CPV_klbbkh.jpg",
    excerpt:
      "Introduction Online advertising is a dynamic part of the digital world. Advertising comes in many shapes and forms yet always has to …",
  },
  {
    id: "What is CPC?",
    title: "What is CPC?",
    slug: "what-is-cpc",
    src: "https://res.cloudinary.com/dqove2qhg/image/upload/v1656919044/CPM%20Calculators/what-is-cpc_jzmutv.jpg",
    excerpt:
      "Introduction Advertising is a prominent part of Digital Marketing. Whether you’re running your website or trying to increase your outreach on a social media platform,",
  },
];

const RecentArticle = () => {
  return (
    <section className={styles.sectionContainer}>
      <div className="container">
        <h2>Recent Articles</h2>

        <div className={styles.articles}>
          {data.map((post) => (
            <Post key={post.id} {...post} slug={post.slug} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentArticle;
