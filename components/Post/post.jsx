import Image from "next/image";
import styles from "../../styles/Post.module.scss";

const Post = ({ src, title, excerpt }) => {
  return (
    <div className={styles.post}>
      <div>
        <Image src={src} alt="" layout="responsive" width={100} height={50} />
      </div>

      <div className={styles.text}>
        <h3>{title}</h3>

        <p>{excerpt}</p>
      </div>
    </div>
  );
};

export default Post;
