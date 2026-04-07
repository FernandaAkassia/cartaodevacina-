package br.com.cartaodevacina.entidade;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Table
@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Ubs {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;

	@Column
	String nome;

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
	String cnes;

}
