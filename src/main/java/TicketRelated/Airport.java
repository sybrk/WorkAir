package TicketRelated;

import com.workingtech.interfaces.IAdvantageProgram;

public class Airport implements IAdvantageProgram {
    private String name;
    private String city;
    private String country;
    private int code;

 //   private static Airport staticPort;

    // Constructers

    public Airport(){
        name = "Not Set";
        city = "Not Set";
        country = "Not Set";
        code = -1;
    };

    public Airport(String name, String city, String country, int code){

        this.name = name;
        this.city = city;
        this.country = country;
        this.code = code;
    };

//    public static Airport CreateAirPort(){
//        return new Airport();
//    }
//    public static Airport CreateAirPortSingleton(){
//        if(staticPort == null){
//            staticPort = new Airport();
//        }
//        return staticPort;
//    }
// Getters and Setters
    public String getName(){
        return this.name;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getCity () {
        return this.city;
    }
    public void setCity (String city) {
        this.city = city;
    }

    public String getCountry(){
        return this.country;
    }

    public void setCountry (String country) {
        this.country = country;
    }

    public int getCode(){
        return this.code;
    }

    public void setCode(){
        this.code = code;
    }

    @Override
    public int counter() {
        return advantageProgram.hashCode();
    }
}



