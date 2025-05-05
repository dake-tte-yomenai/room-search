"use client";
import {useState} from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {sendEmailVerification} from "firebase/auth";
import {auth} from "../lib/firebase";
import {useRouter} from "next/navigation";
import Link from "next/link";
import styles from "./signup.module.css";


export default function SignupPage(){
    const router = useRouter();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [loading,setLoading] = useState(false);

    const handleSignup=async(e)=>{
        e.preventDefault();
        setLoading(true);
        try{
            const userCredential = await createUserWithEmailAndPassword(auth,email,password);
            const user = userCredential.user;
            await sendEmailVerification(user);
            alert("登録成功。認証メールを送りました。メールを確認ください。");
            router.push("/login");
        }catch{
            alert("登録失敗");
        }finally{
            setLoading(false);
        }
    };

    return(
        <div>
            <main className={styles.main}>
                <div className={styles.wrapper}>
                    <h1>SignUp</h1>
                    <form onSubmit={handleSignup}>
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
                        <button type="submit" className={styles.btn}>SignUp</button>
                    </form>
                    <div className={styles.pusher}>
                        <p>ログインは<a href="/login">こちら</a>から</p>
                    </div>
                    
                </div>
                
            </main>
        </div>
    )
}