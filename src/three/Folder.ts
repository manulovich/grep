import { SystemElement } from './interface';
import Token from './Token';

class Folder implements SystemElement {
    dir: string;
    childrens: SystemElement[];

    constructor(dir: string, childrens: SystemElement[] = []) {
        this.dir = dir;
        this.childrens = childrens;
    }

    getContent(): Token[] {
        const result: Token[] = [];

        this.childrens.map(children => {
            result.push(...children.getContent());
        });

        return result;
    }
}

export default Folder;