let 이름 :string = 'kim';

let 이름2 :string[] = ['kim', 'park'];

let 이름3 :string | number = 123;

type Name = string | number;
let 이름4 :Name = 'kim';

// 매개변수에도 타입 지정 가능, return도 타입지정 가능
function 함수(x :number) :number{
    return x * 2;
}

// 아래처럼 타입을 array 형태로 짜면, 첫 번째는 number, 두 번째는 boolean 형태
type Member = [number, boolean];
let john:Member = [123, true];

// name이라는 속성이 무조건 들어가야 하고, 그거에 대한 것은 string
type Member2 = {
    name : string
}
let john2 : Member2 = {
    name : 'kim'
}

// 글자로 된 모든 object 속성의 타입은 string
type Member3 = {
    [key :string] : string
}
let john3 : Member3 = { name : 'kim', age : '123'};