package food;

public class FoodMenu {

    private String mainCourse;
    private String dessert;
    private String[] beverages = new String[4];


    public String getMainCourse() {
        return mainCourse;
    }

    public void setMainCourse(String mainCourse) {
        this.mainCourse = mainCourse;
    }

    public String getDessert() {
        return dessert;
    }

    public void setDessert(String dessert) {
        this.dessert = dessert;
    }

    public String[] getBeverages() {
        return beverages;
    }

    public void setBeverages(String[] beverages) {
        this.beverages = beverages;
    }


}
