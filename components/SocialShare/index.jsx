import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import { useState, useEffect } from "react";
import styles from "../../styles/socialShare.module.scss";

const SocialShare = () => {
  const [pageURL, setPageURL] = useState("");

  useEffect(() => {
    setPageURL(window.location.href);
  }, []);
  return (
    <div className={styles.socialContainer}>
      <div className={styles.title}>Share on:</div>

      <div className={styles.btns}>
        <FacebookShareButton url={pageURL} title="CPM Calculators | Ad Metrics">
          <FacebookIcon size={42} round />
        </FacebookShareButton>

        <TwitterShareButton url={pageURL} title="CPM Calculators | Ad Metrics">
          <TwitterIcon size={42} round />
        </TwitterShareButton>

        <LinkedinShareButton url={pageURL} title="CPM Calculators | Ad Metrics">
          <LinkedinIcon size={42} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default SocialShare;
