import '../styles/habitos.scss'


export function HabitosAtomicos() {
    return (
        <div className="habitosContainer">
            <h1>Hábitos Atômicos</h1>
            <h2>Conteúdo do livro</h2>

            <div className="listahabitos">
                <ul>
                    <li>Introdução</li>

                    <li><h3>Os fundamentos</h3></li>
                    <li>O supreendente poder dos Hábitos Atômicos</li>
                    <li>Por que seus hábitos molda sua identidade (e Vice-versa)</li>

                    <li><h3>A 1lei Torne-o Claro</h3></li>

                    <ol>
                        <li>O Homem que não parecia bem</li>
                        <li>A melhor maneira de criar um novo hábito</li>
                        <li>A motivação é superestimada; o ambiente é mais relevante</li>
                        <li>O segredo do autocontrole</li>
                    </ol>

                    <li><h3>A 2lei Torne-Atraente</h3></li>

                    <ol>
                        <li>Como tornar um hábito irresistível</li>
                        <li>O papel da família e dos amigos em moldar seus hábitos</li>
                        <li>Como descobrir e corrigir as causas de seus mais hábitos</li>
                    </ol>

                    <li><h3>A 3lei Torne-o fácil</h3></li>
                    <ol>
                        <li>Caminhe lentamente, mas jamais recue</li>
                        <li>A lei do mínimo esforço</li>
                        <li>Como parar de proscatinar usando a regra dos dois minutos</li>
                    </ol>
                </ul>
            </div>
        </div>
    )
}