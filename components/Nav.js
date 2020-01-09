import Link from 'next/link';

const Nav = () => (
  <ul className="nav">
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>About Me</a>
      </Link>
    </li>
    <style jsx>{`
      .nav {
        font-family: 'Varta';
        margin: 0px 0 0;
        list-style: none;
        display: flex;
        background: #232A34;
      }
      .nav li a {
        display: inline-block;
        height: auto;
        font-size: 16px;
        color: #FFF;
        font-weight: 300;
        min-height: 65px;
        padding: 20px 40px;
        text-align: center;
      }
      .nav li a:hover {
        padding-bottom: 3px;
        border-bottom: 2px solid #FFF;
      }
      @media (max-width: 600px) {
        .nav {
          display: block;
          margin-top: 20px;
        }
        .nav li {
          display: inline-block;
        }
        .nav li a {
          font-size: 18px;
        }
      }
    `}</style>
  </ul>
);

export default Nav;