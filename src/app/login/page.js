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
            const userCredential = await signInWithEmailAndPassword(auth,email,password);
            const user = userCredential.user;
            if(!user.emailVerified){
                alert("メールアドレスが確認できません。メールを確認してください。")
                return;
            }

            router.push(`/home`)
        }catch{
            alert("ログイン失敗");
        }
    };

    return(
        <div>
            <main className={styles.main}>
                <div className={styles.wrapper}>
                    <form onSubmit={handleLogin}>
                        <h1>Login</h1>
                        <div className={styles.inputBox}>
                            <input 
                                type="email"
                                placeholder="メールアドレス"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className={styles.inputBox}>
                            <input 
                                type="password"
                                placeholder="パスワード"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className={styles.btn}>Login</button>
                        <br/>
                        <div className={styles.registerLink}>
                            <p>アカウントを持っていない方は<a href="/signup">こちら</a>へ</p>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );

}

