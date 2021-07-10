import bannerImg from '../assets/images/banner.svg'
import '../styles/home.scss'

export function Home() {
    return (

        <div className="homeContainer">
            <div className="Container">
                <section>
                    <h1>Resumos</h1>
                    <span>Anotações de um leitor </span>
                    <span> comum sobre diversos</span>
                    <span> livros, com o interesse</span>
                    <span> de cultivar o hábito da leitura.</span>
                    <button type="button"> <a href="/livros" rel="button">Acessar Resumos </a></button>
                </section>
                <section>
                    <img src={bannerImg} alt="" />
                </section>
            </div>
            <div className="footer">
                <footer>
                    Desenvolvido por <a href="https://github.com/ArthurBernardoDev" rel="footer">ArthurBernardoDev</a>
                </footer>
            </div>
        </div>

    )
}