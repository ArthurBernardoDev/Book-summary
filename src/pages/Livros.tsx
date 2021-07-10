import habitosImg from '../assets/images/habitosAtomicos.svg'
import '../styles/livros.scss'
import eyeImg from '../assets/images/eye.svg'

export function Livros() {
    return (
        <div className="homeLivros">
            <section>
                <h2>Lista de livros</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Livro</th>
                            <th>Titulo</th>
                            <th>Introdução</th>
                            <th>Resumo</th>
                        </tr>
                    </thead>

                    <tbody>
                        <td>
                            <img src={habitosImg} alt="img" />
                        </td>
                        <td>
                            Hábitos Atômicos
                        </td>
                        <td>
                            Pequenas mudanças, resultados impressionantes
                        </td>

                        <td>
                            <button type="button">
                                <a href="/habitos-atomicos"
                                    rel="habitos">
                                    <img src={eyeImg} alt="eye" />
                                </a>
                            </button>
                        </td>
                    </tbody>
                </table>

            </section>

        </div>

    )
}