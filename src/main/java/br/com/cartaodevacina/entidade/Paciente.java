package br.com.cartaodevacina.entidade;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table
@Entity
public class Paciente {

	@Id
	int id;

	@Column
	String nome;

	@Column
	String cpf;

	@Column
	String cep;

	@Column
	String endereco;

	@Column
	String n;

	@Column
	String estado;

	@Column
	String cidade;

	@Column
	String bairro;

	@Column
	String ddd;

	@Column
	String telefone;

}
