const temperatures = [100, 90, 99, 80, 70, 65, 30, 10];

function templist(brr) {
    let temp = ''
    for (let i = 0; i < brr.length; i++) {
        temp += brr[i]
    }
    return temp;
}

console.log(templist(temperatures))
