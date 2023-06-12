import git from '../assets/pics/github.svg'
import facebook from '../assets/pics/facebook.svg'
import instagram from '../assets/pics/instagram.svg'
import linkedin from '../assets/pics/linkedin.svg'

export const Contact = () => {
    return <footer className="contact">
        <a href="https://www.github.com/eilonv" target='_blank' rel="noreferrer">
            <img src={git} alt="github link icon" />
        </a>
        <a href="https://www.facebook.com/dontmindmejustcleaninguphere" target='_blank' rel="noreferrer">
            <img src={facebook} alt="facebook link icon" />
        </a>
        <a href="https://www.instagram.com/eilon_vana" target='_blank' rel="noreferrer">
            <img src={instagram} alt="instagram link icon" />
        </a>
        <a href="https://www.linkedin.com/in/eilonvana" target='_blank' rel="noreferrer">
            <img src={linkedin} alt="linkedin link icon" />
        </a>
    </footer>
}