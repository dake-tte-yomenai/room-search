'use client';
import {useState} from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {getCurrentPeriodInfo} from "../../getNowTime/timeUtils";
import {signOut} from "firebase/auth";
import {auth} from "../../lib/firebase";

export default function Header(){
    const [isOpen,setIsOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    };

    const handleNowClick = () =>{
        const {day,period}=getCurrentPeriodInfo();
        if(period==='none'){
            alert("現在は授業時間外です");
        }else{
            router.push(`/result?day=${day}&period=${period}`);
            setIsOpen(false);
        }
    };

    const handleLogout=async()=>{
        try{
            await signOut(auth);
            router.push("/login");
        }catch(error){
            console.error("ログアウト失敗",error.message);
        }
    };

    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/home">Welcome to SIT !!!</Link>
            </div>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                ≡
                {isOpen && (
                    <div className={styles.dropdown}>
                        <Link href="/home">ホーム</Link>
                        <Link href="/rule">利用規約</Link>
                        <button onClick={handleNowClick} className={styles.Button}>
                            現在の空き教室一覧
                        </button>
                        <button onClick={handleLogout} className={styles.Button}>
                            ログアウト
                        </button>
                        <Link href="/userDelete">ユーザー削除</Link>
                        <Link href="/feedback">フィードバック</Link>
                    </div>  

                )}
            </div>
        </header>
    );
}