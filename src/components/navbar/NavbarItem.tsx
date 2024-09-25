'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Item {
  route: string;
  title: string;
}

export const NavbariItem = ({ route, title }: Item) => {
  const vistaactual = usePathname();

  return(
    <Link className={`${vistaactual === route ? 'activo' : ''}`} href={route}>{title}</Link>
  )
};
