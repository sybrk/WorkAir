package passengers;

import com.workingtech.enums.AdvantageProgram;
import com.workingtech.enums.Flytype;
import com.workingtech.interfaces.IAdvantageProgram;


public class PassengersProfile {
     private Flytype flytype;
     private IAdvantageProgram advantageProgram;

     //Constucter
    public PassengersProfile(Flytype flytype, IAdvantageProgram advantageProgram){
        this.flytype= flytype;
        this.advantageProgram = advantageProgram;
    }


    public Flytype  getFlyType() {
        return flytype;
    }

    public void setFlyType(Flytype flytype) {
        this.flytype = flytype;
    }

    public IAdvantageProgram  getAdvantageProgram() {
        return advantageProgram;
    }

    public void setAdvantageProgram(IAdvantageProgram advantageProgram) {
        this.advantageProgram = advantageProgram;
    }













}


