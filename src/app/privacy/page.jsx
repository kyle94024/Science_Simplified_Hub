import LegalPage from "@/components/site/LegalPage";
import { site } from "@/data/site";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Science Simplified collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="August 17, 2026">
      <p>
        Welcome to the network of websites and services provided by Science
        Simplified (&ldquo;Science Simplified,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;we&rdquo;). This Privacy Policy explains how we collect, use, and
        protect your information when you visit our website.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We collect various types of information to provide and improve our
        services. This may include personal data such as your name, email
        address, and other contact details, as well as usage data related to
        your interactions with our site.
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        The information we collect is used to improve our website, provide
        better content, and offer personalized experiences. We may also use it
        for communication purposes, including providing news and updates, if you
        have signed up for a user account on one of our community sites.
      </p>

      <h2>Data Protection</h2>
      <p>
        We prioritize the security of your data and use various technical
        measures to protect it. However, please note that no method of
        electronic storage is 100% secure, and we cannot guarantee absolute
        security.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Our website may contain links to third-party services that are not
        operated by us. We are not responsible for the privacy practices of
        these services, and we encourage you to read their privacy policies.
      </p>

      <h2>Your Rights</h2>
      <p>
        You have the right to access, correct, or delete any personal
        information we have collected about you. To make a request, please
        email us at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page, and we encourage you to review this policy
        periodically to stay informed about how we are protecting your
        information.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or your data, please
        contact us at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
