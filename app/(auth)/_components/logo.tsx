import { Poppins } from 'next/font/google';

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
    <div className="flex flex-col items-center gap-y-4">
      <JustLogo />
      <div className={cn('flex flex-col items-center', font.className)}>
        <LogoText />
      </div>
    </div>
  );
}
