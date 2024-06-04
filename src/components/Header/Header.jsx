import './Header.css'

function Header() {
    return(
        <>
            <header className='cabecalho'>
                <nav className="container_menu">
                    <div className="menu_principal">
                        <a href="">Iuri Silva</a>
                    </div>
                    <div>
                        <a className="menu_item" href="">Início</a>
                        <a className="menu_item" href="">Sobre mim</a>
                        <a className="menu_item" href="">Experiências</a>
                        <a className="menu_item" href="">Projetos</a>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header