package hospital.managementsystem.crews;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Bills {
    private int amount;
    private Date date;
    @OneToOne
    @JoinColumn
    private Patients patients;


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Patients getPatients() {
        return patients;
    }

    public void setPatients(Patients patients) {
        this.patients = patients;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Override
    public String toString() {
        return "Bills{" +
                "id=" + id +
                ", amount=" + amount +
                ", date=" + date +
                ", patients=" + patients +
                '}';
    }


    public Bills(){}
    public Bills(int amount, Date date, Patients patients) {
        this.amount = amount;
        this.date = date;
        this.patients = patients;
    }
}
