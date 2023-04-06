// components/layout.js

import Navbar from "./navbar"
import Footer from "./footer"
import Chatbox from "./chatbox"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Chatbox />
      <main>{children}</main>
      <Footer />
    </>
  )
}
