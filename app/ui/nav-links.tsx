import type { color, variant } from '@material-tailwind/react/types/components/button';
import DefaultLink from './Links/default-link'

interface LinkProps {
  id: number;
  text: string;
  href: string;
  color?: color;
  variant?: variant
}

const APP_LINKS: LinkProps[] = [
  {
    id: 1,
    text: "Sobre nosotros",
    href: "/about",
    color: "gray",
    variant: 'outlined'
  },
  {
    id: 2,
    text: "Iniciar sesión",
    href: "/signin",
    color: "blue",
    variant: 'filled'
  }
]

export default function NavLinks() {
  return (
    <nav>

      <ul className='flex gap-x-7'>
        {APP_LINKS.map(({text, href, id, color, variant}) => {
          return (
            <li key={id}>
              <DefaultLink href={href} text={text} color={color} variant={variant} />
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
