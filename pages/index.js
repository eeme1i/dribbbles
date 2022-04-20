import Head from "next/head";
import Link from "next/link";
import Arrow from "../components/main/Arrow";
import Footer from "../components/main/Footer";
import Rings from "../components/main/Rings";

export default function Home() {
  return (
    <div className="relative bg-neutral-900 min-h-screen h-full text-neutral-300 font-inter">
      <Head>
        <title>dribbbles</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative flex h-screen px-8 sm:px-0 pb-8 items-center justify-center text-xl">
        <div className="z-10 bg-black/[0.25] backdrop-blur-md max-w-[42rem] p-8 sm:p-16 rounded-3xl space-y-8">
          <div>
            <p className="text-5xl sm:text-8xl font-semibold tracking-tighter text-neutral-300">
              Dribbbles
            </p>
            <p className="tracking-tight text-neutral-400">
              Building Dribbble shots in Nextjs and Tailwind.
            </p>
          </div>
          <Link href="/shots">
            <a className="flex items-center justify-center max-w-[20rem] px-8 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 duration-300 text-white space-x-2">
              <p>Continue to shots</p>
              <Arrow />
            </a>
          </Link>
        </div>
        <Rings />
      </main>
      <Footer />
    </div>
  );
}
