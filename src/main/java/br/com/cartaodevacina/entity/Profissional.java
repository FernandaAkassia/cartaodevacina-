package br.com.cartaodevacina.entity;

import java.time.LocalDate;

import org.hibernate.validator.constraints.br.CPF;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

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

@Entity
@Table
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Profissional {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;

	@Column
	String nome;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	@Column
	LocalDate dataNascimento;

	@Column
	String registro;

	@Column
	@JsonIgnore
	String senha;

	@Column
	String cargo;

	@Column(unique = true)
	@CPF
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
