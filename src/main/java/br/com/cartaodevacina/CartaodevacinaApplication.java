package br.com.cartaodevacina;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import br.com.cartaodevacina.repository.CartaoVacinaRepository;
import br.com.cartaodevacina.servece.CartaoVacinaService;

@SpringBootApplication
public class CartaodevacinaApplication {
	private final CartaoVacinaService cartaoVacinaService;
	private final CartaoVacinaRepository cartaoVacinaRepository;

	CartaodevacinaApplication(CartaoVacinaRepository cartaoVacinaRepository, CartaoVacinaService cartaoVacinaService) {
		this.cartaoVacinaRepository = cartaoVacinaRepository;
		this.cartaoVacinaService = cartaoVacinaService;
	}

	public static void main(String[] args) {

		ConfigurableApplicationContext context = SpringApplication.run(CartaodevacinaApplication.class, args);

		CartaoVacinaService s = context.getBean(CartaoVacinaService.class);
		s.buscaPorCpf("8301780401");

	}

}
