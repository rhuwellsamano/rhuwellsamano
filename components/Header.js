import Logo from '../components/Logo';
import Nav from '../components/Nav';

const Header = () => (
  <div className="header-wrapper">
    <Logo />
    <Nav />
    <style jsx>{`
      .header-wrapper {
        background: #232A34;
        padding: 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
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