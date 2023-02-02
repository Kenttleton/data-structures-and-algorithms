oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g card-table
$ card-table COMMAND
running command...
$ card-table (--version)
card-table/0.0.0 win32-x64 node-v16.17.0
$ card-table --help [COMMAND]
USAGE
  $ card-table COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`card-table hello PERSON`](#card-table-hello-person)
* [`card-table hello world`](#card-table-hello-world)
* [`card-table help [COMMANDS]`](#card-table-help-commands)
* [`card-table plugins`](#card-table-plugins)
* [`card-table plugins:install PLUGIN...`](#card-table-pluginsinstall-plugin)
* [`card-table plugins:inspect PLUGIN...`](#card-table-pluginsinspect-plugin)
* [`card-table plugins:install PLUGIN...`](#card-table-pluginsinstall-plugin-1)
* [`card-table plugins:link PLUGIN`](#card-table-pluginslink-plugin)
* [`card-table plugins:uninstall PLUGIN...`](#card-table-pluginsuninstall-plugin)
* [`card-table plugins:uninstall PLUGIN...`](#card-table-pluginsuninstall-plugin-1)
* [`card-table plugins:uninstall PLUGIN...`](#card-table-pluginsuninstall-plugin-2)
* [`card-table plugins update`](#card-table-plugins-update)

## `card-table hello PERSON`

Say hello

```
USAGE
  $ card-table hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/card-table/card-table/blob/v0.0.0/dist/commands/hello/index.ts)_

## `card-table hello world`

Say hello world

```
USAGE
  $ card-table hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ card-table hello world
  hello world! (./src/commands/hello/world.ts)
```

## `card-table help [COMMANDS]`

Display help for card-table.

```
USAGE
  $ card-table help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for card-table.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.1/src/commands/help.ts)_

## `card-table plugins`

List installed plugins.

```
USAGE
  $ card-table plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ card-table plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.2.4/src/commands/plugins/index.ts)_

## `card-table plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ card-table plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ card-table plugins add

EXAMPLES
  $ card-table plugins:install myplugin 

  $ card-table plugins:install https://github.com/someuser/someplugin

  $ card-table plugins:install someuser/someplugin
```

## `card-table plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ card-table plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ card-table plugins:inspect myplugin
```

## `card-table plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ card-table plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ card-table plugins add

EXAMPLES
  $ card-table plugins:install myplugin 

  $ card-table plugins:install https://github.com/someuser/someplugin

  $ card-table plugins:install someuser/someplugin
```

## `card-table plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ card-table plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ card-table plugins:link myplugin
```

## `card-table plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ card-table plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ card-table plugins unlink
  $ card-table plugins remove
```

## `card-table plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ card-table plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ card-table plugins unlink
  $ card-table plugins remove
```

## `card-table plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ card-table plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ card-table plugins unlink
  $ card-table plugins remove
```

## `card-table plugins update`

Update installed plugins.

```
USAGE
  $ card-table plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
