export const validatorValue = (value) => {
    return value ? undefined : 'value no bro'
};

export const validatorLenght = (lenghtMax) => (value) => {

    return value.length > lenghtMax ? `lenghtMax bro ${lenghtMax}` : undefined;
};


export const validationRepit = (data) => {
    return data ? undefined : "BROOOOOOO"
};
