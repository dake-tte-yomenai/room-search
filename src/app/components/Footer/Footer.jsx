import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <Link href="../detailOur">created by our</Link>
        </footer>
    ) 
}