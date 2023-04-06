import styles from "../styles/chatbox.module.css"

export default function chatbox() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Upgrade your writing game: Upload your essay and get feedback! 🧘🏽
      </div>
      <div className={styles.box}>
        <div className={styles.btn}>Upload</div>
      </div>
    </div>
  )
}
