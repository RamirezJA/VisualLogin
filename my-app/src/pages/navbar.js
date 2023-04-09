import styles from "../styles/navbar.module.css"
import Link from "next/link"
export default function navbar() {
  return (
    <div className={styles.nav}>
      <ul className={styles.menu}>
        <li>
          <Link className={styles.link} href='/'>
            Next.js & OpenAI
          </Link>
        </li>
        <li>
          <Link className={styles.link} href='/about'>
            About
          </Link>
        </li>
      </ul>
    </div>
  )
}
