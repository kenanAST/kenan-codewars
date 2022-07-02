testValue = 'abcdefg'

const splitString = (str) => {
    let value = []
    let temp = '';
    for(let i = 0; i<str.length; i++){
        temp += str[i];
        if(i%2){
            value.push(temp);
            temp =''
        }

        if (str.length%2 == 1 && i == str.length-1){
            temp += '_'
            value.push(temp);
        }
    }
    return value;
}

console.log(splitString(testValue));