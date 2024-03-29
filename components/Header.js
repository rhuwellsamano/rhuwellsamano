import Logo from '../components/Logo';
import Nav from '../components/Nav';

const Header = () => (
  <div className="header-wrapper">
    <Logo />
    <Nav />
    <style jsx>{`
      .header-wrapper {
        width: 100%;
        background: #232A34;
        opacity: 95%;
        padding: 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow-x: hidden; 
      }
      @media (max-width: 600px) {
        .header-wrapper {
          display: block;
          text-align: center;
        }
      }
    `}</style>
  </div>
);

export default Header;