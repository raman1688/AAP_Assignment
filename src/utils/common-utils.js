
export const currencyFormatter = (currency) => {
    if (Math.abs(currency) > 999999) {
        return Math.sign(currency)*((Math.abs(currency)/1000000).toFixed(1)) + 'M USD';
    }
    return Math.abs(currency) > 999 ? Math.sign(currency)*((Math.abs(currency)/1000).toFixed(1)) + 'k USD' : Math.sign(currency)*Math.abs(currency) + ' USD';
}