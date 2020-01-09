const Footer = () => (
    <div className="footer-wrapper">
      <div className="copyright">© {new Date().getFullYear()} Rhuwell Samano</div>
      <style jsx>{`
        .footer-wrapper {
          text-align: center;
          margin-top: 10px;
          padding: 10px 30px;
        }
        .copyright {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
  
  export default Footer;