// O(n Log n)

const merge = (left, right)=>{
   const results = [];

   while(left.length && right.length){
       if(left[0]<=right[0]){
           results.push(left.shift());
       }else{
           results.push(right.shift());
       }
   }
   return [...results, ...left, ...right];
};

const mergeSort = arr=>{
   if(arr.length<2){
       return arr;
   }
   const length = arr.length;
   const mid = Math.round(length/2);
   const left = arr.slice(0, mid);
   const right = arr.slice(mid, length);

   return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([3,50,20,12,5,6,9]));





