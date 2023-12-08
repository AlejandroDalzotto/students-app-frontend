import Link from 'next/link'

const APP_LINKS = [
  {
    id: 1,
    label: "Sobre nosotros",
    href: "/about",
    type: "secondary"
  },
  {
    id: 2,
    label: "Iniciar sesión",
    href: "/login",
    type: "primary"
  }
]

export default function NavLinks() {
  return (
    <nav>

      <ul className='flex gap-x-7'>
        {APP_LINKS.map(({label, href, id, type}) => {
          return (
            <li key={id}>
              <Link href={href} className={`nav-link-${type}`}>{label}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
