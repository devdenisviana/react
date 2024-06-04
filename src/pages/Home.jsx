import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Sobre from '../components/Sobre/Sobre'
import Experiencias from '../components/Experiencias/Experiencias'
import Projetos from '../components/Projetos/Projetos'
import Imagem1 from '../images/img1.png'
import './Home.css'

function Home() {
    return(
        <>
            <Header />
            <div className='container_home'>
                <div className='home_bg'>
                    <p>Olá, eu sou</p>
                    <h1>Iuri Silva</h1>
                    <p>Desenvolvedor FrontEnd & UI Designer</p>
                    <button>Linkedin</button>
                </div>
                <div className='home_bg'>
                    <img src={Imagem1} alt="" />
                </div>
            </div>
            <Sobre />
            <Experiencias />
            <Projetos />
            <Footer />
        </>
    )
}

export default Home