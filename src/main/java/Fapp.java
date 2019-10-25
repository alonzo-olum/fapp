import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.web.bind.annotation.*;

@RestController
@EnableAutoConfiguration
public class Fapp{

	@RequestMapping("/")
	String home(){
		return "Welcome To SpringBoot FApp";
	}
	public static void main(String[] args){
		SpringApplication.run(Fapp.class,args);
	}
}
