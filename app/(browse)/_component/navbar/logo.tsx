import { Poppins } from 'next/font/google';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const font = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '700'],
});

// components
import JustLogo from '@/app/custom-components/JustLogo';
import LogoText from '@/app/custom-components/LogoText';

export function Logo() {
  return (
    <Link href={'/'}>
      <div className="hidden md:flex items-center gap-x-4 hover:opacity-75 transition">
        <JustLogo />
        <div className={cn(font.className)}>
          <LogoText />
        </div>
      </div>
    </Link>
  );
}
