import Image from "next/image";
import NewsletterForm from "../Forms/newsletter";
import styles from "../../styles/Newsletter.module.scss";

const Newsletter = () => {
  return (
    <section className={styles.newsletterContainer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.formContainer}>
            <h2>Subscribe to the latest AdTech Blogs and Industry Insights.</h2>
            <NewsletterForm />
          </div>

          <div className={styles.imageContainer}>
            <Image
              src="https://res.cloudinary.com/dqove2qhg/image/upload/v1656425370/CPM%20Calculators/Subscribe-image_mzeumh.svg"
              alt=""
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
