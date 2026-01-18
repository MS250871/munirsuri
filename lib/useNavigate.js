'use client';

import { useRouter } from 'next/navigation';
import { useNavigation } from '@/stores/useNavigation';

export function useNavigate() {
  const router = useRouter();
  const start = useNavigation((s) => s.start);

  return (href) => {
    start(href);
    router.push(href);
  };
}
