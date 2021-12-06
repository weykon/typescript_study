namespace 子类类型 {
    type SonType<F> = F extends infer S ? S : never;

    class Father {

    }
    class Son extends Father {

    }
    class Other { }

    type mSon = SonType<Father>
    type isSon = SonType<Son>
}