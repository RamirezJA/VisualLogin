import React from "react"
import styles from "../styles/navbar.module.css"
export default function navbar() {
  return (
    <div className={styles.nav}>
      <ul className={styles.menu}>
        <li>Ai Grade</li>
        <li>About</li>
      </ul>
    </div>
  )
}
