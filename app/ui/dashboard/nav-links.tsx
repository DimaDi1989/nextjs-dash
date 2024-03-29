'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  UserCircleIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import { UsersIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'My test page', href: '/dashboard/mypage', icon: UserCircleIcon },
  { name: 'Admin page', href: '/dashboard/admin', icon: UsersIcon },
];

export default function NavLinks() {
  const activeLink = usePathname();

  console.log(activeLink);

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <>
            <Link
              href={link.href}
              key={link.name}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-green-400 hover:text-red-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-500 text-yellow-200': activeLink === link.href,
                },
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </>

          // <a
          //   key={link.name}
          //   href={link.href}
          //   className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          // >
          //   <LinkIcon className="w-6" />
          //   <p className="hidden md:block">{link.name}</p>
          // </a>
        );
      })}
    </>
  );
}
