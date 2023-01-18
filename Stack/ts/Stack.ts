export interface Stack<T> {
    [n: number]: T;
    length: number;
    index: number;
    max: number;

    isEmpty(): boolean;
    push(value: T): number;
    pop(): T | undefined;
    top(): T | undefined;
    size(): number;
    print();
}