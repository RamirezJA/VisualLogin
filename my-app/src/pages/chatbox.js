import styles from "../styles/chatbox.module.css"

export default function chatbox() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Go ahead, ask the AI - no question too tough, no answer too tricky! 🧘🏽
      </div>
      {/*
      <div className={styles.box}>
        <div className={styles.btn}>Upload</div>
      </div>
  */}
    </div>
  )
}
