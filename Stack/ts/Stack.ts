export interface Stack<T> {
    [n: number]: T;
    length: number;
    pointer: number;
    max: number;

    isEmpty(): boolean;
    push(value: T): number;
    pop(): T | undefined;
    peek(): T | undefined;
    print(): void | string;
}