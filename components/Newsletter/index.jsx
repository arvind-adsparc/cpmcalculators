import styles from "../../styles/Newsletter.module.scss";
import NewsletterForm from "../Forms/newsletter";

const Newsletter = () => {
  return (
    <section className={styles.newsletterContainer}>
      <div className="container">
        <div>
          <h2>Subscribe to our newsletter & Stay Updated.</h2>
        </div>

        <div>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
