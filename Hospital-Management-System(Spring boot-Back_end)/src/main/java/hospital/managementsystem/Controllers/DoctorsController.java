package hospital.managementsystem.Controllers;

import hospital.managementsystem.crews.Doctors;
import hospital.managementsystem.crews.Staff;
import hospital.managementsystem.repos.DoctorsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class DoctorsController {
    @Autowired
    DoctorsRepo doctorsRepo;
    @RequestMapping("/get_doctors")
    public List<Doctors> getAllDoctors(){
        List<Doctors> l=doctorsRepo.findAll();
        return l;
    }


    @RequestMapping("/add_doctors")
    public String addDoctor(@RequestBody Doctors doctors){
        doctorsRepo.save(doctors);
        return "added";
    }
}
