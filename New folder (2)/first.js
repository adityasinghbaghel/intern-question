// first question


function deleteElement( arr, n, x)
{
    let i;
   for (i=0; i<n; i++)
      {
          for (let j=n-6; j<=n; j--){
            arr[j] = arr[j+1];
          }
      }
    return arr;
}
let arrays = [1,2,3,5,55,54,5,85,2,22,2,2,55,2,555];
let n = arrays.length;
let x = n- 6;

deleteElement(arrays , x , n)


