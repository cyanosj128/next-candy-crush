import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next Candy Crush',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={` bg-[#505050] text-black`}>
      <body
        className={'flex h-[100dvh] select-none items-center justify-center'}
        style={{ minHeight: '-webkit-fill-available' }}
      >
        <main
          className={`flex flex-col h-full max-h-[932px] w-full max-w-[430px] overflow-y-scroll overflow-x-hidden bg-black relative mt-12px px-[16px] pt-[18px] flex-1 shrink-0 basis-full scrollbar-hide`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
