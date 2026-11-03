import type { Metadata } from "next";
import "./globals.css";
import { neue } from "./neue/font";
import Image from "next/image";
import Link from "next/link";
import Available from "./component/available";
import Menu from "./component/menu";
import Footer from "./component/footer";

export const metadata: Metadata = {
  title: "Siastes",
  description: "Find your Next Fintech Opportunity with Siastes",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={` ${neue.variable}  h-full antialiased`}>
      <body className="min-h-full flex flex-col w-full ">
        <div className="w-full flex max-sm:bg-grey flex-col items-center justify-center px-4 max-sm:border-b border-black/10">
          <div className="w-full flex min-w-[320px] max-w-3xl items-center pb-3 pt-4 max-md:px-4 justify-between md:justify-center gap-3 relative ">
            <Link
              href="/"
              className="py-3 md:px-4 md:bg-grey rounded-xl md:border border-violet-400/10">
              <Image src="/siastes.png" width={60} height={60} alt="siastes" className="w-auto h-auto" />
            </Link>
            <div className="py-3 px-4 md:flex gap-5 items-center justify-center bg-grey rounded-xl border border-violet-400/10 hidden ">
              <Link href="/" className="font-neue text-sm text-black/60">
                Home
              </Link>
              {/* <Link href="/team" className="font-neue text-sm text-black/60">
                Team
              </Link> */}
              {/* <Link href="/" className="font-neue text-sm text-black/60">
                Carees
              </Link> */}
              <Link href="/" className="font-neue  text-sm text-black/60">
                Insights
              </Link>
            </div>
            <div className="py-3 px-4 bg-violet-500 rounded-xl md:flex hidden cursor-pointer">
              <p className="text-white">Download</p>
            </div>
            <Menu/>
          </div>
          <Available/>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
