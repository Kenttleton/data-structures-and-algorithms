import { Suit } from "./Suit";

export interface Card {
    value: number;
    suit: Suit;
    name: Name;
}

export interface Name {
    short: Short;
    long: Long;
} 

export enum Short {
    TWO = '2',
    THREE = '3',
    FOUR = '4',
    FIVE = '5',
    SIX = '6',
    SEVEN = '7',
    EIGHT = '8',
    NINE = '9',
    TEN = '10',
    JACK = 'J',
    QUEEN = 'Q',
    KING = 'K',
    ACE = 'A'
}

export enum Long {
    TWO = 'Two',
    THREE = 'Three',
    FOUR = 'Four',
    FIVE = 'Five',
    SIX = 'Six',
    SEVEN = 'Seven',
    EIGHT = 'Eight',
    NINE = 'Nine',
    TEN = 'Ten',
    JACK = 'Jack',
    QUEEN = 'Queen',
    KING = 'King',
    ACE = 'Ace'
}