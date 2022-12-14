import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import insta from '../../assets/img/instagram.svg'
import linkedin from '../../assets/img/linkedin2.svg'
import git from '../../assets/img/git.svg'
import './style.css'

function Header() {

    return (
        <footer>
            <div className="container">
                <div className="socialmedia">
                <a href="https://www.instagram.com/junior_santos.sk8/" target="_blank"> <img src={insta} alt="DSMeta" width="5px" /></a>
                <a href="https://www.linkedin.com/in/francisco-carlos-609192142/" target="_blank"> <img src={linkedin} alt="DSMeta" width="5px" /></a>
                <a href="https://github.com/franciscograveli" target="_blank"> <img src={git} alt="DSMeta" width="5px" /></a>
                </div>
                <div className="text">© 2022 Desenvolvido por Francisco Graveli.</div>
            </div>
        </footer>
    )
}

export default Header