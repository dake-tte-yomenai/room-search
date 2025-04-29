import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./detailOur.module.css";


export default function DetailOur() {
    return(
        <div>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>メンバー紹介</h1>
                <div className={styles.content}>
                    <div className={styles.sidePhoto}></div>
                    <div className={styles.description}>
                
                        <p>
                            MountainDEW Club<br/>
                            　創設メンバー<br/>
                            　・嶽亮太朗<br/>
                            　・LUKE Taisho<br/>
                            　・角野奏太<br/>
                            <br/>
                            　関連団体<br/>
                            　・マリ部<br/>
                            <br/>
                            　・芝祭<br/>
                            　　長谷川響希<br/>
                            　　石田遼<br/>
                            　　植田修二<br/>
                        </p>
                    </div>
                    <div className={styles.history}>
                        <h2>2025年４月に発足</h2>
                        <h2>運用資金０</h2>
                        <h2>Dew Mapを開発予定</h2>
                    </div>
                </div>
                
            </main>
            <Footer />
        </div>
    )
}