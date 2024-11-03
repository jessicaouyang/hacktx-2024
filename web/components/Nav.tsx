import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toggle } from "@/components/ui/toggle";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export function Nav() {
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950'>
      <div className='container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6'>
        <Link href='#' className='flex items-center gap-2' prefetch={false}>
          <MountainIcon className='h-6 w-6' />
          <span className='sr-only'>Acme Inc</span>
        </Link>
        <nav className='hidden items-center gap-6 text-sm font-medium md:flex'>
          <Link
            href='#'
            className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href='#'
            className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
            prefetch={false}
          >
            About
          </Link>
          <Link
            href='#'
            className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
            prefetch={false}
          >
            Services
          </Link>
          <Link
            href='#'
            className='text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className='flex items-center gap-4'>
          <div className='hidden items-center gap-2 text-sm font-medium md:flex'>
            <PhoneIcon className='h-5 w-5 text-gray-500 dark:text-gray-400' />
            <span className='text-gray-500 dark:text-gray-400'>123-456-7890</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='icon' className='rounded-full'>
                <SearchIcon className='h-5 w-5 text-gray-500 dark:text-gray-400' />
                <span className='sr-only'>Search</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-[300px] p-4'>
              <div className='relative'>
                <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400' />
                <Input type='search' placeholder='Search...' className='pl-8 w-full' />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <Toggle aria-label='Toggle dark mode' className='rounded-full'>
            <MoonIcon className='h-5 w-5 text-gray-500 dark:text-gray-400' />
          </Toggle>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='ghost' size='icon' className='rounded-full md:hidden'>
                <MenuIcon className='h-5 w-5 text-gray-500 dark:text-gray-400' />
                <span className='sr-only'>Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='md:hidden'>
              <div className='grid gap-4 p-4'>
                <Link
                  href='#'
                  className='text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  prefetch={false}
                >
                  Home
                </Link>
                <Link
                  href='#'
                  className='text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  prefetch={false}
                >
                  About
                </Link>
                <Link
                  href='#'
                  className='text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  prefetch={false}
                >
                  Services
                </Link>
                <Link
                  href='#'
                  className='text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
                  prefetch={false}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  );
}
