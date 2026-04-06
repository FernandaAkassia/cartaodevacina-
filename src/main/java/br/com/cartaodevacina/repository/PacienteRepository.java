package br.com.cartaodevacina.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.cartaodevacina.entidade.Paciente;

public interface PacienteRepository extends JpaRepository<Paciente,  Integer> {

}
