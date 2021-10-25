import path from 'path';
import fs from 'fs';
import config from '../constanst/config';
import { isFile } from '../utils/fs';
import File from './File';
import Folder from './Folder';
import { SystemElement } from './interface';

const createThree = (pathFromConsole: string[], baseDir: string = config.workPath): Folder => {
    let foldersChildren: SystemElement[] = [];

    pathFromConsole.forEach(name => {
        if (isFile(name)) {
            return foldersChildren.push(
                new File(path.resolve(baseDir, name), name)
            );
        }
        
        // is Folder
        const folderPath = path.resolve(config.workPath, name);
        try {
            foldersChildren.push(
                createThree(fs.readdirSync(folderPath), folderPath)
            );
        } catch {
            return null;
        }
    });

    return new Folder(baseDir, foldersChildren);
}

export default createThree;
