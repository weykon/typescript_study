import EnemyComp from "../Decorators/case1/EnemyComp";

module 交集 {
    type Name = { name: string }
    type Point = { point: { x: number, y: number } }
    type NamePoint = Name & Point;
    const namePoint:NamePoint = {
        name:'',point:{x:1,y:2}
    }

    type MyBoolean = true | false;

    type Result = MyBoolean & NamePoint // 相交的部分

    // 解释

    type Color<T> = { r: T, g: T, b: T }
    type Cat = { eye: Color<string>, calm: boolean }
    type Dog = { eye: Color<string>, good: boolean }

    // 找出 一个类型 包括Cat和Dog所有属性 的共同类型 
    type CatDogCommon = Cat & Dog

    function lookThem(e: CatDogCommon) {
        e.calm
        e.eye
        e.good
    }
}
