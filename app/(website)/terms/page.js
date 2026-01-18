import { legal } from '@/lib/terms-and-conditions';
import BlogRenderer from '@/components/blog-renderer';

export default function TermsPage() {
  const termsContent = legal.find((item) => item.id === 'terms-and-conditions');
  return (
    <div>
      <BlogRenderer blog={termsContent} withCTA={false} withInfo={false} />
    </div>
  );
}
