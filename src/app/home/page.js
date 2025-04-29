'use client';
import {useState} from "react";
import {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../lib/firebase";
import {useRouter} from "next/navigation";
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
            <main className={styles.main}>
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
                    <button type="submit">検索</button>
                </form>
            </main>
            <Footer />
        </div>
        
    );
}