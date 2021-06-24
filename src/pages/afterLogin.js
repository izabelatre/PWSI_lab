import React from 'react'
import { NavLink } from 'react-router-dom';
import Navbar from '../components/NavbarLogin.js'


class AfterLoginPage extends React.Component {
  render() {
    if(localStorage.getItem("color")=== "yes"){
    return (
        <div>
          <section>
          <Navbar text1="Zgłoś błąd" text3 = "Zaplanuj spotkanie" text2 = "Dodaj plan dnia" text4 = "/welcome"/>
          </section>
          <section>
               <body class="afterLogin_color">
               <fieldset class="afterLogin_color">
            
                <br></br> <br></br> <br></br>
                    <h1>Witamy w aplikacji Meeter!</h1>
                    <br></br>
                    <p style={{ 'white-space': 'pre-wrap'}}>{"Zostałeś zalogowany. Możesz teraz korzystać z funkcji, które oferuje aplikacja. \n Aby przejść do wybranej funkcjonalności wybierz odpowiednie pole w menu "}</p>                    
                    <br></br> <br></br> <br></br><br></br><br></br><br></br>
                    <p class="m-0 text-center text-black small">Jeśli masz uwagi dotyczące aplikacji prosimy o kontakt.<NavLink to="/report" className="nav-link"> Zgłoś błąd</NavLink> </p>
                    
                </fieldset>
            </body>
            </section>
        </div>
    );}
    else{
      return (
        <div>
          <section>
          <Navbar text1="Zgłoś błąd" text3 = "Zaplanuj spotkanie" text2 = "Dodaj plan dnia" text4 = "/welcome"/>
          </section>
          <section>
               <body class="afterLogin">
               <fieldset class="afterLogin">
            
                <br></br> <br></br> <br></br>
                    <h1>Witamy w aplikacji Meeter!</h1>
                    <br></br>
                    <p style={{ 'white-space': 'pre-wrap'}}>{"Zostałeś zalogowany. Możesz teraz korzystać z funkcji, które oferuje aplikacja. \n Aby przejść do wybranej funkcjonalności wybierz odpowiednie pole w menu "}</p>                    
                    <br></br> <br></br> <br></br><br></br><br></br><br></br>
                    <p class="m-0 text-center text-black small">Jeśli masz uwagi dotyczące aplikacji prosimy o kontakt.<NavLink to="/report" className="nav-link"> Zgłoś błąd</NavLink> </p>
                    
                </fieldset>
            </body>
            </section>
        </div>
    );
    }
}
}

export default AfterLoginPage;