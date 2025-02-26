const decodeString = s => {
    let stack = [];

    for(let char of s){

        // store charater in stack until we find "]"
        if(char != "]"){
            stack.push(char);
            continue;
        }
        // store characters in str
        let cur = stack.pop();
        let str = "";
        while(cur != "["){
            str = cur + str;
            cur = stack.pop()
        }
        // "[" is poped and left in the last loop
        // store number(it is string) in num
        cur = stack.pop()
        let num = "";
        while(!Number.isNaN(Number(cur))){
            num = cur+ num;
            cur = stack.pop();
        }
        stack.push(cur);
        stack.push(str.repeat(num));
    }
    return stack.join("")
};

console.log(decodeString("3[a2[c]]"))