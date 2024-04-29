/* eslint-disable @next/next/no-img-element */
'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import clsx from 'clsx';
import { Bell } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  {
    href: '/dashboard',
    name: 'Dashboard',
  },

  {
    href: '/leave-application',
    name: 'Leave Application',
  },
  {
    href: '/appraisals',
    name: 'Appraisals',
  },
  {
    href: '/my-details',
    name: 'My Details',
  },
];

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="bg-neutral/30 md:shadow-md h-16 flex items-center">
      <div className="container">
        <div className="flex items-center gap-6">
          <img
            src="/logos/favicon-black.svg"
            alt="Panesar Logo"
            className="h-8"
          />
          <nav className="flex items-center gap-8 text-muted-foreground">
            {NAV_LINKS.map(link => (
              <Link
                className={clsx('transition-colors hover:text-primary', {
                  'text-primary font-semibold': pathName === link.href,
                })}
                key={link.href}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-4">
            <div className="relative">
              <Bell className="text-muted-foreground size-5" />
              <span className=" bg-rose-400 text-xs text-white rounded-full size-4 flex items-center justify-center absolute right-0 -top-2">
                2
              </span>
            </div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}
