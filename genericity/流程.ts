namespace 流程 {



    type BlackBox<T> = { In: () => T extends { out: infer R } ? R : T }

    class Init<T>{
        out!: T extends { out: infer R } ? R : T
    }
    class InitSp extends Init<ShaderProgram> implements BlackBox<Init<ShaderProgram>>{
        In() {
            return this.out
        }
    }

    class ShaderProgram {

    }

}