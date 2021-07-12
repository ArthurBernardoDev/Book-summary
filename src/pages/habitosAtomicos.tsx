import '../styles/habitos.scss'


export function HabitosAtomicos() {
    return (
        <div className="habitosContainer">
            <h1>Hábitos Atômicos</h1>
            <h2>Conteúdo do livro</h2>

            <div className="listahabitos">
                <ul>
                    <li><a href="#" rel="teste">Introdução</a></li>

                    <li><a href="#" rel="teste"><h3>Os fundamentos</h3></a></li>
                    <li><a href="#" rel="teste">O supreendente poder dos Hábitos Atômicos</a></li>
                    <li><a href="#" rel="teste">Por que seus hábitos molda sua identidade (e Vice-versa)</a></li>

                    <li><a href="#" rel="teste"><h3>A 1lei Torne-o Claro</h3></a></li>

                    <ol>
                        <li><a href="#" rel="teste">O Homem que não parecia bem</a></li>
                        <li><a href="#" rel="teste">A melhor maneira de criar um novo hábito</a></li>
                        <li><a href="#" rel="teste">A motivação é superestimada; o ambiente é mais relevante</a></li>
                        <li><a href="#" rel="teste">O segredo do autocontrole</a></li>
                    </ol>

                    <li><a href="#" rel="teste"><h3>A 2lei Torne-Atraente</h3></a></li>

                    <ol>
                        <li><a href="#" rel="teste">Como tornar um hábito irresistível</a></li>
                        <li><a href="#" rel="teste">O papel da família e dos amigos em moldar seus hábitos</a></li>
                        <li><a href="#" rel="teste">Como descobrir e corrigir as causas de seus mais hábitos</a></li>
                    </ol>

                    <li><a href="#" rel="teste"><h3>A 3lei Torne-o fácil</h3></a></li>
                    <ol>
                        <li><a href="#" rel="teste">Caminhe lentamente, mas jamais recue</a></li>
                        <li><a href="#" rel="teste">A lei do mínimo esforço</a></li>
                        <li><a href="#" rel="teste">Como parar de proscatinar usando a regra dos dois minutos</a></li>
                    </ol>
                </ul>
            </div>
        </div>
    )
}