
module 片段 {
    type User = { id: number, name: string, birthday: number }

    const user: User = {
        id: 1, name: "a", birthday: 2
    }
    function upateUserData(id: User[`id`], data: Partial<User>) {
        data?.birthday
        data?.id
        data?.name
        id
    }
    type myPartial<T> = { [P in keyof T]?: T[P] }


    type destroyKey<Target> = { [P in keyof Target]: null }

    type normal = { name: string }

    function destroy<Target>(target: destroyKey<normal>) {
        target.name = "asd"; // err
    }


    // 类中属性限制再次练习
    type IQ = "low" | "hight"
    type Brain = `Left${IQ}Right`
    type Stupid = null
    type Clever = `${Brain}` & { iq: number }
    type Human = `${Clever}${IQ}` | Stupid

    function exam(human: Human): Stupid | Clever | unknown {
        const assumn = human as Clever
        if (assumn.iq < 70) {
            return null
        } else if (assumn.iq >= 70 && assumn.iq <= 85) {
            return assumn
        }
    }


    type a = number
    type b = string
    type c = a & b; //never

    type f = { a: number }
    type g = { b: number }
    type h = f & g
    const i: h = { a: 2, b: 3 }
}