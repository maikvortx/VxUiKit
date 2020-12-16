export class FormatHelper {
  static isWeekday(date) {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }
  
  static formatCurrencyValue(value, maximumDigits, minimumDigits) {
    const formatter = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: minimumDigits || 2,
      maximumFractionDigits: maximumDigits || 2,
    });
    const formatedValue = formatter.format(value);
    return formatedValue;
  }
}
