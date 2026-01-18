import { legal } from '@/lib/terms-and-conditions';
import BlogRenderer from '@/components/blog-renderer';

export default function TermsPage() {
  const privacyContent = legal.find((item) => item.id === 'privacy-policy');
  return (
    <div>
      <BlogRenderer blog={privacyContent} withCTA={false} withInfo={false} />
    </div>
  );
}
