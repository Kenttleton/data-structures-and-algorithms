import {Args, Command, Flags} from '@oclif/core'

export default class Player extends Command {
  static description = 'Player functions'

  static examples = [
    `$ oex hello friend --from oclif
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static flags = {
    show: Flags.string({char: 's', description: 'Show player hand', required: false}),
  }

  static args = {
    play: Args.string({description: 'Play a card', required: false}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Player)

    if (flags.show) {
      // Show hand
    }

    if (args.play !== undefined) {
      this.log(`Play card ${args.play}`)
    }
  }
}
