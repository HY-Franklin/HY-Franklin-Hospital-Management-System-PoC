package hospital.managementsystem.repos;

import hospital.managementsystem.crews.Bills;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "bills", path = "bills")
@CrossOrigin
public interface BillsRepo extends JpaRepository<Bills,Integer> {
}
