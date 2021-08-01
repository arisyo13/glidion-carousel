import { addDays } from "date-fns";

export const getDays = (days: number) => {
    const day:Date[] = [];

    for (let i = 0; i < days; i++){
        day.push(addDays(new Date(), i));
    }

    return day;
}