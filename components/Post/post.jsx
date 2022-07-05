import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/Post.module.scss";

const Post = ({ src, title, excerpt, slug }) => {
  return (
    <div className={styles.post}>
      <div>
        <Image src={src} alt="" layout="responsive" width={100} height={50} />
      </div>

      <div className={styles.text}>
        <h3>{title}</h3>

        <p>{excerpt}</p>

        <Link href={`/blog/${slug}`}>
          <a>Read More</a>
        </Link>
      </div>
    </div>
  );
};

export default Post;
