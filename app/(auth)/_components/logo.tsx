import Image from "next/image";
import { Poppins } from 'next/font/google';

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '700'],
});

export function Logo() {
    return (
        <div className="flex flex-col items-center gap-y-4">
            <div className="bg-blue-600 rounded-full p-1">
                <Image src={'/rakita-logo-white.png'} alt='Studio Rakita Livestream' title='Studio Rakita Livestream' height={80} width='80' />
            </div>
            <div className={cn(
                'flex flex-col items-center',
                font.className
            )}>
                <p className='text-xl font-semibold'>
                    Studio Rakita Livestream
                </p>
                <p className='text-sm text-muted-foreground'>
                    Gledaj uživo
                </p>
            </div>
        </div>
    )
}