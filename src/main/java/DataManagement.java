import TicketRelated.Airport;
import TicketRelated.Flights;
import TicketRelated.Personnel;
import planes.Plane;

import java.util.ArrayList;
import java.util.List;

public class DataManagement {

    private ArrayList<Personnel> personnelList = new ArrayList<Personnel>();
    private ArrayList<Plane> planeList = new ArrayList<Plane>();
    private ArrayList<Airport> airportList = new ArrayList<Airport>();
    private ArrayList<Flights> flightList = new ArrayList<Flights>();

    public void addPersonal(Personnel personnel) {
        personnelList.add(personnel);
    }
    public ArrayList<Personnel> getPersonelList() {

        return personnelList;
    }
    public void addPlane(Plane plane) {
        planeList.add(plane);
    }
    public ArrayList<Plane> getPlaneList() {

        return planeList;
    }
    public void addAirport(Airport airport) {
        airportList.add(airport);
    }
    public ArrayList<Airport> getAirportList() {

        return airportList;
    }

    public void addFlight(Flights flight) {
        flightList.add(flight);
    }
    public ArrayList<Flights> getFlightList() {

        return flightList;
    }


}
