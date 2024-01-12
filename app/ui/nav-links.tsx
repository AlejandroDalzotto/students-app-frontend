import clsx from 'clsx';
import Link from 'next/link';

interface LinkProps {
  id: number;
  text: string;
  href: string;
  isPrimary: boolean;
}

const APP_LINKS: LinkProps[] = [
  {
    id: 1,
    text: "Sobre nosotros",
    href: "/about",
    isPrimary: false,
  },
  {
    id: 2,
    text: "Iniciar sesión",
    href: "/signin",
    isPrimary: true,
  }
]

export default function NavLinks() {
  return (
    <nav>

      <ul className='flex gap-x-7'>
        {APP_LINKS.map(({ text, href, id, isPrimary }) => {
          return (
            <li key={id}>
              <Link href={href} className={clsx(
                "flex items-center gap-3 py-3 px-6 rounded font-medium outline-none transition-all",
                {
                  "text-white bg-blue-500 hover:bg-blue-700 active:scale-90": isPrimary
                },
                {
                  "shadow shadow-black/40 active:shadow-inner active:scale-90 dark:bg-white dark:text-black dark:hover:bg-neutral-200": !isPrimary
                }
              )}>
                {text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
