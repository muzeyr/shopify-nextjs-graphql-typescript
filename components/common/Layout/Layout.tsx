

import s from "./Layout.module.css"
import { Footer, Navbar } from "@components/common"
import { ApiProvider } from "@lib"
import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return (
    <ApiProvider>
      <div className={s.root}>
        <Navbar />
        <main className="fit">{children}</main>
        <Footer />
      </div>
    </ApiProvider>
  );
}

export default Layout;

