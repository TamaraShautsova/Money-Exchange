// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var exchange = {};
    var halfDollar = 50;
    var quarter = 25;
    var dimes = 10;
    var nickel = 5;
    var penni = 1;

    if (currency >= 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    while (currency > 0) {
        if(currency - halfDollar >= 0) {
            currency -= halfDollar;
            if (exchange['H']){
                exchange['H']++;
            }
            else exchange['H'] = penni;
            continue;
        }

        if(currency - quarter >= 0) {
            currency -= quarter;
            if (exchange['Q']){
                exchange['Q']++;
            }
            else exchange['Q'] = penni;
            continue;
        }

        if(currency - dimes >= 0) {
            currency -= dimes;
            if (exchange['D']){
                exchange['D']++;
            }
            else exchange['D'] = penni;
            continue;
        }

        if(currency - nickel >= 0) {
            currency -= nickel;
            if (exchange['N']){
                exchange['N']++;
            }
            else exchange['N'] = penni;
            continue;
        }else{
            exchange['P'] = currency;
            break;
        }

    }

  return exchange;
}
