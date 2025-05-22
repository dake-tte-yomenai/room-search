import styles from "../components/Loading/Loading.module.css";

export default function Loading(){
    return(
        <div className={styles.main}>
            <div className={styles.circleSpin}></div>
        </div> 
    )
}