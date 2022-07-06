import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/BlogPage.module.scss";
import Newsletter from "../../components/Newsletter";

const BlogPage = ({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) => {
  return (
    <Layout>
      <div className={styles.blogContainer}>
        <div className="container">
          <h1 className={styles.title}>{title}</h1>

          <div className={styles.imageDiv}>
            <Image src={cover_image} alt={title} width={900} height={500} />
          </div>

          <div className={styles.group}>
            <div className={styles.content}>
              <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </div>
            <div className="sidebar"></div>
          </div>
        </div>
      </div>
      <Newsletter />
    </Layout>
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
