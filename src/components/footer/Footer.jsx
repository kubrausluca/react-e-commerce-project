import React from "react";
import "./footer-style.css";

function Footer() {
  return (
    <footer class="footer mt-5">
        <div class="text-center py-5">
            <h2 class="py-3">Time Value</h2>
            <div class="mx-auto heading-line"></div>
        </div>
        <div class="container">
          <div class="row mb-3">
              <div class="col-lg-8 offset-lg-2 text-center">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla aliquet est nec aliquet. 
                    Cras convallis ultrices sem, id cursus tellus varius. </p>
                  <div class="justify-content-center">
                    <i class="fab fa-facebook fa-2x"></i>
                    <i class="fab fa-twitter fa-2x"></i>
                    <i class="fab fa-instagram fa-2x"></i>
                    
                    </div>
             </div>
          </div>
          <div class="copyright text-center py-3 border-top text-light">
            <p>&copy; Copy Right Time Value</p>
              
          </div>
        </div>

    </footer>
  );
}
export default Footer;
