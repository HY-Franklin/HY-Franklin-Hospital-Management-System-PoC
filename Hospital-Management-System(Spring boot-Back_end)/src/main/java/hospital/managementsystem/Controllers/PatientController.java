package hospital.managementsystem.Controllers;

import hospital.managementsystem.crews.Patients;
import hospital.managementsystem.crews.Staff;
import hospital.managementsystem.repos.PatientsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class PatientController {
    @Autowired
    PatientsRepo patientsRepo;
    @RequestMapping("/get_patients")
    public List<Patients> getAllPatients(){

        return patientsRepo.findAll();
    }


    @RequestMapping("/add_patients")
    public String addPatient(@RequestBody Patients patients){
        patientsRepo.save(patients);
        return "added";
    }
}
