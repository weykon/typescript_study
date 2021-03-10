console.log('asd')
namespace aTYPE {
    type common = Man | Woman
    function FixInput<common>(t: common) {
        let input = t as unknown as { new(): common }
        input instanceof Man ?
            console.log('man', (<Man>input).mouse) :
            input instanceof Woman ?
                console.log('woman', (<Woman>input).eyes) :
                console.log('unknown')
    }
    class Man {
        public mouse: number = 1
    }
    class Woman {
        public eyes!: number
    }
    let man = new Man();
    let woman = new Woman();
    FixInput(woman)
}