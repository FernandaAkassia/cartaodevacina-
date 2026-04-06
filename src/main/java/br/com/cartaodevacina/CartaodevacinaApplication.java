package br.com.cartaodevacina;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import br.com.cartaodevacina.servece.PacienteServece;

@SpringBootApplication
public class CartaodevacinaApplication {
	public static void main(String[] args) {

		ConfigurableApplicationContext context = SpringApplication.run(CartaodevacinaApplication.class, args);

		PacienteServece s = context.getBean(PacienteServece.class);
		s.buscarporcpf("8301780401");

	}

}
