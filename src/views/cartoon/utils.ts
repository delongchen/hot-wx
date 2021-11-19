const numMap:Record<number, string> = {
    1000: 'k',
    10000: 'w',
}
export const formatLargeNumber = (num:number) => {
    if(num < 1000){
        return num
    }
    if(num > 100000){
        return num.toExponential(1);
    }
    let count = 1;
    while(num >= 10){
        num = Math.floor(num / 10);
        count *= 10;
    }
    return `${num}${numMap[count]}`
}