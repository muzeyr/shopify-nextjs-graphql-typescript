

import { FC } from "react"
import { Container } from "@components/ui"
import Link from "next/link"
import s from "./Navbar.module.css"

const Navbar: FC = () => {
  return (
    <Container>
      <div className={s.root}>
        <div className="flex flex-1 items-center">
          <Link href="/">
            <a className={s.logo}>
              nu3
            </a>
          </Link>
          <nav className="ml-6 space-x-6">
           
          </nav>
         
        </div>
      </div>
    </Container>
  )
}

export default Navbar
