export default class Validation {
    constructor() {

    }
    checkEmpty(value) {
        if (value === "") {
            alert('Empty!!!')
            return true;
        } else {
            return false;
        }
    }
}