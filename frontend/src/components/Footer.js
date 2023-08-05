import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Travel</h1>
          <p>A compass of wanderlust </p>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Links</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/service">Service</a>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <h4>Connect us on</h4>
          <a href="https://wa.me/message/D2IBX5UU72FGM1">
            <i className="fa-brands fa-whatsapp-square" /> Whatsapp
          </a>
          <a href="https://instagram.com/hodophilegeoholidays?igshid=YmMyMTA2M2Y=">
            <i className="fa-brands fa-instagram-square" /> Instagram
          </a>
          <a href="/">
            <i className="fa-brands fa-facebook-square" /> Facebook
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square" /> Twitter
          </a>
        </div>
        <div>
          <h4>Get featured by hashtags</h4>
          <a href="/https://instagram.com/hodophilegeoholidays?igshid=YmMyMTA2M2Y=">
            #gohodophilegeo
          </a>
          <a href="/https://instagram.com/hodophilegeoholidays?igshid=YmMyMTA2M2Y=">
            #hodophilegeo
          </a>
          <a href="/https://instagram.com/hodophilegeoholidays?igshid=YmMyMTA2M2Y=">
            #compassofwanderlust
          </a>
          <a href="/https://instagram.com/hodophilegeoholidays?igshid=YmMyMTA2M2Y=">
            #gohodophilegeoholidays
          </a>
        </div>
        {/* <div>
               <h4>Project</h4>
               <a href="/">Changelog</a>
               <a href="/">Status</a>
               <a href="/">License</a>
               <a href="/">All Versions</a>
             </div>
             <div>
               <h4>Project</h4>
               <a href="/">Changelog</a>
               <a href="/">Status</a>
               <a href="/">License</a>
               <a href="/">All Versions</a>
             </div> */}
      </div>
    </div>
  );
};

export default Footer;