import { Card, Short, Long } from "./Card";
import { Stack } from "./Stack";
import { Symbol, Name } from "./Suit";

export class Deck implements Stack<Card> {
  [n: number]: Card;
  length: number = 0;
  index: number = -1;
  max: number = 52;

  isEmpty(): boolean {
    return this.length === 0;
  }

  push(card: Card): number {
    if (this.length === this.max) {
      console.error("Stack Overflow");
    } else {
      this.index++;
      this[this.index] = card;
      this.length++;
    }
    return this.index;
  }

  pop(): Card | undefined {
    if (this.length === 0) {
      console.error("Stack Underflow");
      return;
    }
    const card = this[this.index];
    this.index--;
    this.length--;
    return card;
  }

  peek(): Card | undefined {
    if (this.length === 0) {
      console.error("Stack Underflow");
      return;
    }
    return this[this.index];
  }

  print() {
    let str = "Bottom -> ";
    for (let i = 0; i <= this.index; i++) {
      str += `${this[i].name.long} of ${this[i].suit.name}`;
      if (i === this.index) {
        str += ` -> Top`;
      } else {
        str += ` -> `;
      }
    }
    console.log(str);
  }
}

export function getFullDeck(): Deck {
  const deck = new Deck();
  for (let i = 1; i <= 4; i++) {
    let suit = "CLUBS";
    switch (i) {
      case 2:
        suit = "SPADES";
        break;
      case 3:
        suit = "HEARTS";
        break;
      case 4:
        suit = "DIAMONDS";
        break;
      default:
        suit = suit;
        break;
    }

    for (let j = 1; j <= 13; j++) {
      let card = "ACE";
      switch (j) {
        case 2:
          card = "TWO";
          break;
        case 3:
          card = "THREE";
          break;
        case 4:
          card = "FOUR";
          break;
        case 5:
          card = "FIVE";
          break;
        case 6:
          card = "SIX";
          break;
        case 7:
          card = "SEVEN";
          break;
        case 8:
          card = "EIGHT";
          break;
        case 9:
          card = "NINE";
          break;
        case 10:
          card = "TEN";
          break;
        case 11:
          card = "JACK";
          break;
        case 12:
          card = "QUEEN";
          break;
        case 13:
          card = "KING";
          break;
        default:
          card = card;
          break;
      }

      deck.push({
        value: j + 1,
        suit: {
          name: Name[suit],
          symbol: Symbol[suit],
          trump: false,
        },
        name: {
          short: Short[card],
          long: Long[card],
        },
      } as Card);
    }
  }
  return deck;
}
