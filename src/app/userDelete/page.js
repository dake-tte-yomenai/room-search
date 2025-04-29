"use client";
import {useState,useEffect} from "react";
import {auth} from "../lib/firebase";
import {EmailAuthProvider,reauthenticateWithCredential,deleteUser} from "firebase/auth";
import {useRouter} from "next/navigation";


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
            <form onSubmit={userDelete}>
                <input
                    type="password"
                    placeholder="パスワード"
                    value={inputPassword}
                    onChange={(e)=>setinputPassword(e.target.value)}
                    required
                />
                <button  type="submit">削除</button>
            </form>
            
        </div>
        
    );
}