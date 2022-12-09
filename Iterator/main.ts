function DefineAIteratorFn() {
    const foo = function* () {
        yield 'a';
        yield 'b';
        yield 'c';
    };

    let str = '';
    for (const val of foo()) {
        str = str + val;
    }

    console.log(str);
    // expected output: "abc"

}



namespace RuntimeForComplex {
    // if the iterator get the object ending what will happen


    // if the object increase new element what will happen
}