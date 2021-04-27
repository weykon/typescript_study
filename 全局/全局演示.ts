declare global {
    interface 全局 { }
    interface myGlobal { }
    interface Window{
        myWindowVar: number
    }
}
export namespace 全局 {
    // in ts

    export const anything: any = {}
}