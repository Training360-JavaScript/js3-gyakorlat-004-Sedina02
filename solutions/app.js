'use strict';

import checkVisa from "./visa.js";
import checkIP from "./ip.js";
import checkMac from "./mac.js";

const checker = {
    rules: {
        checkVisa,
        checkIP,
        checkMac
    },

    validate(string, type) {
        if (type === 'visa') {
            return this.rules.checkVisa(string);
        }
        if (type === 'ip') {
            return this.rules.checkIP(string)
        }
        if (type === 'mac') {
            return this.rules.checkMac(string)
        }
    }
};

export default checker