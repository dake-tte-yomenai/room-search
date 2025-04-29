import {readFile} from "fs/promises";
import path from "path";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "../components/Main/Main.module.css";

export default async function ResultPage({searchParams}){
    const { day,period } = searchParams;

    const filePath = path.join(process.cwd(),'public','data','classrooms.json');
    const jsonData = await readFile(filePath,'utf8');
    const classrooms = JSON.parse(jsonData);

               

    const available = classrooms.filter((room)=>
        room.availability.some((slot)=>slot.day===day&&slot.period===period)
    );

    return(
        <div>
            <Header />
            <div className={styles.main}>
                <h1 className={styles.title}>{day}曜日・{period}の空き教室</h1>
                {available.length>0?(
                    <ul>
                        {available.map((room,index)=>(
                            <li className={styles.content} key={index}>{room.name}教室</li>
                        ))}
                    </ul>
                ):(
                    <p>該当する空き教室はありません</p>
                )}
            </div>
            <Footer />
        </div>
    );
}