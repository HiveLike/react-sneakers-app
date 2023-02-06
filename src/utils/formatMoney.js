const formatMoney = (value) => {
    return Intl.NumberFormat('ru-Ru').format(parseInt(value)) + " руб.";
}

export default formatMoney;