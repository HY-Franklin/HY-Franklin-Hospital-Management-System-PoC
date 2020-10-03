package hospital.managementsystem.Controllers;

import hospital.managementsystem.crews.LabReports;
import hospital.managementsystem.crews.Staff;
import hospital.managementsystem.repos.LabReportsRope;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class LabReportController {
    @Autowired
    LabReportsRope labReportsRope;
    @RequestMapping("/get_labReports")
    public List<LabReports> getAllLabs(){

        return labReportsRope.findAll();
    }


    @RequestMapping("/add_labReports")
    public String addLabs(@RequestBody LabReports labReports){
        labReportsRope.save(labReports);
        return "added";
    }
}
