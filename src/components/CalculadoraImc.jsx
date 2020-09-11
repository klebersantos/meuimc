import React, { Component } from 'react'


function MessageIMC(result) {
    if (result < 18.5) return (<span className="laranja">Baixo peso <span role="img" aria-label="emoji">😶</span></span>);
    if (result > 18.5 && result < 24.5) return (<span className='verde'>Peso ideal <span role="img" aria-label="emoji">🤩</span></span>);
    if (result > 24.5 && result < 29.5) return (<span className='darkred'>Sobrepeso <span role="img" aria-label="emoji">😐</span></span>);
    if (result > 29.5 && result < 34.5) return (<span className='red'>Obesidade Grau 1 <span role="img" aria-label="emoji">😲</span></span>);
    if (result > 34.5 && result < 39.5) return (<span className='red'>Obesidade Grau 2 <span role="img" aria-label="emoji">🙄</span></span>);
    if (result > 39.5) return (<span className='red'>Obesidade Grau 3 <span role="img" aria-label="emoji">🤔</span></span>);
}
class CalculadoraImc extends Component {

    constructor() {
        super();
        this.state = {
            massa: 0,
            altura: 0,
            disabled: false,
            valor: ""
        }

        this.handleMassa = this.handleMassa.bind(this);
        this.handleAltura = this.handleAltura.bind(this);
        this.clickImc = this.clickImc.bind(this);
    }

    handleMassa(event) {
        this.setState({ massa: event.target.value })
    }

    handleAltura(event) {
        this.setState({ altura: event.target.value })
    }

    clickImc(event) {
        event.preventDefault();
        const { massa, altura } = this.state;
        let valor = massa / (altura * altura)
        this.setState({ valor })
    }

    render() {
        const valor = this.state.valor;
        const result = Number.isNaN(parseFloat(valor)) ? "0" : valor;
        const messageIMC = MessageIMC(result);

        return (
            <>
                <div className="centro" >
                    <div className="foto">
                        <img alt="foto" src={require('../assets/img/img.jpg')} />
                    </div>

                    <form className="form" id="form">
                        <h1>IMC</h1>
                        <p>Cuide bem da sua saúde.</p>
                        <div className="campos">
                            <div className="inpt">
                                <label htmlFor="input" className="labs">Peso (kg)</label>
                                <input
                                    id="input"
                                    onChange={this.handleMassa}
                                    required
                                    type="text"
                                    className="peso"
                                    autoFocus
                                    placeholder="Digite seu peso"
                                    name="peso" />
                            </div>
                            <div className="inpt">
                                <label htmlFor="input2" className="labs">Altura (cm)</label>
                                <input
                                    id="input2"
                                    onChange={this.handleAltura}
                                    required
                                    type="text"
                                    className="altura"
                                    placeholder="Ex: 1.80"
                                    name="altura" />
                            </div>
                        </div>

                        {
                            this.state.altura > 0.5 &&
                            <button onClick={this.clickImc} className="btn" id="botao">Calcular</button>
                        }

                        {
                            valor > 0 &&
                            <span id="result" className="result">
                                {parseFloat(result).toFixed(2)}
                            </span>
                        }

                        {
                            result > 0 &&
                            <span className="result">

                                {messageIMC}
                            </span>
                        }

                        <table id="customers">
                            <thead>
                                <tr>
                                    <th>IMC</th>
                                    <th>Condição</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>18,5</td>
                                    <td>Baixo peso</td>
                                </tr>
                                <tr>
                                    <td>18,5 - 25</td>
                                    <td>Peso ideal</td>
                                </tr>
                                <tr>
                                    <td>25 - 30</td>
                                    <td>Sobrepeso</td>
                                </tr>
                                <tr>
                                    <td>30 - 35</td>
                                    <td>Obesidade Grau 1</td>
                                </tr>
                                <tr>
                                    <td>35 - 40</td>
                                    <td>Obesidade Grau 2</td>
                                </tr>
                                <tr>
                                    <td> > 40</td>
                                    <td>Obesidade Grau 3</td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>

            </>
        )
    }
}




export default CalculadoraImc;