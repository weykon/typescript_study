import { 属于A模块的 } from './一个模块';
export namespace 命名空间分模块导出_设立唯一出口 {
    export import AAA = 属于A模块的
}


// 使用 
命名空间分模块导出_设立唯一出口.AAA.create();