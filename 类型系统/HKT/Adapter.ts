// 关于 HKT with unique symbol 的通配创建方法

// source :: 预设类型

// target :: 输出类型
namespace Adapter {
    interface HKT<S = undefined, T = unknown> {
        [source]: S
        [target]: T
    }

    type CustomHKT<S, T> = HKT<S, T>

    type Preset = 'GoHome'| 'GoSleep';

    type Source<T extends HKT<any, any>> = T[typeof source];
    type $<I extends HKT<any, any>, S extends Source<I>> =
    (I & { [source]: S })[typeof target];
}