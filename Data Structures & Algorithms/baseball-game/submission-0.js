class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        for (let i = 0; i < operations.length; i++) {
            let j = stack.length - 1;
            if (operations[i] === "+") {
                stack.push(stack[j] + stack[j - 1]);
            } else if (operations[i] === "D") {
                stack.push(Number(stack[j] * 2));
            } else if (operations[i] === "C") {
                stack.pop();
            } else {
                stack.push(Number(operations[i]));
            }
        }
        return stack.reduce((sum, score) => sum + score, 0);
    }
}
