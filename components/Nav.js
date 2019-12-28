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
        margin: 5px 0 0;
        padding: 0;
        list-style: none;
        display: flex;
      }
      .nav li a {
        font-size: 16px;
        color: #111;
        font-weight: 300;
        padding: 5px 2px;
        margin: 0 10px;
        text-decoration: none;
      }
      .nav li a:hover {
        padding-bottom: 3px;
        border-bottom: 2px solid #FF6600;
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