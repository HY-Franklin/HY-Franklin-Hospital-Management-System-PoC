package hospital.managementsystem.crews;

import javax.persistence.*;

@Entity
public class LabReports {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToOne(mappedBy = "labReports")
    private Patients patients;
    private String diagnosis;

    public LabReports(){}
    @Override
    public String toString() {
        return "LabReports{" +
                "id=" + id +
                ", patients=" + patients +
                ", diagnosis='" + diagnosis + '\'' +
                '}';
    }

    public LabReports(Patients patients, String diagnosis) {
        this.patients = patients;
        this.diagnosis = diagnosis;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Patients getPatients() {
        return patients;
    }

    public void setPatients(Patients patients) {
        this.patients = patients;
    }

    public String getDiagnosis() {
        return diagnosis;
    }

    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }
}
