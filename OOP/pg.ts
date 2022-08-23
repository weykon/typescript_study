export namespace OOP_playground {
    interface whatWouldBeHappen {
        (...anys: any[]): number;
    }

    const a: whatWouldBeHappen = (i: number) => 1

    console.log(a(2));

}