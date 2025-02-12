import {useNavigate} from "react-router-dom";
import Logo from "../../assets/Tela Login/logo-ws.png";
import styles from "./Login.module.scss";

function Login(){

const navgate = useNavigate() //Iniciando o hook usenavigate

const irParaReembolsos = () => {
navigate("/reembolsos")
};

    return(
        <main>
            <section className={styles.conteinerImagen}>
                <p>Reservado para a imagem</p>
            </section>

            <section>
                <img src={Logo} alt="Logo da Wilson Sons" />
            </section>

            
        </main>
    )

}