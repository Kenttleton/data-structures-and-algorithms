import { Queue } from '../Queue';
import type { Unit } from '../Units';

export class UnitQueue<Unit> implements Queue<Unit> {
    [n: number]: Unit;
    length: number = 0;
    frontPointer: number = 0;
    rearPointer: number = 0;
    max: number = 5;
    isEmpty(): boolean {
        return this.length === 0;
    }
    isFull(): boolean {
        return this.length === this.max;
    }
    push(value: Unit): number {
        if (this.isFull()) {
            console.error(`Queue Overflow`);
            return this.length;
        }
        this[this.rearPointer] = value;
        this.rearPointer += 1;
        this.length += 1;
        return this.length;
    }
    pop(): Unit | undefined {
        if (this.isEmpty()) {
            console.error(`Queue Underflow`);
            return;
        }
        const popped = new Object(this[this.frontPointer]) as Unit;
        this.frontPointer += 1;
        this.length -= 1;
        return popped;
    }
    peekFront(): Unit | undefined {
        if (this.isEmpty()) {
            console.error(`Queue Underflow`);
            return;
        }
        return new Object(this[this.frontPointer]) as Unit;
    }
    peekRear(): Unit | undefined {
        if (this.isFull()) {
            console.error(`Queue Overflow`);
            return;
        }
        new Object(this[this.rearPointer]) as Unit;
    }
    print(): string | void {
        let str = ``;
        for(let i = this.frontPointer; i < this.rearPointer; i++) {
            if (i !== this.rearPointer - 2) {
                str += `,\n`;
            }
            str += JSON.stringify(this[i]);
        }
        console.log(str);
    }
}