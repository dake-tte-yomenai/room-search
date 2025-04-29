import styles from "./rule.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


export default function Rule(){

    
    return(
        <div>
            <Header />
            <div className={styles.background}></div>
            <Footer />
        </div>
    )
}