'use strict';

const checkMac = (macNumber) => {
    const pattern = /^([0-9a-fA-F]{2}[:-]){5}[0-9a-fA-F]{2}$/;
    return macNumber.match(pattern) ? true : false;
};

export default checkMac