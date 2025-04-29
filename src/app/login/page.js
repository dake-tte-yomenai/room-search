"use client";
import {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../lib/firebase";
import {useRouter} from "next/navigation";
import Link from "next/link";
import styles from "./login.module.css"


export default function LoginPage(){
    const router =useRouter();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleLogin=async(e)=>{
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,password);
            router.push(`/home`)
        }catch{
            alert("ログイン失敗");
        }
    };

    return(
        <div>
            <header className={styles.header}>
                <div className={styles.logo}>Welcome to SIT!!!</div>
            </header>
            <main className={styles.main}>
                <h1 className={styles.title}>ログイン画面</h1>
                <div className={styles.content}>メールアドレスとパスワードを入力してください </div>
                <br/>
                <form onSubmit={handleLogin}>
                    <div className={styles.content}>
                    <input 
                        type="email"
                        placeholder="メールアドレス"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required
                    />
                    </div>
                    <br/>
                    <div className={styles.content} >
                        <input
                            type="password"
                            placeholder="パスワード"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <br/>
                    <div className={styles.content} >
                        <button type="submit">ログイン</button>
                    </div>
                    <br/>
                    <br/>
                </form>

                <Link className={styles.title} href="/signup">新規登録の方はこちらへ</Link>
            </main>
            
            <footer className={styles.footer}>created by our</footer>
        </div>
    );

}

