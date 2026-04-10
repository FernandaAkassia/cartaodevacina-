package br.com.cartaodevacina.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.cartaodevacina.entity.Profissional;

@Repository
public interface ProfissionalRepository extends JpaRepository<Profissional, Integer> {

	Profissional findByCpfAndSenha(String Cpf, String Senha);

}
