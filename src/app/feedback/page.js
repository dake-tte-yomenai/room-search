'use client';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import styles from "./feedback.module.css";

export default function FeedbackPage() {
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); //ページのリロードを止める
        console.log('フィードバック:', feedback); //送信された内容を表示
        alert('送信されました!');
    };

    return (
        <div>
            <Header/>

            <div className={styles.main}>
                <div className={styles.box}>
                    <div className={styles.main1}>
                        <h1>
                            フィードバックフォーム
                        </h1>
                    </div>
                    <div className={styles.main2}>
                        <textarea
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            placeholder="ご意見を入力してください"
                            rows="5"
                            colums="40"
                        />
                    </div>
                    <br />
                    <div className={styles.main3}>
                        <button onClick={handleSubmit}>
                        送信
                    </button>
                    </div> 
                </div>
               
            </div>
            <Footer/>
        </div>
    );
}