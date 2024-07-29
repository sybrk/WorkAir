package TicketRelated;

import base.Human;
import com.workingtech.enums.BloodType;
import com.workingtech.enums.Proffesion;

import java.util.Date;

public class Personnel extends Human {
    private Proffesion proffesion;


    //Constructer
    public Personnel(String name, String surname, Date birthdate, boolean gender, String id,
                     String nationality, int height, int weight, BloodType bloodType, String email, Proffesion Profession){

        super(name, surname, birthdate,gender, id, nationality,  height, weight,  bloodType,  email);
        this.proffesion = Profession;
    }

    // Getter and Setter

    public Proffesion getProffesion(){
        return this.proffesion;
    }

    public void setProffesion(Proffesion proffesion){
        this.proffesion = proffesion;
    }


}
