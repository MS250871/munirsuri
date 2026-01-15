'use client';
import { usePathname } from 'next/navigation';

const Pathchecker = ({ children, excludedPath }) => {
  const pathname = usePathname();

  if (pathname === excludedPath) {
    return null;
  }
  return children;
};

export default Pathchecker;
