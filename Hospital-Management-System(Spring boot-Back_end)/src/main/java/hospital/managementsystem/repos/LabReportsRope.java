package hospital.managementsystem.repos;

import hospital.managementsystem.crews.LabReports;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "labs", path = "labs")
@CrossOrigin
public interface LabReportsRope extends JpaRepository<LabReports,Integer> {
}
