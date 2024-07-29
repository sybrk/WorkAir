package TicketRelated;
import com.workingtech.enums.Proffesion;
import com.workingtech.interfaces.IHuman;
import passengers.PassengersProfile;
import planes.Plane;

import java.util.Arrays;

public class Flights extends FlightDirections {
    private boolean direct;
    private boolean delay;
    private int flightNumber;
    private Plane Plane;
    //private PassengersProfile passengersProfile;

    //private Passengers[] Passengers;
    private Personnel[] personnels;

    private Personnel[] pilots;
    private IHuman[] cabinPersonnel;
    private Personnel[] groundPersonnel;



    public Personnel[] getPersonnelByType(Proffesion proffesion){
        for (int i = 0; i < this.personnels.length; i++) {
            if (personnels[i].getProffesion() == proffesion){

            }
        }
        return  new Personnel[0];
    }

    public Personnel[] getPilots(){
        for (int i = 0; i < this.personnels.length; i++) {
            if (personnels[i].getProffesion() == Proffesion.PILOT){

            }
        }


        return pilots;
    }




}
