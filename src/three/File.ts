import fs from 'fs';
import { SystemElement } from './interface';
import Token from './Token';

class File implements SystemElement {
    dir: string;
    name: string;

    constructor(dir: string, name: string) {
        this.dir = dir;
        this.name = name;
    }

    getContent(): Token[] {
        try {
            const content = fs.readFileSync(this.dir);
            return [new Token(this.name, this.dir, content.toString())];
        } catch {
            return [new Token(this.name, this.dir, null)];
        }
    }
}

export default File;