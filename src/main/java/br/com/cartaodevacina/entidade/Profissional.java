package br.com.cartaodevacina.entidade;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table
@Data
public class Profissional {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;

	@Column
	String nome;

	@Column
	int registro;

	@Column
	String senha;

	@Column
	String cargo;

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

	@Column
	String email;

}
