import Link from 'next/link';
import LoginForm from './login-form';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <LoginForm />
      <Link
        href="/"
        className="absolute top-4 left-4 text-sm underline capitalize"
      >
        Back to site
      </Link>
    </div>
  );
}
