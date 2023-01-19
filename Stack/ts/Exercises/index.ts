import { Card } from "../Card";
import { Stack } from "../Stack";

export class Deck implements Stack<Card> {
    [n: number]: Card;
    length: number = 0;
    pointer: number = -1;
    max: number = 52; // Full deck of cards excluding jokers
    
    isEmpty(): boolean {
        throw new Error(`Method not implemented.`);
    }
    push(value: Card): number {
        console.log();
        throw new Error(`Method not implemented. ${JSON.stringify(value)}`);
    }
    pop(): Card | undefined {
        throw new Error(`Method not implemented.`);
    }
    peek(): Card | undefined {
        throw new Error(`Method not implemented.`);
    }
    print() {
        throw new Error(`Method not implemented.`);
    }

}


