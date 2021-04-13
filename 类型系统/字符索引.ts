module 字符索引 {
    type PropString<T> = { [P in keyof T]: string };

    const obj: { myProp: number } = {
        myProp: 1,
    }

    
}