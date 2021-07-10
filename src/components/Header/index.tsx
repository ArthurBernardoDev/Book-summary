import logoImg from '../../assets/images/logo.svg'

import './style.scss'

export function Header() {
    return (
        <>
            <header className="headerContainer">
                <div className="logo">
                    <a href="/" rel="logo"><img src={logoImg} alt="Logo" /></a>
                </div>

                <div className="menu">

                    <a href="#" rel="Sobre">
                        Sobre
                    </a>

                    <a href="/livros" rel="Livros">
                        Livros
                    </a>

                    <a href="https://allmylinks.com/contato-arthurbernardoas" rel="Contato">
                        Contato
                    </a>
                </div>

            </header>
        </>
    )
}