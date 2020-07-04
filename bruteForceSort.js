// [2,4,5,2,9,10,28,-10,-28]
//target [-28,-10,2,2,4,5,9,10,28]
const arr = [2,4,5,2,9,10,28,-10,-28];

const sort = (arr) => {
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            //everytime find a number that smaller than it
            if (arr[i] > arr[j]) {
                //swap them
                // temp = arr[i];
                // arr[i] = arr[j];
                // arr[j] = temp;

                //swap them using the new ES6
                [arr[i],arr[j]] = [arr[j],arr[i]]; //swap a & b -> [a,b] = [b,a]
            }
        }
    }
    return arr;
};

console.log(sort(arr));