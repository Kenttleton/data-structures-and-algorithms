import { Long, Short, Card } from "../Card";
import { Name, Symbol } from "../Suit";

export function getFullDeck(): Card[] {
  const deck: Card[] = [];
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

export const fullDeck = [
  {
    value: 1,
    suit: {
      name: Name.CLUBS,
      symbol: Symbol.CLUBS,
      trump: false,
    },
    name: {
      short: Short.ACE,
      long: Long.ACE,
    },
  },
  {
    value: 2,
    suit: {
      name: Name.CLUBS,
      symbol: Symbol.CLUBS,
      trump: false,
    },
    name: {
      short: Short.TWO,
      long: Long.TWO,
    },
  },
  {
    value: 3,
    suit: {
      name: Name.CLUBS,
      symbol: Symbol.CLUBS,
      trump: false,
    },
    name: {
      short: Short.THREE,
      long: Long.THREE,
    },
  },
  {
    value: 4,
    suit: {
      name: Name.CLUBS,
      symbol: Symbol.CLUBS,
      trump: false,
    },
    name: {
      short: Short.FOUR,
      long: Long.FOUR,
    },
  },
  {
    value: 5,
    suit: {
      name: Name.CLUBS,
      symbol: Symbol.CLUBS,
      trump: false,
    },
    name: {
      short: Short.FIVE,
      long: Long.FIVE,
    },
  },
  {
    value: 6,
    suit: {
      name: Name.CLUBS,
      symbol: Symbol.CLUBS,
      trump: false,
    },
    name: {
      short: Short.SIX,
      long: Long.SIX,
    },
  },
  {
    value: 7,
    suit: {
      name: Name.CLUBS,
      symbol: Symbol.CLUBS,
      trump: false,
    },
    name: {
      short: Short.SEVEN,
      long: Long.SEVEN,
    },
  },
  {
    value: 8,
    suit: {
      name: Name.CLUBS,
      symbol: Symbol.CLUBS,
      trump: false,
    },
    name: {
      short: Short.EIGHT,
      long: Long.EIGHT,
    },
  },
  {
    value: 9,
    suit: {
      name: Name.CLUBS,
      symbol: Symbol.CLUBS,
      trump: false,
    },
    name: {
      short: Short.NINE,
      long: Long.NINE,
    },
  },
  {
    value: 10,
    suit: {
      name: Name.CLUBS,
      symbol: Symbol.CLUBS,
      trump: false,
    },
    name: {
      short: Short.TEN,
      long: Long.TEN,
    },
  },
  {
    value: 11,
    suit: {
      name: Name.CLUBS,
      symbol: Symbol.CLUBS,
      trump: false,
    },
    name: {
      short: Short.JACK,
      long: Long.JACK,
    },
  },
  {
    value: 12,
    suit: {
      name: Name.CLUBS,
      symbol: Symbol.CLUBS,
      trump: false,
    },
    name: {
      short: Short.QUEEN,
      long: Long.QUEEN,
    },
  },
  {
    value: 13,
    suit: {
      name: Name.CLUBS,
      symbol: Symbol.CLUBS,
      trump: false,
    },
    name: {
      short: Short.KING,
      long: Long.KING,
    },
  },
  {
    value: 1,
    suit: {
      name: Name.SPADES,
      symbol: Symbol.SPADES,
      trump: false,
    },
    name: {
      short: Short.ACE,
      long: Long.ACE,
    },
  },
  {
    value: 2,
    suit: {
      name: Name.SPADES,
      symbol: Symbol.SPADES,
      trump: false,
    },
    name: {
      short: Short.TWO,
      long: Long.TWO,
    },
  },
  {
    value: 3,
    suit: {
      name: Name.SPADES,
      symbol: Symbol.SPADES,
      trump: false,
    },
    name: {
      short: Short.THREE,
      long: Long.THREE,
    },
  },
  {
    value: 4,
    suit: {
      name: Name.SPADES,
      symbol: Symbol.SPADES,
      trump: false,
    },
    name: {
      short: Short.FOUR,
      long: Long.FOUR,
    },
  },
  {
    value: 5,
    suit: {
      name: Name.SPADES,
      symbol: Symbol.SPADES,
      trump: false,
    },
    name: {
      short: Short.FIVE,
      long: Long.FIVE,
    },
  },
  {
    value: 6,
    suit: {
      name: Name.SPADES,
      symbol: Symbol.SPADES,
      trump: false,
    },
    name: {
      short: Short.SIX,
      long: Long.SIX,
    },
  },
  {
    value: 7,
    suit: {
      name: Name.SPADES,
      symbol: Symbol.SPADES,
      trump: false,
    },
    name: {
      short: Short.SEVEN,
      long: Long.SEVEN,
    },
  },
  {
    value: 8,
    suit: {
      name: Name.SPADES,
      symbol: Symbol.SPADES,
      trump: false,
    },
    name: {
      short: Short.EIGHT,
      long: Long.EIGHT,
    },
  },
  {
    value: 9,
    suit: {
      name: Name.SPADES,
      symbol: Symbol.SPADES,
      trump: false,
    },
    name: {
      short: Short.NINE,
      long: Long.NINE,
    },
  },
  {
    value: 10,
    suit: {
      name: Name.SPADES,
      symbol: Symbol.SPADES,
      trump: false,
    },
    name: {
      short: Short.TEN,
      long: Long.TEN,
    },
  },
  {
    value: 11,
    suit: {
      name: Name.SPADES,
      symbol: Symbol.SPADES,
      trump: false,
    },
    name: {
      short: Short.JACK,
      long: Long.JACK,
    },
  },
  {
    value: 12,
    suit: {
      name: Name.SPADES,
      symbol: Symbol.SPADES,
      trump: false,
    },
    name: {
      short: Short.QUEEN,
      long: Long.QUEEN,
    },
  },
  {
    value: 13,
    suit: {
      name: Name.SPADES,
      symbol: Symbol.SPADES,
      trump: false,
    },
    name: {
      short: Short.KING,
      long: Long.KING,
    },
  },
  {
    value: 1,
    suit: {
      name: Name.HEARTS,
      symbol: Symbol.HEARTS,
      trump: false,
    },
    name: {
      short: Short.ACE,
      long: Long.ACE,
    },
  },
  {
    value: 2,
    suit: {
      name: Name.HEARTS,
      symbol: Symbol.HEARTS,
      trump: false,
    },
    name: {
      short: Short.TWO,
      long: Long.TWO,
    },
  },
  {
    value: 3,
    suit: {
      name: Name.HEARTS,
      symbol: Symbol.HEARTS,
      trump: false,
    },
    name: {
      short: Short.THREE,
      long: Long.THREE,
    },
  },
  {
    value: 4,
    suit: {
      name: Name.HEARTS,
      symbol: Symbol.HEARTS,
      trump: false,
    },
    name: {
      short: Short.FOUR,
      long: Long.FOUR,
    },
  },
  {
    value: 5,
    suit: {
      name: Name.HEARTS,
      symbol: Symbol.HEARTS,
      trump: false,
    },
    name: {
      short: Short.FIVE,
      long: Long.FIVE,
    },
  },
  {
    value: 6,
    suit: {
      name: Name.HEARTS,
      symbol: Symbol.HEARTS,
      trump: false,
    },
    name: {
      short: Short.SIX,
      long: Long.SIX,
    },
  },
  {
    value: 7,
    suit: {
      name: Name.HEARTS,
      symbol: Symbol.HEARTS,
      trump: false,
    },
    name: {
      short: Short.SEVEN,
      long: Long.SEVEN,
    },
  },
  {
    value: 8,
    suit: {
      name: Name.HEARTS,
      symbol: Symbol.HEARTS,
      trump: false,
    },
    name: {
      short: Short.EIGHT,
      long: Long.EIGHT,
    },
  },
  {
    value: 9,
    suit: {
      name: Name.HEARTS,
      symbol: Symbol.HEARTS,
      trump: false,
    },
    name: {
      short: Short.NINE,
      long: Long.NINE,
    },
  },
  {
    value: 10,
    suit: {
      name: Name.HEARTS,
      symbol: Symbol.HEARTS,
      trump: false,
    },
    name: {
      short: Short.TEN,
      long: Long.TEN,
    },
  },
  {
    value: 11,
    suit: {
      name: Name.HEARTS,
      symbol: Symbol.HEARTS,
      trump: false,
    },
    name: {
      short: Short.JACK,
      long: Long.JACK,
    },
  },
  {
    value: 12,
    suit: {
      name: Name.HEARTS,
      symbol: Symbol.HEARTS,
      trump: false,
    },
    name: {
      short: Short.QUEEN,
      long: Long.QUEEN,
    },
  },
  {
    value: 13,
    suit: {
      name: Name.HEARTS,
      symbol: Symbol.HEARTS,
      trump: false,
    },
    name: {
      short: Short.KING,
      long: Long.KING,
    },
  },
  {
    value: 1,
    suit: {
      name: Name.DIAMONDS,
      symbol: Symbol.DIAMONDS,
      trump: false,
    },
    name: {
      short: Short.ACE,
      long: Long.ACE,
    },
  },
  {
    value: 2,
    suit: {
      name: Name.DIAMONDS,
      symbol: Symbol.DIAMONDS,
      trump: false,
    },
    name: {
      short: Short.TWO,
      long: Long.TWO,
    },
  },
  {
    value: 3,
    suit: {
      name: Name.DIAMONDS,
      symbol: Symbol.DIAMONDS,
      trump: false,
    },
    name: {
      short: Short.THREE,
      long: Long.THREE,
    },
  },
  {
    value: 4,
    suit: {
      name: Name.DIAMONDS,
      symbol: Symbol.DIAMONDS,
      trump: false,
    },
    name: {
      short: Short.FOUR,
      long: Long.FOUR,
    },
  },
  {
    value: 5,
    suit: {
      name: Name.DIAMONDS,
      symbol: Symbol.DIAMONDS,
      trump: false,
    },
    name: {
      short: Short.FIVE,
      long: Long.FIVE,
    },
  },
  {
    value: 6,
    suit: {
      name: Name.DIAMONDS,
      symbol: Symbol.DIAMONDS,
      trump: false,
    },
    name: {
      short: Short.SIX,
      long: Long.SIX,
    },
  },
  {
    value: 7,
    suit: {
      name: Name.DIAMONDS,
      symbol: Symbol.DIAMONDS,
      trump: false,
    },
    name: {
      short: Short.SEVEN,
      long: Long.SEVEN,
    },
  },
  {
    value: 8,
    suit: {
      name: Name.DIAMONDS,
      symbol: Symbol.DIAMONDS,
      trump: false,
    },
    name: {
      short: Short.EIGHT,
      long: Long.EIGHT,
    },
  },
  {
    value: 9,
    suit: {
      name: Name.DIAMONDS,
      symbol: Symbol.DIAMONDS,
      trump: false,
    },
    name: {
      short: Short.NINE,
      long: Long.NINE,
    },
  },
  {
    value: 10,
    suit: {
      name: Name.DIAMONDS,
      symbol: Symbol.DIAMONDS,
      trump: false,
    },
    name: {
      short: Short.TEN,
      long: Long.TEN,
    },
  },
  {
    value: 11,
    suit: {
      name: Name.DIAMONDS,
      symbol: Symbol.DIAMONDS,
      trump: false,
    },
    name: {
      short: Short.JACK,
      long: Long.JACK,
    },
  },
  {
    value: 12,
    suit: {
      name: Name.DIAMONDS,
      symbol: Symbol.DIAMONDS,
      trump: false,
    },
    name: {
      short: Short.QUEEN,
      long: Long.QUEEN,
    },
  },
  {
    value: 13,
    suit: {
      name: Name.DIAMONDS,
      symbol: Symbol.DIAMONDS,
      trump: false,
    },
    name: {
      short: Short.KING,
      long: Long.KING,
    },
  },
];
