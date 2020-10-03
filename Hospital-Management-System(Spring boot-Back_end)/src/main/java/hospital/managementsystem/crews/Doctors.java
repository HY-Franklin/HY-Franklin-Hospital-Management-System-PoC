package hospital.managementsystem.crews;

import javax.persistence.*;
import java.util.List;
@Entity
public class Doctors {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String phone;
    private String name;
    private String gender;
    @OneToMany(mappedBy = "doctors")
    private List<Patients> allPatients;

    public Doctors(){}
    public Doctors(String phone, String name, String gender, List<Patients> allPatients) {
        this.phone = phone;
        this.name = name;
        this.gender = gender;
        this.allPatients = allPatients;
    }

    @Override
    public String toString() {
        return "Doctors{" +
                "id=" + id +
                ", phone=" + phone +
                ", name='" + name + '\'' +
                ", gender='" + gender + '\'' +
                ", allPatients=" + allPatients +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public List<Patients> getAllPatients() {
        return allPatients;
    }

    public void setAllPatients(List<Patients> allPatients) {
        this.allPatients = allPatients;
    }
}
