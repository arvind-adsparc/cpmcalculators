import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Post.module.scss";

const Post = ({ src, title, excerpt, slug, tag }) => {
  return (
    <div className={styles.post}>
      <div>
        <Link href={`/blog/${slug}`}>
          <Image
            className={styles.imageDiv}
            src={src}
            alt=""
            layout="responsive"
            width={100}
            height={50}
          />
        </Link>
      </div>

      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.tag}>{tag}</div>
          <h3>{title}</h3>

          <p>{excerpt}</p>
        </div>

        <div className={styles.readMore}>
          <Link href={`/blog/${slug}`}>
            <a>Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
