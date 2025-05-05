"use client";
import {useState,useEffect} from "react";
import {auth} from "../lib/firebase";
import {EmailAuthProvider,reauthenticateWithCredential,deleteUser} from "firebase/auth";
import {useRouter} from "next/navigation";
import Header from "../components/Header/Header";
import styles from "./userDelete.module.css";
import Footer from "../components/Footer/Footer";
import Image from "next/image";


export default function UserDelete(){
    const [inputPassword,setinputPassword] = useState("");
    const [currentUser,setCurrentUser] = useState(null);
    const router = useRouter();

    useEffect(()=>{
        setCurrentUser(auth.currentUser);
    },[]);

    const userDelete=async(e)=>{
        e.preventDefault();
        if(currentUser){
            const credential = EmailAuthProvider.credential(currentUser.email,inputPassword);

            try{
                await reauthenticateWithCredential(currentUser,credential);
                await deleteUser(currentUser);
                alert("ユーザーを削除しました");
                router.push(`/login`)

            }catch{
                alert("削除に失敗しました。")
            }
        }
    };
                
    return(
        <div>
            <Header/>
            <main className={styles.main}>
                <h1 className={styles.title}>ユーザーの削除を行います</h1>
                <br/>
                <h2 className={styles.content}>パスワードを入力してください</h2>
                <form onSubmit={userDelete} className={styles.content}>
                    <input
                        type="password"
                        placeholder="パスワード"
                        value={inputPassword}
                        onChange={(e)=>setinputPassword(e.target.value)}
                        required
                    />
                    <br/>
                    <button  type="submit">
                        <Image src="/buttonDelete.svg" alt="削除ボタン" width={70} height={25}/>
                    </button>
                </form>
            </main>
            <Footer/>
            
        </div>
        
    );
}