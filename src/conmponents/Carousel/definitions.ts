import { addDays } from "date-fns";

export const getDays = (days: number) => {
    const day:Date[] = [];

    for (let i = 0; i < days; i++){
        day.push(addDays(new Date(), i));
    }

    return day;
}

const getRndmNumber = (min: number, max: number) =>{
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    return Math.floor(step2) + min;
}

export const randomNr: number[] = [];

for (let i = 0; i < 4; i++){
    let n = getRndmNumber(1,13)
    randomNr.map(v => v === n ? n = 0 : getRndmNumber(1,13))
    randomNr.push(n);
}