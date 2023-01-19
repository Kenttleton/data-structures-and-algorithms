import { Queue } from "../Queue";

export class Exercise implements Queue<unknown> {
    [n: number]: unknown;
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
    push(value: unknown): number {
        throw new Error("Method not implemented.");
    }
    pop(): unknown {
        throw new Error("Method not implemented.");
    }
    peekFront(): unknown {
        throw new Error("Method not implemented.");
    }
    peekRear(): unknown {
        throw new Error("Method not implemented.");
    }
    print(): string | void {
        throw new Error("Method not implemented.");
    }
}


