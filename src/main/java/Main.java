import TicketRelated.Airport;
import com.workingtech.enums.Currency;
import com.workingtech.interfaces.IAdvantageProgram;
import financials.ExchangeRate;

public class Main {
    public static void main(String[] args) {

        ExchangeRate dolar20  = new ExchangeRate(20, Currency.USD);
        float convertedTL = dolar20.ConvertTo(Currency.TRY);
        //float convertEUR = dolar20.ConvertTo(Currency.EUR);
        System.out.println("tl " + convertedTL);


        IAdvantageProgram imp = new Airport();
        imp.counter();

    }
}
