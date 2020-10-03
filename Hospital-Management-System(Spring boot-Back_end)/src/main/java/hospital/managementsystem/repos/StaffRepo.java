package hospital.managementsystem.repos;

import hospital.managementsystem.crews.Staff;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "staff", path = "staff")
@CrossOrigin
public interface StaffRepo extends JpaRepository<Staff,Integer> {
}
