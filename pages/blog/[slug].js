import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/BlogPage.module.scss";
import Newsletter from "../../components/Newsletter";
import Seo from "../../components/Seo";
import RecentArticle from "../../components/RecentArticle";
import SocialShare from "../../components/SocialShare";

const BlogPage = ({
  frontmatter: { title, cover_image, excerpt },
  content,
}) => {
  return (
    <>
      <Seo
        title={`${title} |   CPM Calculators `}
        description={excerpt}
        image={cover_image}
      />

      <Layout>
        <div className={styles.blogContainer}>
          <div className="container">
            <h1 className={styles.title}>{title}</h1>

            <div className={styles.imageDiv}>
              <Image src={cover_image} alt={title} width={900} height={500} />
            </div>

            <div className={styles.group}>
              <div className={styles.content}>
                <div
                  dangerouslySetInnerHTML={{ __html: marked(content) }}
                ></div>
              </div>
            </div>
          </div>

          <div className={styles.sidebar}>
            <a
              href="https://adsparc.com/contact-us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://res.cloudinary.com/dqove2qhg/image/upload/v1659501675/CPM%20Calculators/cpm_ad_gif_m3necr.gif"
                alt=""
                layout="responsive"
              />
            </a>
          </div>
        </div>

        <SocialShare />

        <RecentArticle />
        <Newsletter />
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

export default BlogPage;
