// @target: es6
// @lib: es2017
declare const i: Iterable<number>;
function* f() {
    for await (const x of i) {
    }
}