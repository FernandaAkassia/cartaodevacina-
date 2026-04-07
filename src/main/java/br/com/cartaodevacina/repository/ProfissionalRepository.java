package br.com.cartaodevacina.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.cartaodevacina.entidade.Profissional;

@Repository
public interface ProfissionalRepository extends JpaRepository<Profissional, Integer> {

	boolean existsByCpfAndSenha(String Cpf, String Senha);

}
