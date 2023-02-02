export enum Name {
    HEARTS = 'Hearts',
    DIAMONDS = 'Diamonds',
    SPADES = 'Spades',
    CLUBS = 'Clubs'
}

export enum Emoji {
    HEARTS = '♥',
    DIAMONDS = '♦',
    SPADES = '♠',
    CLUBS = '♣'
}

export interface Suit {
    name: Name;
    emoji: Emoji;
    trump: boolean;
}
