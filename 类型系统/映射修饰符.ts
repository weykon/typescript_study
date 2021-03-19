module 映射修饰符 {
    // Removes 'readonly' attributes from a type's properties
    type CreateMutable<Type> = {
        -readonly [Property in keyof Type]: Type[Property];
    };

    type LockedAccount = {
        readonly id: string;
        readonly name: string;
    };

    type UnlockedAccount = CreateMutable<LockedAccount>;
    //   ^?
}