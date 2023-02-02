import {Args, Command, Flags} from '@oclif/core'

export default class Dealer extends Command {
  static description = 'Dealer functions'

  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {
    shuffle: Flags.string({char: 's', description: 'Shuffle deck of cards before dealing', required: false}),
  }

  static args = {
    player: Args.string({description: 'A player in which to deal a card', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Dealer)

    this.log(`hello ${args.player} from ${flags.shuffle}`)
  }
}
