

import { FC } from "react"
import { Footer, Navbar } from "@components/common"
import { ApiProvider } from "@lib"

const Layout: FC = ({children}) => {

  return (
    <ApiProvider>
      <div>
        <Navbar />
       
        <main className="fit">
          { children }
        </main>
        <Footer />
      </div>
    </ApiProvider>
  )
}

export default Layout
