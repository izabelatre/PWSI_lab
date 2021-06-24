import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Image1 from '../assets/img/calendar2.gif'

const hStyle = { color: '#08dd4f'};

class HomePage extends React.Component {
  
  render() {
    if(localStorage.getItem("color")=== "yes"){
    return (
      <div>
        <br></br><br></br><br></br>
        <Navbar text1="Zarejestruj się" text2="Zaloguj się" />
        <section>
          <div class="container">
            <div class="row align-items-center">
 
              <div class="col-lg-8 order-lg-2">
                <div class="p-5">
                  <img class="img" src={Image1} alt="" />
                </div>
              </div>
              <div class="col-lg-4 order-lg-1">
                <div class="p-1">
                  <h1 style={ hStyle } class="display-4">Meeter</h1>
                  <p style={ hStyle }  >Aplikacja pomagająca w zarządzaniu czasem i planowaniu spotkań.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );}
    else{
      return (
        <div>
          <br></br><br></br><br></br>
          <Navbar text1="Zarejestruj się" text2="Zaloguj się" />
          <section>
            <div class="container">
              <div class="row align-items-center">
   
                <div class="col-lg-8 order-lg-2">
                  <div class="p-5">
                    <img class="img" src={Image1} alt="" />
                  </div>
                </div>
                <div class="col-lg-4 order-lg-1">
                  <div class="p-1">
                    <h1 class="display-4">Meeter</h1>
                    <p>Aplikacja pomagająca w zarządzaniu czasem i planowaniu spotkań.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      );
    }
  }
}

export default HomePage;