import { Nav } from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import {
  BookOpenIcon,
  ChevronRightIcon,
  MessagesSquareIcon,
  ThumbsUpIcon,
  Flame,
} from "lucide-react";
import Link from "next/link";

const star = (
  <svg
    className='h-4 w-4'
    width={51}
    height={51}
    viewBox='0 0 51 51'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z'
      fill='currentColor'
    />
  </svg>
);

export default function Home() {
  return (
    <div className='bg-orange-50 text-amber-950'>
      <Nav />
      <div className='container py-24 lg:py-32 mx-auto'>
        {/* Grid */}
        <div className='grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center'>
          <div>
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
              Uncle (AI)roh: The only advice you'll ever need
            </h1>
            <p className='mt-3 text-xl text-muted-foreground'>
              Ask Uncle Iroh to help alleviate any of your woes
            </p>
            {/* Buttons */}
            <div className='mt-7 grid gap-3 w-full sm:inline-flex'>
              <SignedOut>
                <SignInButton >
                  <Button size={"lg"}>
                    Get started
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Link href="/chat">
                  <Button size={"lg"}>
                    Visit Iroh
                  </Button>
                </Link>
              </SignedIn>

            </div>
            {/* End Buttons */}
            <div className='mt-6 lg:mt-10 grid grid-cols-2 gap-x-5'>
              {/* Review */}
              <div className='py-5'>
                <div className='flex space-x-1'>
                  {star}
                  {star}
                  {star}
                  {star}
                  {star}
                </div>
                <p className='mt-3 text-sm'>
                  <span className='font-bold'>4.6</span> /5 - from 12k reviews
                </p>
                <div className='mt-3'>
                  <h2 className='font-bold text-xl'> - Fire Nation</h2>
                </div>
              </div>
              {/* End Review */}
              {/* Review */}
              <div className='py-5'>
                <div className='flex space-x-1'>
                  {star}
                  {star}
                  {star}
                  {star}
                  <svg
                    className='h-4 w-4'
                    width={51}
                    height={51}
                    viewBox='0 0 51 51'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z'
                      fill='transparent'
                    />
                    <path
                      d='M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z'
                      fill='currentColor'
                    />
                  </svg>
                </div>
                <p className='mt-3 text-sm'>
                  <span className='font-bold'>4.8</span> /5 - from 5k reviews
                </p>
                <div className='mt-3'>
                  <h2 className='font-bold text-xl'> - Water Nation</h2>
                </div>
              </div>
              {/* End Review */}
            </div>
          </div>
          {/* Col */}
          <div className='relative ms-4'>
            <img className='w-full rounded-md' src='/demo.png' alt='Image Description' />
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
      {/* Icon Blocks */}
      
      {/* End Icon Blocks */}
      <footer className='py-6 md:px-8 md:py-0'>
        <div className='container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
          <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
            Built by Dhruv Arora, Jessica Ouyang, Rohit Anantha, Vrishank Viswanath . The source
            code is available on{" "}
            <a href="https://github.com/jessicaouyang/hacktx-2024"
              className='font-medium underline underline-offset-4'
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
