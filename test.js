var nome = 'pippo';
var cognome = 'ciao';
var age = 18;
var hasPowers = true;
var children = ["ciao", "ss"];
var Person = {
    nome: "pippo", age: 30
};
function go(direction, distance) {
    if (direction === void 0) { direction = "left"; }
    if (distance === void 0) { distance = 100; }
}
go("right");
go();
go("left", 50);
function drive(param) {
}
drive({ distance: 100 });
function add(x, y) {
    if (x === void 0) { x = 10; }
    if (y === void 0) { y = 50; }
    return x + y;
}
add(10, 50) + 100;
var add2 = function (x) {
};
var add3 = function (x) {
};
var multiply = function (x) {
    return x * 2;
};
