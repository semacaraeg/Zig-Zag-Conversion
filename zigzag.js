
//zigzag conversion
let convert = function(s, numRows){
    let buckets = [];
    let bucketPointer = 0;
    let pointerDelta = -1;
    //loop through array
    for(let i=0; i < s.length; i++){
        //if it doesn't exist, create
        if(!buckets[bucketPointer]) buckets[bucketPointer] = "";
        //else just add
        buckets[bucketPointer] += s[i];
        //setting the pointerDelta to go up and down (1 or -1)
        if(bucketPointer === 0 || bucketPointer === numRows - 1) pointerDelta *= -1;
        //go up or down
        bucketPointer += pointerDelta;
    }
    return buckets.join('');
}

