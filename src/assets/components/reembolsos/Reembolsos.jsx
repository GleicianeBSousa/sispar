import Home from "../../assets/Dasboard/home.png"
import Seta from "../../assets/Dasboard/Vector.png"
import styles from "./Reembolsos.module.scss"

function Reembolsos(){
    return(
        <div>
        <header>
            <img src={Home} alt="Casa da header" />
            <img src={Seta} alt="Seta da header" />
            <p>Reembolsos </p>
        </header>

        <main>
            <h1>Sistema de Reembolso</h1>
            <p>Solicite novos pedidos de reembolsos, visualize solicitações em análise e todo histórico</p>

            <section>
                
            </section>
        </main>
        </div>
    )
}
export default Reembolsos