console.log('asd')
namespace aTYPE {
    type common = Man | Woman
    function FixInput<common>(t: common) {
        console.log('1')
        let input = t as unknown as { new(): common }
        input instanceof Man ?
            console.log('man', (<Man>input).dick) :

            input instanceof Woman ?
                console.log('woman', (<Woman>input).breast) :
                console.log('unknown')
    }

    class Man {
        public dick: number = 1
    }
    class Woman {
        public breast!: number
    }

    let man = new Man();
    let woman = new Woman();
    FixInput(man)
}