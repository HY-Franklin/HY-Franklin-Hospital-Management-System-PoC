package hospital.managementsystem.repos;

import hospital.managementsystem.crews.Doctors;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "doctors", path = "doctors")
@CrossOrigin
public interface DoctorsRepo extends JpaRepository<Doctors,Integer> {

}
