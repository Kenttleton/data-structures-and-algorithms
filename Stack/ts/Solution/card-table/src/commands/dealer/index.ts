import {Args, Command, Flags} from '@oclif/core'

export default class Dealer extends Command {
  static description = 'Dealer functions'

  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {
    shuffle: Flags.boolean({char: 's', description: 'Shuffle deck of cards before dealing', required: false}),
    card: Flags.boolean({char: 'c', description: 'Deal a card to console', required: false}),
  }

  static args = {
    player: Args.string({description: 'A player in which to deal a card', required: false}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Dealer)
    if (flags.card) {
      this.log('%c ', 'background-size: 800px 324px; background: no-repeat url(./images/cards-deck-of-cards-sprite-sheet-800x324.png);')
    }

    if (args.player !== undefined) {
      this.log(`Deal to ${args.player}`)
    }
  }
}
