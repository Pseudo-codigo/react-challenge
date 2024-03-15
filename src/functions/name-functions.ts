const splitWord = (word: string, split: string): string[] => {

    const index = word.toLocaleLowerCase().indexOf(split.toLocaleLowerCase());

    const array = word.toLocaleLowerCase().split(split.toLocaleLowerCase(), 2);

    if (array[1] != undefined) {
        //Add remaining string
        array[1] = word.substring(index + split.length)
    }
    return addElement(array, split);
}

const addElement = (array: string[], split: string): string[] => {
    array.splice(1, 0, split)
    return array;
}

export default splitWord;