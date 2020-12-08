//1.Array reverse method in js  without in built function
let arr = [1, 2, 3, 4]
let newArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
}
console.log(newArr)

2.//slice operatopr in array
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
let newArr1 = [];
function foo(a) {
    for (let i = a; i < animals.length; i++) {
        newArr1.push(animals[i])
    }
    return newArr1;
}
var e = foo(2)
console.log(e)

let newArr2 = [];
function foo1(a, b = null) {
    for (let i = a; i < animals.length - 1; i++) {
        newArr2.push(animals[i])
    }
    return newArr2
}
var fg = foo1(2, 4)
console.log(fg)
3.//chunk function
var newArr3 = []
var newArr4 = []
var newArr5 = []
function chunk(a, b) {
    for (var i = 0; i < b; i++) {
        newArr3.push(a[i])
    }
    var g = newArr3;
    console.log(g)
    for (let i = b; i < a.length; i++) {
        newArr4.push(a[i])
    }
    var h = newArr4
    // console.log(h)
    newArr5.push(g)
    newArr5.push(h)

    return newArr5

}
var hi = chunk(['a', 'b', 'c', 'd'], 3)
console.log(hi)

4.//find index of the array element

function findIndesx(a) {
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        count++;
        if (arr1[i] == a) {
            //console.log(count-1)
            break;
        }
        count = 0;
    }
    return count - 1;
}
let arr1 = [1, 3, 4, 2, 3, 8]
let res = findIndesx(9)
console.log(res)

5.//Find last index in an array
let given_Arr = [1, 2, 3, 4, 5, 6]
function abc(a) {
    if (a == given_Arr[given_Arr.length - 1]) {
        return given_Arr.length - 1
    }
    else {
        return 0;
    }
}

let result = abc(6)

console.log(result)

6.//last function in arrray in js
var newArr25 = [1, 2, 3]
function last(abc) {
    return newArr25[newArr25.length - 1]
}
var eghy = last(abc)
console.log(eghy)

7.//remove functionion array
var array = [1, 2, 3, 4];
var evens = []
var newArr542 = []
function remove(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            evens.push(array[i])
        }
        else {
            newArr542.push(array[i])
        }
    }
    var array1 = newArr542;
    console.log(evens)//[2,4]
    console.log(array1)//[1,3]

}
remove([1, 2, 3, 4])

//8.trim function in string
var s = "    abc   "
//console.log(s.length)
var t = ""
//console.log(typeof(t))
for (var i = 0; i < s.length; i++) {
    if (('a' <= s[i]) && (s[i] <= 'z')) {
        t = t + s[i]


    }
}
console.log(t)

//9.Starts with 
var st = "abc"
function startsWith(uv, af) {
    if (af == st[0]) {
        console.log(true)
    }
    else {
        console.log(false)
    }

}
startsWith(st, 'b')
//10.repeat function in js
function abcdefg(s1, m) {

    if (m > 0) {
        var t = "";

        for (var i = 0; i < m; i++) {
            t = t + s1;
        }
        console.log(t)
    }
    else {
        var str1234 = " "
        console.log(str1234);
    }

}
abcdefg('abc', 0)

//11.reduce function in js
function reduce(numbers) {
    let sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i]
    }
    return sum;
}
var result12345 = reduce([1, 2, 3, 4])
console.log(result12345)
//12.sum function in js
function sum234(digu) {
    let nwq = 0;
    for (var i = 0; i < digu.length; i++) {
        nwq += digu[i]
    }
    return nwq
}
var thu = sum234([10, 2, 33, 56])
console.log(thu)

//13.filter function in js
function filter(arr, filterFunc) {
    let filterArr = [];
    // empty array     
    // loop though array  
    for (let i = 0; i < arr.length; i++) {
        const result = filterFunc(arr[i], i, arr);
        // push the current element if result is true   
        if (result)
            filterArr.push(arr[i]);
    }
   return filterArr;
}
const oddArr2 = filter([1,2,34,5,6], num => num % 2 === 0);
console.log(oddArr2);

//fIND FUNCTION IN JS
function filter1(arr987, filterFunc32) {
    let filterArr12= [];
    // empty array     
    // loop though array  
    for (let i = 0; i < arr987.length; i++) {
        const result = filterFunc32(arr[i], i, arr);
        // push the current element if result is true   
        if (result){
            filterArr12.push(arr987[i]);
            break;
        }
    }
   return filterArr12;
}
const oddArr3 = filter1([5, 12, 8, 130, 44], num => num % 2 === 0 );
console.log(oddArr3);




