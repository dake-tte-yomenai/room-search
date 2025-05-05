'use client';
import {useState} from "react";
import {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../lib/firebase";
import {useRouter} from "next/navigation";
import Image from "next/image";
import styles from "../components/Main/Main.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function HomePage (){
   const [day,setDay]=useState("月");
   const [period,setPeriod]=useState("１限");
   const router =useRouter();

   useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(user)=>{
        if(!user){
            router.push("/login");
        }
    });
    return ()=>unsubscribe();
   },[]);

   const handleSubmit=(e)=>{
    e.preventDefault();
    router.push(`/result?day=${encodeURIComponent(day)}&period=${encodeURIComponent(period)}`);
   };

    return(
        <div>
            <Header />
            <div className={styles.intro}>
                <div className={styles.left}>
                    <p className={`${styles.line} ${styles.line1}`}><span style={{color:"#87CEEB"}}>S</span>hibaura</p>
                    <br/>
                    <p className={`${styles.line} ${styles.line2}`}><span style={{color:"#87CEEB"}}>I</span>nstitute of</p>
                    <br/>
                    <p className={`${styles.line} ${styles.line3}`}><span style={{color:"#87CEEB"}}>T</span>echnology</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.description}>
                        <div>有意義な</div>
                        <div>　学生生活を</div>
                        <div>　　　あなたに</div>
                    </div>
                    
                </div>
                
            </div>
            <main className={styles.main}>
                <div className={styles.title}>
                    曜日と時限を入力して検索してみよう
                </div>
                <div className={styles.content}>
                    <form onSubmit={handleSubmit}>
                        <label>
                            曜日:
                            <select value={day} onChange={(e)=>setDay(e.target.value)}>
                                <option value="月">月</option>
                                <option value="火">火</option>
                                <option value="水">水</option>
                                <option value="木">木</option>
                                <option value="金">金</option>
                                <option value="土">土</option>
                            </select>
                        </label>
                        <br />
                        <label>
                            コマ:
                            <select value={period} onChange={(e)=>setPeriod(e.target.value)}>
                                <option value="１限">１限</option>
                                <option value="２限">２限</option>
                                <option value="３限">３限</option>
                                <option value="４限">４限</option>
                                <option value="５限">５限</option>
                            </select>
                        </label>
                        <br />
                        <button type="submit">
                            <Image src="/buttonSearch.svg" alt="検索ボタン" width={90} height={30}/>
                        </button>
                    </form>
                </div>
                
            </main>
            <Footer />
        </div>
        
    );
}