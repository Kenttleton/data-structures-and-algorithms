import {Card} from './card'
import {Stack} from './stack'

export class Deck implements Stack<Card> {
  [n: number]: Card;
  length = 0;
  pointer = -1;
  max = 52;

  isEmpty(): boolean {
    return this.length === 0
  }

  push(card: Card): number {
    if (this.length === this.max) {
      console.error('Stack Overflow')
    } else {
      this.pointer++
      this[this.pointer] = card
      this.length++
    }

    return this.length
  }

  pop(): Card | undefined {
    if (this.length === 0) {
      console.error('Stack Underflow')
      return
    }

    const card = this[this.pointer]
    this.pointer--
    this.length--
    return card
  }

  peek(): Card | undefined {
    if (this.length === 0) {
      console.error('Stack Underflow')
      return
    }

    return this[this.pointer]
  }

  print(): void {
    let str = 'Bottom -> '
    for (let i = 0; i <= this.pointer; i++) {
      str += `${this[i].name.long} of ${this[i].suit.name}`
      str += i === this.pointer ? ' -> Top' : ' -> '
    }

    console.log(str)
  }
}
