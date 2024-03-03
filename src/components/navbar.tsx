import { Link } from 'wouter'
import { Asterisk, Divide, Minus, Plus } from 'lucide-react'

const navbar = [
  {
    title: 'Suma',
    redirect: '/sum',
    icon: Plus,
  },
  {
    title: 'Resta',
    redirect: '/res',
    icon: Minus,
  },
  {
    title: 'Multiplación',
    redirect: '/mul',
    icon: Asterisk,
  },
  {
    title: 'División',
    redirect: '/div',
    icon: Divide,
  },
]

export default function Navbar() {
  return (
    <header flex="~ justify-between items-center" p="x-8 y-4" shadow="md">
      <Link href="/">
        <img src="/logo.png" className="size-10 object-cover cursor-pointer" />
      </Link>
      <nav flex="~ items-center gap-8 justify-center">
        {navbar.map((el, i) => (
          <Link href={el.redirect} key={i} hover="bg-blue text-white rounded transition" p="x-4 y-0.5" flex="~ justify-center items-center gap-2">
            <el.icon />
            {el.title}
          </Link>
        ))}
      </nav>
    </header>
  )
}
