package base;

import com.workingtech.enums.BloodType;
import com.workingtech.interfaces.IHuman;

import java.time.LocalDateTime;
import java.util.Date;


public class Human implements IHuman {
    private String name;
    private String surname;
    private Date birtdate;
    private boolean gender;
    private String id;
    private String nationality;
    private int height;
    private int weight;
    private BloodType bloodType;
    private String email;

    //contructors

    public Human() {
//thank you<3
    }
    public Human(String name, String surname, Date birthdate, boolean gender, String id,
                 String nationality, int height, int weight, BloodType bloodType, String email) {

        this.name = name;
        this.surname = surname;
        this.birtdate = birthdate;
        this.gender = gender;
        this.id = id;
        this.nationality = nationality;
        this.height = height;
        this.weight =weight;
        this.bloodType = bloodType;
        this.email = email;

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public Date getBirtdate() {
        return birtdate;
    }

    public void setBirtdate(Date birtdate) {
        this.birtdate = birtdate;
    }

    public boolean isGender() {
        return gender;
    }

    public void setGender(boolean gender) {
        this.gender = gender;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNationality() {
        return nationality;
    }

    public void setNationality(String nationality) {
        this.nationality = nationality;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public BloodType getBloodType() {
        return bloodType;
    }

    public void setBloodType(BloodType bloodType) {
        this.bloodType = bloodType;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }


    public int getAge() {
        return LocalDateTime.now().getYear() - birtdate.getYear();
    }
}

