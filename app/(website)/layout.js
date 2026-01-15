import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Pathchecker from '@/components/Pathchecker';

export default function SiteLayout({ children }) {
  return (
    <>
      <Header />

      {children}

      <Pathchecker excludedPath="/contact">
        <ContactForm />
      </Pathchecker>

      <Footer />
    </>
  );
}
