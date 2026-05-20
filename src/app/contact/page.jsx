import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import { createPageMetadata } from "@/lib/seo";

const ContactPage = () => {
  return (
    <>
      <ContactHero/>
      <ContactForm/>
    </>
  );
};

export default ContactPage;

export async function generateMetadata() {
  return createPageMetadata("/contact");
}
