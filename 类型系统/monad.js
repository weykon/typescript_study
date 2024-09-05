namespace monadjs { 
    class Maybe {
        constructor(value) {
            this.value = value;
        }
        bind(fn) {
            if (!this.value) {
                return this;
            } else {
                let value = fn(this.value);
                return new Maybe(value);
            }
        }
    }
    
    const maybe = new Maybe(5);
    console.log(maybe);
    const result = maybe
        .bind(value => value * 2)
        .bind(value => undefined);
    console.log(result); 
    
}