package br.com.cartaodevacina.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.cartaodevacina.entidade.Paciente;

@Repository
public interface PacienteRepository extends JpaRepository<Paciente,  Integer> {

}
