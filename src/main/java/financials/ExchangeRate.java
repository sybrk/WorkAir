package financials;

import com.workingtech.enums.Currency;

import java.util.Dictionary;

public class ExchangeRate {
    private float unit;
    private Currency currency;


    public ExchangeRate(float unit, Currency currency){
        this.currency = currency;
        this.unit = unit;
    }

    public float ConvertTo(Currency convertCurrency){
        DailyRates dailyRate = new DailyRates();
        float calculatedValue = this.unit * dailyRate.getValue(convertCurrency);
        ExchangeRate converted = new ExchangeRate(calculatedValue, convertCurrency);
        return converted.unit;

    }


}
