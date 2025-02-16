const PrivacyPolicy = () => {
  return (
    <section className="container flex flex-col gap-8 py-8">
      <h1 className="title">Privacy Policy</h1>

      <div className="flex flex-col gap-4">
        <p>
          Welcome to RoomRent! We are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you use our mobile or web application.
        </p>
        <p>
          We collect personal information such as your name, email address,
          phone number, and payment details. Additionally, we gather usage data
          including IP address, device information, and browsing behavior within
          the app. We also use cookies and tracking technologies to enhance user
          experience and gather analytical data.
        </p>
        <p>
          Your information is used to provide and maintain our services, process
          transactions securely, communicate updates, promotions, and customer
          support, and analyze user behavior to improve RoomRent. We share your
          information with service providers for payment processing and app
          functionality, legal authorities if required by law, and third-party
          analytics and advertising partners.
        </p>
        <p>
          We implement security measures to protect your data but cannot
          guarantee absolute security. You have the right to access, correct, or
          delete your personal data. Contact us at{" "}
          <a
            href="mailto:help-roomrent@yopmail.com"
            className="text-primary hover:text-accent"
          >
            help-roomrent@yopmail.com
          </a>{" "}
          for requests. We may update this policy and will notify users of
          significant changes. If you have any questions, contact us at{" "}
          <a
            href="mailto:help-roomrent@yopmail.com"
            className="text-primary hover:text-accent"
          >
            help-roomrent@yopmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
