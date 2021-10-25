const isFile = (name: string): boolean => {
    return Boolean(/\w+\.\w+/.exec(name));
};

export { isFile };