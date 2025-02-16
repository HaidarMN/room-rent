const TermsConditions = () => {
  return (
    <section className="container flex flex-col gap-8 py-8">
      <h1 className="title">Terms And Conditions</h1>

      <div className="flex flex-col gap-4">
        <p>
          By accessing RoomRent, you agree to these Terms & Conditions. If you
          do not agree, do not use the app. You must be at least 18 years old to
          use RoomRent and are responsible for maintaining the confidentiality
          of your account credentials. You agree not to use RoomRent for illegal
          or fraudulent activities.
        </p>
        <p>
          Users listing properties must provide accurate and legal rental
          information. Tenants and landlords are responsible for verifying the
          legitimacy of listings. RoomRent is not liable for any disputes
          between users. Payment processing is handled through third-party
          services, and RoomRent is not responsible for transaction disputes
          between users.
        </p>
        <p>
          We reserve the right to suspend or terminate accounts that violate
          these terms. RoomRent is not responsible for any damages, losses, or
          disputes arising from the use of our platform. We may modify these
          terms at any time, and continued use of RoomRent constitutes
          acceptance of the new terms. For inquiries, contact us at{" "}
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

export default TermsConditions;
