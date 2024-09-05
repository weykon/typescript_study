namespace monaldts {
    class Monad<T> {
        constructor(public value: T) {
        }
        static of<T>(value: T) {
            return new Monad(value);
        }
        map<R>(fn: (value: T) => R) {
            return Monad.of(fn(this.value));
        }
        join() {
            return this.value;
        }
        flatMap<R>(fn: (value: T) => Monad<R>) {
            return this.map(fn).join();
        }
    }
    const m = Monad.of(1);
    const result = m.flatMap(value => Monad.of(value + 1));
    console.log(result);

}