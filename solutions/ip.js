'use strict';

const checkIP = (ipNumber) => {
    const pattern = /^(\d{3}.){3}\d{2}$/;
    return ipNumber.match(pattern) ? true : false;
    
};

export default checkIP