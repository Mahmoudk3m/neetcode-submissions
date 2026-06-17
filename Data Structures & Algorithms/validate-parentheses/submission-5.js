class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{',
        }
        for(const l of s){
            if (closeToOpen[l]) {
                if (stack.length > 0){
                    if (stack.pop()!=closeToOpen[l]) return false
                } else return false
            }
            else stack.push(l);
        }
        return (stack.length === 0 ? true : false);
    }
}
