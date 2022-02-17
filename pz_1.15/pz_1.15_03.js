const VOWELS="aeiouyаеиіоуяюєї";
const CONSONANTS='bcdfghjklmnpqrstvwxzбвгджджздедейклмнпрстфxццчш'

let GetStringInfo = (string ='') => {
    let vovelsCount = 0;
    let consonantsCount = 0;

    for (const char of string) {
        vovelsCount = VOWELS.includes(char) ? vovelsCount + 1 : vovelsCount;
        consonantsCount = CONSONANTS.includes(char) ? consonantsCount + 1 : consonantsCount;
    }

    let res = {
        текст: string,
        голосних: vovelsCount,
        приголосних: consonantsCount
    }

    return res;
};

console.log(GetStringInfo("/home/user/main.jsfkdj/fdjs/.js"));
