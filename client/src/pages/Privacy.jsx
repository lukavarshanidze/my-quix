import React from "react";
import styles from "../styles/privacy.module.scss";

const PrivacyPolicy = () => {
  return (
    <div className={`${styles.privacy_policy}`}>
      <header>
        <h1>Quixfye Store</h1>
        <p>Privacy Policy</p>
      </header>

      <section>
        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as your name,
          address, and email address when you make a purchase or sign up for our
          newsletter.
        </p>

        {/* More divs and details can be added as needed */}

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to process your orders, provide
          customer support, and send you updates and promotional offers.
        </p>

        <h2>3. Data Sharing</h2>
        <p>
          We do not sell or rent your personal information to third parties.
          However, we may share your information with trusted partners and
          service providers who assist us in conducting our business, such as
          payment processors and shipping companies.
        </p>

        <h2>4. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your
          browsing experience on our website. By continuing to use our site, you
          consent to the use of these technologies. You can manage your cookie
          preferences through your browser settings.
        </p>

        <h2>5. Security Measures</h2>
        <p>
          We take the security of your personal information seriously. Our
          website employs industry-standard security measures to protect against
          unauthorized access, alteration, disclosure, or destruction of your
          data.
        </p>

        <h2>6. User Choices and Controls</h2>
        <p>
          You have the right to control the personal information you provide to
          us. You can update your account settings and communication preferences
          to manage the information you receive from us.
        </p>

        <h2>7. Policy Changes</h2>
        <p>
          We may update our privacy policy to reflect changes in our information
          practices. Any updates will be posted on this page, and the date of
          the last update will be indicated.
        </p>
        {/* More divs and details can be added as needed */}
      </section>

      <footer>
        <p>Last updated: [Date]</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
