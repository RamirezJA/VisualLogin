// components/layout.js

import Navbar from "./navbar"
import Footer from "./footer"
import Chatbox from "./chatbox"
import style from "../styles/site.module.css"

export default function Layout({ children }) {
  return (
    <div className={style.site}>
      <Navbar />
      <Chatbox />
      <main className={style.main}>{children}</main>
      <Footer />
    </div>
  )
}
