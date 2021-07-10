import logoImg from '../../assets/images/logo.svg'

import './style.scss'

export function Header() {
    return (
        <>
            <header className="headerContainer">
                <div className="logo">
                    <img src={logoImg} alt="Logo" />
                </div>

                <div className="menu">

                    <a href="#">
                        Sobre
                    </a>

                    <a href="/livros">
                        Livros
                    </a>

                    <a href="https://allmylinks.com/contato-arthurbernardoas">
                        Contato
                    </a>
                </div>

            </header>
        </>
    )
}