namespace Ouerrrrrr {


    function funcDecorator(target: any) {
        console.log('decorator', target)
    }
    
    class SomeClass {

        @funcDecorator //报错。  不成立    
        todo() {

        }
    }
}