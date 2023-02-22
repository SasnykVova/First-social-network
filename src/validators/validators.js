export const required = (value) => {
    if (value) return undefined;

    return "Поле обов'язкове";
}

export const maxLengthCreator = (maxLenght) => (value) => {
    if (value.length > maxLenght) return `Максимальна довжина ${maxLenght} символів`;
    return undefined;
}
