// union types
var a;
a = 1;
console.log(a);
a = 'Aaron';
console.log(a);
// js quick
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100);
}
// fix for the js quick
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100);
    })(i);
}
