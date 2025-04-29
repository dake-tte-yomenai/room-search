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
            <header className={styles.header}>
                <h1>Welcome to SIT!!!</h1>
            </header>
            <main className={styles.main}>
                <h1 className={styles.title}>新規登録</h1>
                <div className={styles.content}>メールアドレスとパスワードを入力して登録してください</div>
                <form onSubmit={handleSignup}>
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
                        <button type="submit">登録</button>
                    </div>
                </form>
                <br/>
                <br/>
                <Link className={styles.title} href="/login">ログインはこちらから</Link>
            </main>
            <footer className={styles.footer}>created by our</footer>
        </div>
    )
}