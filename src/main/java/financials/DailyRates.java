package financials;


import com.workingtech.enums.Currency;

import java.util.HashMap;


public class DailyRates {

    // const exchangeRates = [{"usdtry": 32.40}, {"usdeur": 1.08}];

    private HashMap<Currency, Float> rates = new HashMap<Currency, Float>();
//    {
//        "usdtry": 32.40,
//        "usdeur": 1.08
//    }
    public DailyRates(){
        rates.put(Currency.TRY, 33.20f);
        rates.put(Currency.GBP, 0.20f);
        rates.put(Currency.EUR, 0.10f);
        rates.put(Currency.USD, 1.0f);
    }

    public void changeData(Currency parite, Float value){
        rates.put(parite, value);
    }

    public Float getValue(Currency parite){
        return rates.get(parite);
    }

}
