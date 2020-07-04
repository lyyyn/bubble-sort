// [2,4,5,2,9,10,28,-10,-28]
//target [-28,-10,2,2,4,5,9,10,28]
const arr = [2, 4, 5, 2, 9, 10, 28, -10, -28];
let arrLen = arr.length;

const sort = (arr) => {
    for (let i = 1; i < arrLen; i++) {
        for (let j = 0; j < arrLen - i; j++) {
            //everytime find a number that smaller than it
            console.log(`comparing ${arr[j]} with ${arr[j + 1]}`);
            if (arr[j] > arr[j + 1]) {
                console.log(`swap ${arr[j]} with ${arr[j + 1]}`);
                //swap them using the new ES6
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; //swap a & b -> [a,b] = [b,a]
                console.log('after swapped:', arr);
            }
        }
    }
    return arr;
};

console.log(sort(arr));