import React from "react";
import $ from "jquery";

function Footer() {
  const removeFixedClassFromNavigateTopButton = () => {
    window.addEventListener("scroll", () => {
      const tooth = document.querySelector("footer .tooth");
      const footer = document.querySelector("footer");
      const scrollPosition = window.scrollY + window.innerHeight;
      const footerPosition = footer.offsetTop;

      if (scrollPosition >= footerPosition) {
        tooth.classList.remove("fixed");
      } else {
        tooth.classList.add("fixed");
      }
    });
  };

  removeFixedClassFromNavigateTopButton();

  return (
    <>
      <footer>
        <div className="tooth fixed">
          <button
            onClick={() => {
              $(window).scrollTop(0);
            }}
          ></button>
        </div>
        <div className="back">
          <div className="container">
            <div className="socials">
              <h3>Tu nas znajdziesz</h3>
              <div className="social">
                <a href="facebook.com">
                  <i className="fab fa-facebook"></i> facebook
                </a>
              </div>
              <div className="social">
                <a href="instagram.com">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </div>
              <div className="social">
                <a href="twitter.com">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </div>
            </div>
            <div className="contact">
              <h3>Kontakt</h3>
              <p>ul. Śniadeckich 2</p>
              <p>75-453 KOSZALIN</p>
              <p>
                <i className="fas fa-phone mr-1"></i>+48 94 347-85-00
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
