import React from "react";
import Navbar from '../components/NavbarLogin.js'
import Footer from '../components/Footer.js'

const hStyle = { color: '#08dd4f'};

class ReportPage extends React.Component {
  render() {
    if(localStorage.getItem("color")=== "yes"){
      return (
          <div>
            <section>
            <Navbar text1="Zgłoś błąd" text3 = "Wyświetl plany dnia" text2 = "Dodaj plan dnia"/>
            </section>
            <section>
              <body class="report">
                  <fieldset class="report">
                      <h2 style={ hStyle }>Zgłoszenie błędu</h2>
                      <br></br>
                      <p style={ hStyle }>W przypadku wykrycia błędu bądź awarii, proszę powiadom nas poprzez wysłania maila do administratora na adres: </p>
                      <h3 style={ hStyle }>meeter@meeter.com</h3>
                  </fieldset>
              </body>
              </section>
              <Footer />
          </div>
      );}
      else{
        return (
            <div>
              <section>
              <Navbar text1="Zgłoś błąd" text3 = "Wyświetl plany dnia" text2 = "Dodaj plan dnia"/>
              </section>
              <section>
                <body class="report">
                    <fieldset class="report">
                        <h2>Zgłoszenie błędu</h2>
                        <br></br>
                        <p>W przypadku wykrycia błędu bądź awarii, proszę powiadom nas poprzez wysłania maila do administratora na adres: </p>
                        <h3>meeter@meeter.com</h3>
                    </fieldset>
                </body>
                </section>
                <Footer />
            </div>
        );
      }
  }
}
export default ReportPage;