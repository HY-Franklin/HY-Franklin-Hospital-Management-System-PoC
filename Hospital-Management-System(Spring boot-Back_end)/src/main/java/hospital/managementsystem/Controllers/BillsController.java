package hospital.managementsystem.Controllers;

import hospital.managementsystem.crews.Bills;
import hospital.managementsystem.repos.BillsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class BillsController {
    @Autowired
    BillsRepo billsRepo;


    @RequestMapping("/")
    public String Test(){
        return "Hello world";
    }

    @RequestMapping("/get_bills")
    public List<Bills> getAllBills(){
        List<Bills> l=billsRepo.findAll();
        return l;
    }

    @RequestMapping("/add_bills")
    public String addBills(@RequestBody Bills bills){
        billsRepo.save(bills);
        return "added";
    }



}
