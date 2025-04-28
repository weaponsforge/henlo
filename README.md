## @weaponsforge/henlo

### Requirements

1. NodeJS LTS (preferrably >= v10)
2. Node project

### Installation

1. Go to a Node project root directory. Install with:<br>
`npm i @weaponsforge/henlo`

### Usage

- **Run from the command terminal**<br>
`npx henlo --name=world`

- **Run as script within a Node project**
   - Create a script in the Node project's `package.json` file.
      ```json
      "scripts": {
        "hey": "npx henlo --name=world"
      },
      ```
   - Run the NPM script<br>
      `npm run hey`

