export interface Suit {
    name: Name;
    symbol: Symbol;
    trump: boolean;
} 

export enum Name {
    HEARTS = "Hearts",
    DIAMONDS = "Diamonds",
    SPADES = "Spades",
    CLUBS = "Clubs"
}

export enum Symbol {
    HEARTS = '♥',
    DIAMONDS = '♦',
    SPADES = '♠',
    CLUBS = '♣'
}