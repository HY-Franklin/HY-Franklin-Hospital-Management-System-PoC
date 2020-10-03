package hospital.managementsystem.repos;

import hospital.managementsystem.crews.Patients;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "patients", path = "patients")
@CrossOrigin
public interface PatientsRepo extends JpaRepository<Patients,Integer> {
}
