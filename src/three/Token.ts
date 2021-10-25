class Token {
    name: string;
    dir: string;
    content: string | null;

    constructor(name: string, dir: string, content: string | null) {
        this.name = name;
        this.dir = dir;
        this.content = content;
    }
}

export default Token;