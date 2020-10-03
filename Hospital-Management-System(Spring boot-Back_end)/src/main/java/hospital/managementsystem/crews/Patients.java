package hospital.managementsystem.crews;

import javax.persistence.*;
import javax.print.Doc;
import javax.swing.text.Style;


@Entity
public class Patients {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String phone;
    private String name;
    private String type;
    private String gender;
    @OneToOne(fetch = FetchType.LAZY,mappedBy = "patients")
    private Bills bills;
    @OneToOne
    @JoinColumn
    private LabReports labReports;
    @ManyToOne
    @JoinColumn
    private Doctors doctors;
    public Patients() {

    }
    public Patients(String phone, String name, String type, String gender, Bills bills, LabReports labReports, Doctors doctors) {
        this.phone = phone;
        this.name = name;
        this.type = type;
        this.gender = gender;
        this.bills = bills;
        this.labReports = labReports;
        this.doctors = doctors;
    }

    @Override
    public String toString() {
        return "Patients{" +
                "id=" + id +
                ", phone=" + phone +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", gender='" + gender + '\'' +
                ", bills=" + bills +
                ", labReports=" + labReports +
                ", doctors=" + doctors +
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Bills getBills() {
        return bills;
    }

    public void setBills(Bills bills) {
        this.bills = bills;
    }

    public LabReports getLabReports() {
        return labReports;
    }

    public void setLabReports(LabReports labReports) {
        this.labReports = labReports;
    }

    public Doctors getDoctors() {
        return doctors;
    }

    public void setDoctors(Doctors doctors) {
        this.doctors = doctors;
    }
}
