class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rightMax = arr[arr.length-1];
        for(let i = arr.length-2; i>=0; i--){
            const temp = rightMax;
            rightMax = Math.max(arr[i],rightMax);
            arr[i] = temp;
        }
        arr[arr.length-1] = -1;
        return arr
    }
}
