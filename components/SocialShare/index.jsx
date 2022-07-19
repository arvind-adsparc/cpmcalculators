import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const SocialShare = (url) => {
  return (
    <div>
      <div>Share on:</div>

      <div>
        <FacebookShareButton url={url}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton url={url}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <LinkedinShareButton url={url}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default SocialShare;
