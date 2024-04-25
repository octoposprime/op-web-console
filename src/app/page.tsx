import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.loginImg}>
        <Image src="/assets/loginImg.svg" width={341} height={535} alt="image"/>
      </div>
      <div className={styles.loginBackground}>
        <Image src="/assets/loginBackground.svg" width={649} height={534} alt="background" />
      </div>
      <div className={styles.loginForm}>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  );
}
