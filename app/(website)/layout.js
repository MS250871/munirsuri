import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Pathchecker from '@/components/Pathchecker';

export default function SiteLayout({ children }) {
  return (
    <div className="pt-[100px]">
      <Header />

      {children}

      <Pathchecker excludedPath="/contact">
        <ContactForm showInfo />
      </Pathchecker>

      <Footer />
    </div>
  );
}
