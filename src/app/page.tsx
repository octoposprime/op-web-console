import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.loginImg}>
      <div className={styles.loginForm}>
        <h3>Web Application</h3>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          
          <button type="submit">Sign in</button>
        </form>
      </div>
      </div>
      <div className={styles.loginBackground}>
        <Image src="/assets/octopos.png" width={700} height={400} alt="background" />
      </div>
      
    </div>
  );
}
