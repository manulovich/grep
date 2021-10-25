import createThree from './three';

const [,, regExp, ...pathFromConsole] = process.argv;
let result = createThree(pathFromConsole)
    .getContent()
    .filter(({ content }) => content && new RegExp(regExp).exec(content))
    .map(token => token.dir);

console.log(result);