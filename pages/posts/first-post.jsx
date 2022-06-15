import Link from "next/link";
import styles from '../../styles/Home.module.css';

export default function FirstPost() {
  return (
    <div>
      <h1>First post</h1>
      <h2 className={styles.title}>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </h2>
      
    </div>
  )
}

