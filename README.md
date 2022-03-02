# ESLint Setup and Usage
Enforcing JS code standards and style via ESLint.

For a quick setup:
`npm install -s eslint eslint-plugin-jsdoc`
Then copy .vscode and .eslintrc.json from this directory into your project.

## Setup
Setup involves first installing eslint via npm, configuring eslint to use specific rules/style, and finally using eslint via the cli or your IDE. 

- Run `npm init` to create a package.json
    - this file can be used solely for eslint
- Install via npm by running `sudo npm install -g eslint` to install globally, or `npm install -s eslint` which will add it to package.json as a dev dependency
- Run `npm init @eslint/config` to configure eslint
- You will be asked the following questions:
    - How would you like to use ESLint?
        - "To check syntax, find problems, and enforce code style"
    - What type of modules does your project use?
        - "JavaScript modules (import/export)"
    - Which framework does your project use?
        - "Vue.js"
    - Does your project use TypeScript?
        - "No"
    - Where does your code run?
        - "Browser"
    - How would you like to define a style for your project? 
        - "Use a popular style guide"
    - Which style guide do you want to follow?
        - "Google: https://github.com/google/eslint-config-google"
    - What format do you want your config file to be in?
        - "JSON"

You may then be asked to install some dependencies with npm.

## Further Config - JSDoc
JSDoc is a string that serves to document your code by describing a function's signature (arguments, types, return value). VS code will honor these strings and display them when the developer goes to call a function, look up a function definition, etc.

First, install the plugin: `npm install -s eslint-plugin-jsdoc`
You will have to list the plugin under the plugins key in eslintrc, and the recommended jsdoc rules under extends key as well.

Documentation of the plugin: https://www.npmjs.com/package/eslint-plugin-jsdoc


Eslint is now installed and configured! It can be used two different ways.

## Usage via CLI
You can check a file with eslint by running `eslint path/to/file`. You can check all files in a directory in the same way.

You can also format a file in-place by running `eslint --fix path/to/file`.

## Usage via IDE (VS Code)
Install the Microsoft ESlint extension and reload VS Code. You should then see all issues with your code underlined.

Then, for format on save (`eslint --fix`), you can copy the .vscode directory in this repository to your project, or generate your own by editing settings.json via workspace settings, and pasting in this repository's settings.json.

## More on Style Guides
Here is a brief but helpful style guide comparison between three of the big style guides that eslint offers out of the box:
https://betterprogramming.pub/comparing-the-top-three-style-guides-and-setting-them-up-with-eslint-98ea0d2fc5b7

You can override any rules from a given style under the rules key in .eslintrc.json.

## In-browser Demo of Linting
https://eslint.org/demo
You can also generate the rc file here.