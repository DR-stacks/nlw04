import styles from '../styles/pages/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/32774948?s=400&u=0498fa8d35b73242b4429089bbdfa2c5d77b2e7f&v=4" alt="imege" />
      <div>
        <strong>Dyan</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level 1
        </p>
      </div>
    </div>
  )
}