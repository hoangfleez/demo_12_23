let regexNumber: RegExp = /^[+0-9]{5}$/;
console.log(regexNumber.test('123456'));


// let regexpEmail = new RegExp('^[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,4}$');
// console.log(regexpEmail.test('ajsgfasdsgsdgj.com'));

let regexpEmail = new RegExp(/^((?!(badstring)).)*$/);
console.log(regexpEmail.test('marco@expertcodebolg.com'));

