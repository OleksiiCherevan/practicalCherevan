const VOWELS = "aeiouyаеиіоуяюєї";

const TransformString = (string) => {
    let res = ''
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        
        if(VOWELS.includes(element)) {
            res += element.toUpperCase()
        } else {
            res += element
        }

    }

    return res
}

console.log(TransformString('Hello my name is alex'));