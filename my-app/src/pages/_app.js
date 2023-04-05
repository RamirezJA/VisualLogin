import "@/styles/globals.css"
import Layout from "./Layout"
import { NextUIProvider } from "@nextui-org/react"

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
