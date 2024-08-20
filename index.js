function laCajaDePandora(numero){

    if (numero % 2 === 0) {
        let r = [];
        while(numero > 0) {
            r.unshift(numero % 2);
             numero = Math.floor(numero / 2);
        };
        return r.join('');
        
    } else {
        let r = [];
        while(numero > 0) {
            r.unshift(numero % 16);
             numero = Math.floor(numero / 16);
        };
        return r.join('');
    };
};
    