export namespace keyWordIs {
    class Fish {

    }
    class Brid {

    }

    const fish = new Fish()
    const brid = new Brid()
    const unknownAnimal: unknown = {}

    function confirmOutputIsFish(checkEnity: unknown): checkEnity is Fish {
        if (checkEnity instanceof Fish) {
            return true
        } else {
            return false
        }
    }

    confirmOutputIsFish(fish)

    // asserts 
    function test(t: any): asserts t is number {
        if (!t || typeof t !== 'number') {
            throw new Error()
        }
    }

    test("1")

}