import { Queue } from "../Queue";
import { Unit } from "../Units";

export class Exercise implements Queue<Unit> {
    [n: number]: Unit;
    length: number = 0;
    frontPointer: number = -1;
    rearPointer: number = 0;
    max: number = 208; // 4 decks of 52 cards 

    isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }
    isFull(): boolean {
        throw new Error("Method not implemented.");
    }
    push(value: Unit): number {
        throw new Error("Method not implemented.");
    }
    pop(): Unit {
        throw new Error("Method not implemented.");
    }
    peekFront(): Unit {
        throw new Error("Method not implemented.");
    }
    peekRear(): Unit {
        throw new Error("Method not implemented.");
    }
    print(): string | void {
        throw new Error("Method not implemented.");
    }
}


