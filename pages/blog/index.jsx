import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import sortBydate from "../../utilis/sortBydate";
import Post from "../../components/Post/post";
import styles from "../../styles/ImproveRevenue.module.scss";

const ImproveRevenue = ({ posts }) => {
  return (
    <>
      <Seo title="Improve Revenue | CPM Calculators" description="" />

      <Layout>
        <section className={styles.improveRevenue}>
          <div className="container">
            <div className={styles.posts}>
              {posts.map((post) => (
                <Post
                  key={post.frontmatter.id}
                  {...post.frontmatter}
                  slug={post.slug}
                />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortBydate),
    },
  };
}
export default ImproveRevenue;
