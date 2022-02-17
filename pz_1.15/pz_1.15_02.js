const REG_EXP = /^.*\.(\S{1,5}?)$/

let CheckPath = (string) => {
    
    let result = ''
    let res = REG_EXP.exec(string)

    return res
}


console.log(CheckPath('/home/user/main.jsfkdj/fdjs/.js'));
