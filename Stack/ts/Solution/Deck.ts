import { Card } from "../Card";
import { Stack } from "../Stack";

export class Deck implements Stack<Card> {
  [n: number]: Card;
  length: number = 0;
  pointer: number = -1;
  max: number = 52;

  isEmpty(): boolean {
    return this.length === 0;
  }

  push(card: Card): number {
    if (this.length === this.max) {
      console.error("Stack Overflow");
    } else {
      this.pointer++;
      this[this.pointer] = card;
      this.length++;
    }
    return this.length;
  }

  pop(): Card | undefined {
    if (this.length === 0) {
      console.error("Stack Underflow");
      return;
    }
    const card = this[this.pointer];
    this.pointer--;
    this.length--;
    return card;
  }

  peek(): Card | undefined {
    if (this.length === 0) {
      console.error("Stack Underflow");
      return;
    }
    return this[this.pointer];
  }

  print() {
    let str = "Bottom -> ";
    for (let i = 0; i <= this.pointer; i++) {
      str += `${this[i].name.long} of ${this[i].suit.name}`;
      if (i === this.pointer) {
        str += ` -> Top`;
      } else {
        str += ` -> `;
      }
    }
    console.log(str);
  }
}
