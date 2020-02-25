import React, { Component } from 'react';


class Timer extends Component {
    state = { 
        duration: 5,
        handle: 0,
        message: ''
     };

     componentDidMount(){

        //Déclenche une action toutes les 10000 millisecondes
        const handle = setInterval(()=>{
            this.count();
        }, 1000);

        //initialise la propriete handle en lui affectant le chrono
        this.setState({
            handle:handle
        });

        //On initialise la propriete message en initialisant le le message compteur encours
        this.setState({
            message: "Compteur en cours"
        });
     };

     //Composant sera déchargé
     componentWillUnmount(){
        this.clean();
     }

     count = () =>{
         this.setState({
             duration: this.state.duration - 1
         });

         if( this.state.duration === 0){
             this.clean();
         }
     }

     clean = () =>{
        
        clearInterval(this.state.handle);

        this.setState({
            message: "Terminé"
        });
     }

    render() { 
        return ( 
            <div>
                <h2>Composant Timer</h2>
                <p>{this.state.duration}</p>
                <p>{this.state.message}</p>
            </div>
            
         );
    }
}
 
export default Timer;