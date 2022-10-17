import { Kind } from "fp-ts/HKT";

declare module 'fp-ts/HKT' {
    interface URItoKind<A> {
        'Three': AGenericSpace<A>;
        'Four': AGenericSpace<A>;
        'Space': AGenericSpace<A>;
    }
}

type AGenericSpace<A> = A;

type FourDimensionalSpace = Kind<'Four', {
    x: number,
    y: number,
    z: number,
    w: number,
}>
type ThreeDimensionalSpace = Kind<'Three', {
    x: number,
    y: number,
    z: number,
}>
// 试试从space的层面加入参数
type WhatSpace = Kind<'Space', {}>
// 这样好像跟原始方式出来的做法差不多

// 但是更多的是，可以对AGenericSpace作抽象，加内容
// 使用字符来对应好类型，字符比手写类型名能更抽象
// 那么这样的话，这种方法是直接用字符，直观地进行映射
// 类似于跳板， 左边类型 和 右边类型 知道， 但是却需要中间一个类型连接


// try default ?
type AGenericSpace_Source<A> = A
type ThreeDimensionalSpace_Source = AGenericSpace_Source<{
    x: number,
    y: number,
    z: number,
}>


// 一种是可以对同一种类型加入不同参数

// 原始的只能一套参数，配一个类型