'use strict';

const checkVisa = (cardNumber) => {
    const pattern = /^4{1}\d{15}$/;
    return cardNumber.match(pattern) ? true : false;
    
};

export default checkVisa