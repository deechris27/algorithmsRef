// O(n²)

const insertionSort = arr=>{
    for(let i = 1, l=arr.length; i<l; i++){
        for(let j = 0; j<i; j++){
            if(arr[i]<arr[j]){
                const pick = arr.splice(i,1);
                arr.splice(j, 0, pick[0]);
            }
        }
    }
    return arr;
};

console.log(insertionSort([9,2,5,6,10,3,20]));