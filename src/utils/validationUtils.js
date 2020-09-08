export const nameValidation = (e) => {
    let { value } = e.target;

    const regexToLockInput = /\w+\s\w+\s+$/gm;
    const regexToMatched = /[a-zA-Z]+\s[a-zA-Z]+$/gm;
    const regexToMatchedForLockInput = /[a-zA-Z]+\s[a-zA-Z]+\s+$/gm;

    const isNameMatched = regexToMatched.test(value);
    const isInputLocked = regexToLockInput.test(value);
    const isNameMatchedForLockInput = regexToMatchedForLockInput.test(value);

    let error = true;
    if (isInputLocked) {
        error = false;
        if (!isNameMatchedForLockInput) {
            error = true;
        }
    } else {
        error = !isNameMatched;
        if (isNameMatched) {
            value = value.trim()
        }
        value = value.replace(/\s(?=\s)/g,'');
        return {error, value};
    }
    return {error, value: null};
}

export const cardNumberValidation = (e) => {
    let { value } = e.target;
    const regexToMatched = /(\d{4})+\s(\d{4})+\s(\d{4})+\s(\d{4})+$/gm;
    let isCardNumberMatched = regexToMatched.test(value);

    let error = true;

    if (value.length > 19) {
        error = false;
        value = value.substring(0, value.length - 1)
        isCardNumberMatched = regexToMatched.test(value);
        if (!isCardNumberMatched) {
            error = true;
        }
    } else {
        if ((value.length % 5 === 4) &&
            (value.length < 19) ) {
            value += ' ';
        }
        error = !isCardNumberMatched;
        if (isCardNumberMatched) {
            value = value.trim()
        }
        value = value.replace(/\s(?=\s)/g,'');
        return {error, value};
    }

    return {error, value: null};
}

export const expirationValidation = (e) => {
    let { value } = e.target;
    const regexToMatched = /(0[1-9]|10|11|12)\/(\d{2})$/gm;
    const isExpirationMatched = regexToMatched.test(value);

    let error = true;

    if (value.length > 5) {
        error = false;
        if (!isExpirationMatched) {
            error = true;
        }
    } else {
        if (value.length === 2) {
            value += '/';
        }
        error = !isExpirationMatched
        value = value.replace(/\s(?=\s)/g,'').trim();
        return {error, value};
    }
    return {error, value: null};
}

export const cvcValidation = (e) => {
    let { value } = e.target;
    const regexToMatched = /(\d{3})$/gm;
    const isCvcMatched = regexToMatched.test(value);

    let error = true;

    if (value.length > 3) {
        error = false;
        if (!isCvcMatched) {
            error = true;
        }
    } else {
        error = !isCvcMatched;
        value = value.replace(/\s(?=\s)/g,'').trim();
        return {error, value};
    }
    return {error, value: null};
}