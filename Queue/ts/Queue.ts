export interface Queue<T> {
    [n: number]: T;
    length: number;
    frontPointer: number;
    rearPointer: number;
    max: number;

    isEmpty(): boolean;
    isFull(): boolean;
    push(value: T): number;
    pop(): T | undefined;
    peekFront(): T | undefined;
    peekRear(): T | undefined;
    print(): void | string;
}