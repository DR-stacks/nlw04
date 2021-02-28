import styles from '../styles/pages/Countdown.module.css'

export function Countdown() {
  return (
    <div className={styles.countdownContainer}>
      <div>
        <span>1</span>
        <span>2</span>
      </div>
      <span>:</span>
      <div>
        <span>0</span>
        <span>0</span>
      </div>
    </div>
  )
}
