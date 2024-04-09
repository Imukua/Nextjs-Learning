import styles from "@/app/globals.css"
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
     <h1>Home</h1>
     <Link href="/product/list">
      <h4>Product list</h4>
     </Link>
    </main>
  );
}
