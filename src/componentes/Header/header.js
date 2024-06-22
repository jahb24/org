import "./header.css"

function Header(){
    //En react se utiliza className en lugar de class, para no confundir una clase de POO con una clase para estilo
    return <header className="header">
        <img src='/img/header.png' alt='imagen org'/>
    </header>
}

export default Header