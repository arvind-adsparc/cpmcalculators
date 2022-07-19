import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import styles from "../../styles/socialShare.module.scss";

const SocialShare = (url) => {
  return (
    <div className={styles.socialContainer}>
      <div className={styles.title}>Share on:</div>

      <div className={styles.btns}>
        <FacebookShareButton url={url}>
          <FacebookIcon size={42} round />
        </FacebookShareButton>

        <TwitterShareButton url={url}>
          <TwitterIcon size={42} round />
        </TwitterShareButton>

        <LinkedinShareButton url={url}>
          <LinkedinIcon size={42} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default SocialShare;
