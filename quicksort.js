// O(n log n)

//poor performance when given a sorted list

const quickSort = arr => {
    if(arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for(let i=0, l=arr.length-1; i<l; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];

};

console.log(quickSort([8,4,20,5,91,44,76,87,23,14,56]));