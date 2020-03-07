// O(n²)

const bubblesort = arr=>{
    do{
         var swapped = false;
         for(let i = 0, l=arr.length; i<l; i++){
             if(arr[i]>arr[i+1]){
                 let temp = arr[i];
                 arr[i] = arr[i+1];
                 arr[i+1] = temp;
                 swapped = true;
             }
         }
    }while(swapped);

    return arr;
};

console.log(bubblesort([2,6,9,10,3,1,8,0]));