import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/Footer.png)" }}>
    <div className='redes'>
        <a href='www.linkedin.com/in/sofía-fornaroli'>
            <img className="linkedin" src="../img/linkedin2.png" alt='Linkedin' />
        </a>

        <a href='www.linkedin.com/in/sofía-fornaroli'>
            <img src="./img/instagram.png" alt='instagram' />
        </a>
    </div>
    {/* <img className="logo-img" src='/img/Logo.png' alt='org' /> */}
   
</footer>
}

export default Footer