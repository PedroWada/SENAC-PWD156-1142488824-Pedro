import React,{Component} from "react";
import "./Classifica.css"


function MessageIMC(imc){
    if(imc < 18.5)
        return  "Abaixo!"
      else if (imc < 25)
        return  "Peso ideal!"
     else if (imc < 30)
        return  "Acima do peso!"  
      else if(imc >= 30)
        return  "Obesidade máxima!"
}
class Classifica extends Component{
    constructor(props){
        super(props)
        this.state={
            imc: 0,
            valor: 0
        }
        this.handleImc = this.handleImc.bind(this);
        this.clickClassifica = this.clickClassifica.bind(this);
    }
    handleImc(event){
        this.setState({imc : event.target.value});
    }
    clickClassifica(){
        let {imc} = this.state;
        let valor = imc
        this.setState({valor})
    }

    render(){
        const valor = this.state.valor;
        const messageIMC = MessageIMC(valor)
        return(
            <div className="classifica">
                <label>Digite o seu IMC </label>
   <input type="text" onChange={this.handleImc} id = "imc" placeholder='Exemplo: 25'/> <br />
   <button onClick={this.clickClassifica}>ENVIAR </button>
            {
                valor > 0 &&
            <p><strong>IMC Digitado: </strong>{this.state.valor}</p>}
            {   valor > 0 &&
                <p><strong>Classificação: </strong> {messageIMC}</p>}
            </div>
        )
    }
}
export default Classifica;