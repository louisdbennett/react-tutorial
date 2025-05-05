import { Raleway } from 'next/font/google';
import { Lusitana } from 'next/font/google';
import localFont from 'next/font/local';
 
export const raleway = Raleway({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin']
});

export const museo = localFont({
    src: './fonts/museo.ttf'
})