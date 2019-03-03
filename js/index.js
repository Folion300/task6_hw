const n = parseInt(prompt('Enter random number'));
while (Number.isNaN(n)) {
    alert('Please enter a number');
    n = parseInt(prompt('Enter random number'));
}
alert('You entered ' + n);


const resultLoop = fiboLoop(n);
alert('Standart method: ' + resultLoop);
const resultRec = fiboRec(n);
alert('With recursion: ' + resultRec);
const resultArr = fiboArr(n);
alert('With array: ' + resultArr);


function fiboLoop(n) {
    let first = 1;
    let second = 1;
    let next = 0;
    for (let i = 3; i <= n; i++) {
        next = first + second;
        first = second;
        second = next;
    }
    return next;
}


function fiboRec(n) {
    if (n < 2) {
        return n
    }
    return fiboRec(n - 1) + fiboRec(n - 2);
}


function fiboArr(n) {
    const arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}
