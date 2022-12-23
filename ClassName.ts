export class ClassName{
 private CLASS_NAME : RegExp = /^[CAP]\d{4}[GHIKLM]$/;

 public validate(regex: string): boolean{
     return this.CLASS_NAME.test(regex)
 }
}

let className = new ClassName();

console.log(className.validate("C0318G"));
console.log(className.validate("M0318G"));
