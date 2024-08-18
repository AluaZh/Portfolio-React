import "./style.css"

export default function Header () {
    return (
        <header className="header">
            <div className="header__wrapper">

            <h1 className="header__title">
                <strong>Hello, my name is <em>Alua</em></strong><br />
                a front-end developer
            </h1>

            <div className="header__text">
                <p>with passion for learning and creating</p>
            </div>

            <a href="#" className="btn">Download CV</a>

            </div>
        </header>
    )
}