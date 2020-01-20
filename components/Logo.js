import Link from 'next/link';

const Logo = () => (
  <div className="logo">
    <Link href="/">
    <a><img src="/static/portfolio-logo-2.svg" /></a>
    </Link>

    <style jsx>{`
      .logo img {
        display: block;
        width: 220px;
        margin-left: 20px;
      }
      @media (max-width: 600px) {
        .logo {
          display: inline-block;
        }
      }
    `}</style>
  </div>
);

export default Logo;