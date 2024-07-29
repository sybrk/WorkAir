package TicketRelated;

public class FlightDirections {
    private Airport Arrival;
    private Airport Departure;
    private boolean Internal;


// Cons
    public  FlightDirections(){
        Arrival  = new Airport();
        Departure = new Airport();
    }

// aşağıdaki fonksiyonda obje aldık
// composition yaptık
    public  FlightDirections(Airport Arrival, Airport Departure, boolean Internal){
        //todo: check both params if null
        this.Arrival = Arrival;
        this.Departure = Departure;
        this.Internal = Internal;
    }



    //Getters and setter

    public int getAirPortCodeArrival() {
        return Arrival.getCode();
    }

    public int getAirPortCodeDeparture() {

        return Departure.getCode();
    }

    public boolean getInternal(){
        return this.Internal;
    }

    public String DirectionInfo(){

        return Departure.getName() + "'dan " + Arrival.getName() + " havalimanına  gitmektedir.";
    }

}


