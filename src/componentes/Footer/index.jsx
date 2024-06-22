import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
        <div className="redes">
            <a href="https://github.com/jahb24">
                <img src="/img/github.png" alt="github" />
            </a>
            <a href="www.linkedin.com/in/jahb-icc">
                <img src="/img/linkedin.png" alt="linkedin" />
            </a>
        </div>
        <img src="/img/Logo.png" alt="org"/>
        <strong>Desarrollado Por: Ing. Jorge Aarón Hernández Bustillos</strong>
    </footer>
}

export default Footer