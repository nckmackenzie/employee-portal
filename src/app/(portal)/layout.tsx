/* eslint-disable @next/next/no-img-element */
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-dvh flex flex-col">
      <nav className="bg-neutral/30 md:shadow-md py-2 md:py-4">
        <div className="container">
          <img
            src="/logos/favicon-black.svg"
            alt="Panesar Logo"
            className="h-8"
          />
        </div>
      </nav>
      <main className="flex-grow ">
        <div className="container h-full ">
          <ScrollArea className="h-full bg-rose-200">
            <div className="px-6">{children}</div>
          </ScrollArea>
        </div>
      </main>
    </div>
  );
}
