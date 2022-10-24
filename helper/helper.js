let randomString = require('random-string')
let x = randomString();
let y = randomString({
    length: 7,
    numeric: true,
    letters: false,
    special: false,
});

class Helper {
    get randomString1() {
        return x
    }
    get randomPhone() {
        return y
    }

}
export default new Helper();