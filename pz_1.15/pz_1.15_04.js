const REG_EXP_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

const ValidateEmail = (email) => {
    return REG_EXP_EMAIL.test(email);
};

console.log(ValidateEmail('test@test.test'));