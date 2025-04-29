export function getCurrentPeriodInfo(){
    const now = new Date();
    const dayList = ['日','月','火','水','木','金','土'];
    const day = dayList[now.getDay()];

    const hour = now.getHours();
    const minute = now.getMinutes();
    const time = hour*60+minute;

    let period;

    if(time>=540 && time<640) period="１限";
    else if(time>650 && time<750) period="２限";
    else if(time>800 && time<900) period="３限";
    else if(time>910 && time<1010) period="４限";
    else if(time>1020 && time<1120) period="５限";
    else if(time>1130 && time<1230) period="６限";
    else period ='none';

    return {day,period};
}