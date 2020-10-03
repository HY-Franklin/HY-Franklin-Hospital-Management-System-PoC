package hospital.managementsystem.Controllers;

import hospital.managementsystem.crews.Bills;
import hospital.managementsystem.crews.Staff;
import hospital.managementsystem.repos.BillsRepo;
import hospital.managementsystem.repos.StaffRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class StaffController {
    @Autowired
    StaffRepo staffRepo;

    @RequestMapping("/get_staffs")
    public List<Staff> getAllStaff(){

        return staffRepo.findAll();
    }


    @RequestMapping("/add_staffs")
    public String addStaffs(@RequestBody Staff staff){
        staffRepo.save(staff);
        return "added";
    }
}
