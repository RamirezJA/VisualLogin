import styles from "../styles/chatbox.module.css"

export default function chatbox() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Currently OpenAI is not accepting RapidAPI requests and I am unwilling
        to pay for API tokens on a demo project.🤑😜
      </div>
      {/*
      <div className={styles.box}>
        <div className={styles.btn}>Upload</div>
      </div>
  */}
    </div>
  )
}
