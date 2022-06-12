import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/main/Footer";
import ShotID from "../../components/shots/ShotID";

export default function sessionselect() {
  return (
    <div className="-z-12 subpixel-antialiased bg-neutral-0 min-h-screen h-full text-black bg-white font-satoshi tracking-tight text-xl bg-[url('/BACKGROUND.svg')] bg-cover bg-top">
      <Head>
        <title>dribbbles</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="pt-8 px-8 text-base max-w-[960px] mx-auto flex justify-between items-center">
        <p>About</p>
        <a className="text-3xl">🥬 Lettucewatch</a>
        <p>Enter</p>
      </div>

      <div className="z-22 px-8 sm:px-16 pt-32 max-w-[960px] mx-auto space-y-32">
        <div className="max-w-[480px] mx-auto text-center space-y-4">
          <p className="text-6xl font-bold">What is this?</p>
          <p className="text-neutral-600 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <button className="bg-[#202830] hover:bg-[#2c3844] transition duration-150 rounded-2xl text-white px-8 py-2">
            <p className="text-base">Connect with</p>
            <div className="">
              <svg
                width="128"
                height="20"
                viewBox="0 0 190 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.2274 20C38.5295 20 42.0171 16.5177 42.0171 12.2221C42.0171 7.92641 38.5295 4.44409 34.2274 4.44409C29.9253 4.44409 26.4377 7.92641 26.4377 12.2221C26.4377 16.5177 29.9253 20 34.2274 20Z"
                  fill="#40BCF4"
                />
                <path
                  d="M21.0087 20C25.3108 20 28.7983 16.5177 28.7983 12.2221C28.7983 7.92641 25.3108 4.44409 21.0087 4.44409C16.7066 4.44409 13.219 7.92641 13.219 12.2221C13.219 16.5177 16.7066 20 21.0087 20Z"
                  fill="#00E054"
                />
                <path
                  d="M7.78968 20C12.0918 20 15.5794 16.5177 15.5794 12.2221C15.5794 7.92641 12.0918 4.44409 7.78968 4.44409C3.48756 4.44409 0 7.92641 0 12.2221C0 16.5177 3.48756 20 7.78968 20Z"
                  fill="#FF8000"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.3992 16.3402C13.6513 15.1459 13.219 13.7344 13.219 12.222C13.219 10.7096 13.6513 9.29803 14.3992 8.10376C15.1472 9.29803 15.5795 10.7096 15.5795 12.222C15.5795 13.7344 15.1472 15.1459 14.3992 16.3402Z"
                  fill="#FAFAFA"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.618 8.10376C28.366 9.29803 28.7983 10.7096 28.7983 12.222C28.7983 13.7344 28.366 15.1459 27.618 16.3402C26.87 15.1459 26.4377 13.7344 26.4377 12.222C26.4377 10.7096 26.87 9.29803 27.618 8.10376Z"
                  fill="#FAFAFA"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M90.7621 4.81094C91.314 4.81094 91.6903 4.76037 92.1918 4.65894C93.12 4.53251 93.4709 4.12735 93.6215 2.88659C93.6966 2.27885 93.7467 1.74697 93.7721 1.13924H97.5343V4.81094H100.996V8.8878H97.5343V12.4072C97.5343 14.9393 97.9106 15.218 100.068 15.218H100.996V19.4972H98.6879C94.2986 19.4972 93.2202 17.9021 93.2202 13.319V8.8878H92.0004H87.1611V12.4072C87.1611 14.9393 87.5371 15.218 89.6941 15.218H90.6223V19.4972H88.3145C83.9252 19.4972 82.847 17.9021 82.847 13.319V8.8878H80.3889V5.06409C80.9405 5.06409 81.3168 5.01352 81.8183 4.91209C82.7465 4.78566 83.0978 4.3805 83.248 3.13974C83.3235 2.532 83.3736 1.74697 83.3983 1.13924H87.1611V4.81094H90.7621ZM51.4211 1.34182H56.1366V14.9649H63.6862V19.4972H51.4211V1.34182ZM72.3632 19.877C67.3218 19.877 64.9642 17.0412 64.9642 12.5086V12.0782C64.9642 7.36858 67.8988 4.50719 72.4384 4.50719C77.5805 4.50719 79.7625 7.87488 79.7625 11.8503V13.4962H69.5041C69.7295 15.2686 70.7331 16.2309 72.4887 16.2309C73.7679 16.2309 74.4703 15.6737 74.8213 14.8384H79.6623C78.8596 17.9274 76.6022 19.877 72.3632 19.877ZM69.5041 10.6095H75.2479C75.047 8.96363 74.1945 8.00131 72.4887 8.00131C70.7832 8.00131 69.805 8.88777 69.5041 10.6095ZM109.498 19.877C104.456 19.877 102.098 17.0412 102.098 12.5086V12.0782C102.098 7.36858 105.033 4.50719 109.573 4.50719C114.715 4.50719 116.897 7.87488 116.897 11.8503V13.4962H106.638C106.864 15.2686 107.867 16.2309 109.623 16.2309C110.902 16.2309 111.605 15.6737 111.956 14.8384H116.796C115.994 17.9274 113.736 19.877 109.498 19.877ZM106.638 10.6095H112.382C112.181 8.96363 111.329 8.00131 109.623 8.00131C107.917 8.00131 106.939 8.88777 106.638 10.6095ZM118.777 19.4972V4.81094H122.439L123.066 7.82405C123.543 5.5454 125.022 4.60836 127.631 4.60836H128.459V9.44468H126.754C124.094 9.44468 123.442 10.3817 123.442 12.9897V19.4972H118.777ZM134.428 17.0413L134.076 19.4973H130.088V0H134.603V7.16583C135.381 5.49462 136.835 4.50731 138.867 4.50731C142.127 4.5323 144.536 6.78595 144.536 11.749V12.2047C144.536 17.193 142.353 19.8768 138.767 19.8768C136.559 19.8768 135.13 18.7628 134.428 17.0413ZM139.996 12.1794V11.8248C139.996 9.49534 138.892 8.33073 137.312 8.33073C135.656 8.33073 134.528 9.62206 134.528 11.7743V12.1036C134.528 14.661 135.631 15.8511 137.287 15.8511C138.967 15.8511 139.996 14.7624 139.996 12.1794ZM145.939 12.5087V12.0527C145.939 7.06439 148.999 4.50731 153.287 4.50731C157.652 4.50731 160.612 7.14054 160.612 12.0527V12.5087C160.612 17.3956 157.702 19.8768 153.263 19.8768C148.547 19.8768 145.939 17.3956 145.939 12.5087ZM156.072 12.4579V12.0527C156.072 9.64734 155.069 8.40658 153.313 8.40658C151.607 8.40658 150.478 9.59677 150.478 12.0527V12.4579C150.478 14.7115 151.607 15.9017 153.287 15.9017C154.968 15.9017 156.072 14.7624 156.072 12.4579ZM167.884 15.3447L165.226 19.4972H159.858L165.226 11.8503L160.36 4.81091H165.527L167.91 8.53319L170.292 4.81091H175.434L170.593 11.7997L175.76 19.4972H170.543L167.884 15.3447ZM185.265 16.9399C184.538 18.6617 183.083 19.776 180.851 19.776C177.339 19.776 175.132 17.2184 175.132 12.1795V11.7487C175.132 6.81127 177.54 4.53233 180.876 4.53233C182.983 4.53233 184.362 5.41879 185.09 6.9127V2.90782e-05H189.579V19.4973H185.692L185.265 16.9399ZM185.14 12.1542V11.8249C185.14 9.5968 184.061 8.33076 182.431 8.33076C180.725 8.33076 179.722 9.52065 179.722 11.8249V12.1542C179.722 14.7877 180.801 15.8512 182.356 15.8512C184.036 15.8512 185.14 14.6357 185.14 12.1542Z"
                  fill="#FAFAFA"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="text-center space-y-8 md:text-left md:space-y-0 sm:px-8 pt-12 sm:py-12 bg-black/[2.5%] rounded-2xl text-white md:flex w-full h-full justify-between items-center">
          <div className="px-8 max-w-[480px] mx-auto text-black space-y-4 md:pr-8">
            <p className="text-4xl font-bold">How does it work?</p>
            <p className="text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>

          <div className="py-8 sm:py-0 rounded-2xl space-y-4 border-0 sm:border-0 border-black/5 md:bg-none">
            <div className="flex justify-center">
              <main className="relative font-medium w-[256px] h-[380px] rounded-2xl overflow-hidden">
                <Image
                  src="/posters/br2049.jpg"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="sticky w-full h-full bg-gradient-to-tr from-black hover:opacity-75 transition duration-200"></div>
                <div className="absolute bottom-0 p-4">
                  <div className="flex items-center space-x-2">
                    <p className="font-lg">4,1</p>
                    <div className="flex space-x-1">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.00932 4.80448L6.52455 1.75236C6.71903 1.36054 7.28101 1.36054 7.4755 1.75236L8.9907 4.80448L12.3792 5.29693C12.814 5.36011 12.9872 5.89148 12.6725 6.19627L10.221 8.57038L10.7996 11.9243C10.8739 12.355 10.4192 12.6835 10.0301 12.4801L7.00002 10.8957L3.96988 12.4801C3.58087 12.6835 3.12616 12.355 3.20045 11.9243L3.779 8.57038L1.32754 6.19627C1.01279 5.89148 1.18607 5.36011 1.62082 5.29693L5.00932 4.80448Z"
                          fill="white"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.00932 4.80448L6.52455 1.75236C6.71903 1.36054 7.28101 1.36054 7.4755 1.75236L8.9907 4.80448L12.3792 5.29693C12.814 5.36011 12.9872 5.89148 12.6725 6.19627L10.221 8.57038L10.7996 11.9243C10.8739 12.355 10.4192 12.6835 10.0301 12.4801L7.00002 10.8957L3.96988 12.4801C3.58087 12.6835 3.12616 12.355 3.20045 11.9243L3.779 8.57038L1.32754 6.19627C1.01279 5.89148 1.18607 5.36011 1.62082 5.29693L5.00932 4.80448Z"
                          fill="white"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.00932 4.80448L6.52455 1.75236C6.71903 1.36054 7.28101 1.36054 7.4755 1.75236L8.9907 4.80448L12.3792 5.29693C12.814 5.36011 12.9872 5.89148 12.6725 6.19627L10.221 8.57038L10.7996 11.9243C10.8739 12.355 10.4192 12.6835 10.0301 12.4801L7.00002 10.8957L3.96988 12.4801C3.58087 12.6835 3.12616 12.355 3.20045 11.9243L3.779 8.57038L1.32754 6.19627C1.01279 5.89148 1.18607 5.36011 1.62082 5.29693L5.00932 4.80448Z"
                          fill="white"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.00932 4.80448L6.52455 1.75236C6.71903 1.36054 7.28101 1.36054 7.4755 1.75236L8.9907 4.80448L12.3792 5.29693C12.814 5.36011 12.9872 5.89148 12.6725 6.19627L10.221 8.57038L10.7996 11.9243C10.8739 12.355 10.4192 12.6835 10.0301 12.4801L7.00002 10.8957L3.96988 12.4801C3.58087 12.6835 3.12616 12.355 3.20045 11.9243L3.779 8.57038L1.32754 6.19627C1.01279 5.89148 1.18607 5.36011 1.62082 5.29693L5.00932 4.80448Z"
                          fill="white"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-2xl">Blade Runner 2049</p>
                  <p className="text-lg text-left">2017</p>
                </div>
              </main>
            </div>
            <div className="flex justify-center space-x-4">
              <button className="group flex bg-[#F8E4DC] px-8 py-1 rounded-2xl">
                <div className="group-hover:scale-125 transition duration-150">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 24L32 32M16 32L24 24L16 32ZM32 16L24 24L32 16ZM24 24L16 16L24 24Z"
                      stroke="#FF7777"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </button>
              <button className="group flex bg-[#FF7777] px-8 py-1 rounded-2xl">
                <div className="group-hover:scale-125 transition duration-150">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.76 20.6529C33.76 22.3025 33.114 23.8869 31.9602 25.059C29.3045 27.7578 26.7287 30.572 23.9738 33.1729C23.3423 33.7604 22.3406 33.739 21.7363 33.1249L13.7993 25.059C11.4002 22.6209 11.4002 18.6849 13.7993 16.2469C16.2219 13.7849 20.1686 13.7849 22.5912 16.2469L22.8798 16.5401L23.1681 16.2471C24.3297 15.066 25.9116 14.3999 27.5642 14.3999C29.2167 14.3999 30.7986 15.066 31.9602 16.2469C33.1141 17.419 33.76 19.0034 33.76 20.6529Z"
                      fill="#FAFAFA"
                    />
                  </svg>
                </div>
              </button>
            </div>
            {/* <div className="flex justify-center text-neutral-600">
              <button className="hover:text-neutral-400 transition duration-150">
                Go back
              </button>
            </div> */}
          </div>
        </div>

        <div className="text-center space-y-12 md:text-left sm:px-8 pt-12 sm:py-12 bg-black/[2.5%] rounded-2xl text-white w-full h-full justify-center">
          <div className="px-8 mx-auto max-w-[480px] text-black space-y-4">
            <p className="text-4xl font-bold">Curious?</p>
            <p className="text-neutral-600">
              Click on the poster to read more information about the movie!
            </p>
          </div>
          <div className="flex justify-center">
            <main className="w-full max-w-[640px] font-medium text-lg">
              <div className="text-black tracking-tight">
                <div className="rounded-2xl sm:p-8 px-8 py-12 space-y-8 bg-white">
                  <div className="space-y-2">
                    <p className="font-bold text-2xl">Blade Runner 2049</p>
                    <p className="text-base text-neutral-700">
                      2017, Directed by Denis Villeneuve
                    </p>
                  </div>
                  <p className="">
                    Thirty years after the events of the first film, a new blade
                    runner, LAPD Officer K, unearths a long-buried secret that
                    has the potential to plunge what’s left of society into
                    chaos. K’s discovery leads him on a quest to find Rick
                    Deckard, a former LAPD blade runner who has been missing for
                    30 years.
                  </p>
                  <div className="md:flex md:space-y-0 items-center space-y-4">
                    <div className="flex flex-wrap sm:flex-nowrap w-full justify-center">
                      <div className="mb-2 px-4 h-8 rounded-full bg-neutral-200 flex space-x-2 items-center">
                        <p>4,1</p>
                        <div className="flex">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.00932 4.80448L6.52455 1.75236C6.71903 1.36054 7.28101 1.36054 7.4755 1.75236L8.9907 4.80448L12.3792 5.29693C12.814 5.36011 12.9872 5.89148 12.6725 6.19627L10.221 8.57038L10.7996 11.9243C10.8739 12.355 10.4192 12.6835 10.0301 12.4801L7.00002 10.8957L3.96988 12.4801C3.58087 12.6835 3.12616 12.355 3.20045 11.9243L3.779 8.57038L1.32754 6.19627C1.01279 5.89148 1.18607 5.36011 1.62082 5.29693L5.00932 4.80448Z"
                              fill="black"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.00932 4.80448L6.52455 1.75236C6.71903 1.36054 7.28101 1.36054 7.4755 1.75236L8.9907 4.80448L12.3792 5.29693C12.814 5.36011 12.9872 5.89148 12.6725 6.19627L10.221 8.57038L10.7996 11.9243C10.8739 12.355 10.4192 12.6835 10.0301 12.4801L7.00002 10.8957L3.96988 12.4801C3.58087 12.6835 3.12616 12.355 3.20045 11.9243L3.779 8.57038L1.32754 6.19627C1.01279 5.89148 1.18607 5.36011 1.62082 5.29693L5.00932 4.80448Z"
                              fill="black"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.00932 4.80448L6.52455 1.75236C6.71903 1.36054 7.28101 1.36054 7.4755 1.75236L8.9907 4.80448L12.3792 5.29693C12.814 5.36011 12.9872 5.89148 12.6725 6.19627L10.221 8.57038L10.7996 11.9243C10.8739 12.355 10.4192 12.6835 10.0301 12.4801L7.00002 10.8957L3.96988 12.4801C3.58087 12.6835 3.12616 12.355 3.20045 11.9243L3.779 8.57038L1.32754 6.19627C1.01279 5.89148 1.18607 5.36011 1.62082 5.29693L5.00932 4.80448Z"
                              fill="black"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.00932 4.80448L6.52455 1.75236C6.71903 1.36054 7.28101 1.36054 7.4755 1.75236L8.9907 4.80448L12.3792 5.29693C12.814 5.36011 12.9872 5.89148 12.6725 6.19627L10.221 8.57038L10.7996 11.9243C10.8739 12.355 10.4192 12.6835 10.0301 12.4801L7.00002 10.8957L3.96988 12.4801C3.58087 12.6835 3.12616 12.355 3.20045 11.9243L3.779 8.57038L1.32754 6.19627C1.01279 5.89148 1.18607 5.36011 1.62082 5.29693L5.00932 4.80448Z"
                              fill="black"
                              stroke="black"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="mb-2 mx-2 px-4 h-8 rounded-full bg-neutral-200 flex space-x-2 items-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.00002 9.33317C8.73642 9.33317 9.33335 8.73624 9.33335 7.99984C9.33335 7.26344 8.73642 6.6665 8.00002 6.6665C7.26362 6.6665 6.66669 7.26344 6.66669 7.99984C6.66669 8.73624 7.26362 9.33317 8.00002 9.33317Z"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14 8C12.7409 9.994 10.4789 12 8 12C5.52113 12 3.25904 9.994 2 8C3.53237 6.1055 5.32775 4 8 4C10.6723 4 12.4677 6.10547 14 8Z"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <p>812k</p>
                      </div>
                      <div className="px-4 h-8 rounded-full bg-neutral-200 flex space-x-2 items-center">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.6666 5.90815C14.6666 6.93913 14.2708 7.9294 13.5638 8.66193C11.9366 10.3487 10.3582 12.1075 8.67018 13.7331C8.28324 14.1003 7.66944 14.0869 7.29918 13.7031L2.43582 8.66193C0.965811 7.13813 0.965811 4.67815 2.43582 3.15438C3.92027 1.61563 6.3386 1.61563 7.82304 3.15438L7.99984 3.33761L8.17651 3.15449C8.88824 2.41633 9.85758 2 10.8702 2C11.8828 2 12.852 2.41629 13.5638 3.15438C14.2708 3.88697 14.6666 4.87718 14.6666 5.90815Z"
                            fill="black"
                            stroke="black"
                            stroke-width="1.5"
                            stroke-linejoin="round"
                          />
                        </svg>

                        <p>306k</p>
                      </div>
                    </div>
                    <button className="w-full flex md:justify-end justify-center">
                      <div className="bg-black flex justify-center items-center px-8 rounded-2xl p-4">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 12.8571L8.57143 17.4286L20 6"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        <div className="text-center space-y-12 md:text-left sm:px-8 md:px-16 pt-12 sm:py-12 bg-black/[2.5%] rounded-2xl text-white w-full h-full">
          <div className="px-8 mx-auto max-w-[480px] text-black space-y-4">
            <p className="text-4xl font-bold">*insert a quirky header*</p>
            <p className="text-neutral-600">
              Lettucewatch will automatically let you know when a match has been
              found!
            </p>
          </div>
          <div className="w-full flex justify-center">
            <div className="space-y-8 text-black bg-white bg-[url('/BACKGROUND.svg')] bg-cover py-8 px-4 sm:px-16 w-full rounded-2xl">
              <p className="text-center text-3xl">It's a match!</p>
              <div className="flex justify-center">
                <main className="text-white relative font-medium w-[256px] h-[380px] rounded-2xl overflow-hidden">
                  <Image
                    src="/posters/br2049.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="sticky w-full h-full bg-gradient-to-tr from-black hover:opacity-75 transition duration-200"></div>
                  <div className="absolute bottom-0 p-4">
                    <div className="flex items-center space-x-2">
                      <p className="font-lg">4,1</p>
                      <div className="flex space-x-1">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.00932 4.80448L6.52455 1.75236C6.71903 1.36054 7.28101 1.36054 7.4755 1.75236L8.9907 4.80448L12.3792 5.29693C12.814 5.36011 12.9872 5.89148 12.6725 6.19627L10.221 8.57038L10.7996 11.9243C10.8739 12.355 10.4192 12.6835 10.0301 12.4801L7.00002 10.8957L3.96988 12.4801C3.58087 12.6835 3.12616 12.355 3.20045 11.9243L3.779 8.57038L1.32754 6.19627C1.01279 5.89148 1.18607 5.36011 1.62082 5.29693L5.00932 4.80448Z"
                            fill="white"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.00932 4.80448L6.52455 1.75236C6.71903 1.36054 7.28101 1.36054 7.4755 1.75236L8.9907 4.80448L12.3792 5.29693C12.814 5.36011 12.9872 5.89148 12.6725 6.19627L10.221 8.57038L10.7996 11.9243C10.8739 12.355 10.4192 12.6835 10.0301 12.4801L7.00002 10.8957L3.96988 12.4801C3.58087 12.6835 3.12616 12.355 3.20045 11.9243L3.779 8.57038L1.32754 6.19627C1.01279 5.89148 1.18607 5.36011 1.62082 5.29693L5.00932 4.80448Z"
                            fill="white"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.00932 4.80448L6.52455 1.75236C6.71903 1.36054 7.28101 1.36054 7.4755 1.75236L8.9907 4.80448L12.3792 5.29693C12.814 5.36011 12.9872 5.89148 12.6725 6.19627L10.221 8.57038L10.7996 11.9243C10.8739 12.355 10.4192 12.6835 10.0301 12.4801L7.00002 10.8957L3.96988 12.4801C3.58087 12.6835 3.12616 12.355 3.20045 11.9243L3.779 8.57038L1.32754 6.19627C1.01279 5.89148 1.18607 5.36011 1.62082 5.29693L5.00932 4.80448Z"
                            fill="white"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.00932 4.80448L6.52455 1.75236C6.71903 1.36054 7.28101 1.36054 7.4755 1.75236L8.9907 4.80448L12.3792 5.29693C12.814 5.36011 12.9872 5.89148 12.6725 6.19627L10.221 8.57038L10.7996 11.9243C10.8739 12.355 10.4192 12.6835 10.0301 12.4801L7.00002 10.8957L3.96988 12.4801C3.58087 12.6835 3.12616 12.355 3.20045 11.9243L3.779 8.57038L1.32754 6.19627C1.01279 5.89148 1.18607 5.36011 1.62082 5.29693L5.00932 4.80448Z"
                            fill="white"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-2xl">Blade Runner 2049</p>
                    <p className="text-lg text-left">2017</p>
                  </div>
                </main>
              </div>
              <div className="flex justify-center space-x-2">
                <button className="flex group justify-center items-center border-[2.5px] border-black rounded-2xl h-12 px-6">
                  <div className="flex space-x-2 items-center group-hover:scale-110 transition duration-150">
                    <p>Restart</p>
                    <div className="">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.81391 18.8436C4.49068 16.8028 3.06923 12.5844 4.63926 8.88565C6.36896 4.81074 11.0745 2.90956 15.1494 4.63926C19.2243 6.36896 21.1255 11.0745 19.3959 15.1494C18.72 16.7417 17.5897 18.0021 16.2203 18.8436"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.0879 15.1826V18.7094C16.0879 18.9751 16.3032 19.1904 16.5688 19.1904H20.0956"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.0803 20.0001L12.0883 19.9912"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                <button className="">
                  <div className="group bg-black flex justify-center items-center h-12 w-12 rounded-2xl">
                    <div className="group-hover:scale-125 transition duration-150">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 12.8571L8.57143 17.4286L20 6"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white box-border mt-32">
        <div className="box-border w-full h-0.5 bg-black/5"></div>
        <div className="max-w-[960px] mx-auto flex justify-between items-center px-8 py-16  space-x-4">
          <div className="text-base text-neutral-600">
            <p>© 2022 Lettucewatch</p>
            <div className="flex flex-wrap">
              <p>Built by&nbsp;</p>
              <a href="" className="text-black">
                Ben Silverman&nbsp;
              </a>
              <p>&&nbsp;</p>
              <a href="" className="text-black">
                Eemeli Ruohomäki
              </a>
            </div>
            <div>
              <div className="flex flex-wrap text-sm justify-left items-center">
                <a href="">Terms of Service </a>
                <div className="px-2">
                  <div className="h-0.5 w-0.5 bg-neutral-600 rounded-full"></div>
                </div>
                <a href="">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div>
            <svg
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_114_503)">
                <path
                  d="M21.4789 4.96366C21.4935 5.17366 21.4935 5.38366 21.4935 5.5956C21.4935 12.0533 16.5773 19.5011 7.58797 19.5011V19.4972C4.93249 19.5011 2.33216 18.7404 0.0966797 17.3062C0.482809 17.3527 0.870873 17.3759 1.25991 17.3769C3.46055 17.3788 5.59829 16.6404 7.32958 15.2808C5.23829 15.2411 3.40442 13.8775 2.76378 11.8869C3.49636 12.0282 4.2512 11.9991 4.97023 11.8027C2.69023 11.342 1.04991 9.33882 1.04991 7.01237C1.04991 6.99108 1.04991 6.97076 1.04991 6.95043C1.72926 7.32882 2.48991 7.53882 3.26797 7.56205C1.12055 6.12689 0.458615 3.27011 1.75539 1.03656C4.23668 4.08979 7.89765 5.94592 11.8276 6.14237C11.4338 4.44495 11.9718 2.66624 13.2415 1.47302C15.2099 -0.377307 18.3057 -0.282468 20.156 1.68495C21.2505 1.46914 22.2996 1.06753 23.2596 0.498499C22.8947 1.62979 22.1312 2.59076 21.1112 3.2014C22.0799 3.08721 23.0264 2.82785 23.9176 2.43205C23.2615 3.41527 22.4351 4.27173 21.4789 4.96366Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_114_503">
                  <rect width="24" height="19.7419" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
