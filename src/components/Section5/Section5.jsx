import './Section5.css';

function Section5() {
    return (
        <div className="section5-container">

            <h2 className='title'>SIMULE AGORA</h2>

            <div className="simulation">

                <div className="country-weight">

                    <div className="country">

                        <p>País</p>

                        <div className="flags">
                            <img src="./src/assets/Brasil.png" alt="Brazil" />
                            <img src="./src/assets/EUA.png" alt="USA" />
                            <img src="./src/assets/Mundo.png" alt="World" />
                        </div>

                    </div>

                    <div className="weight">

                        <p>Peso</p>

                        <div className="weight-options">

                            <select className='inputButtonWeight'>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>

                            <button>Kg</button>
                            <button>Lb</button>

                        </div>

                    </div>

                    <button className="simulate-button">Simule</button>

                </div>

                <div className="plans">

                    <div className="plan1">

                        <div className="best-seller">MAIS VENDIDO</div>

                        <h3>Plan's name</h3>

                        <p>US$ XX,XX</p>
                        <hr className='barraSimulate1'/>
                        <ul>
                            <li>Frete US$ XX,XX + Taxa BechMax US$ XX,XX</li>
                            <li>Prazo de entrega: XX a XX dias</li>
                            <li>Peso máx: XX lb/kg</li>
                            <li>Tamanho máx: P + L + A: XX cm</li>
                            <li>Lado maior máx: XX cm</li>
                            <li>Valor máx. declarado: US$ XX,XX</li>
                        </ul>

                    </div>

                    <div className="plan2">

                        <h3>Plan's name</h3>

                        <p>US$ XX,XX</p>
                        <hr className='barraSimulate2'/>
                        <ul>
                            <li>Frete US$ XX,XX + Taxa BechMax US$ XX,XX</li>
                            <li>Prazo de entrega: XX a XX dias</li>
                            <li>Peso máx: XX lb/kg</li>
                            <li>Tamanho máx: P + L + A: XX cm</li>
                            <li>Lado maior máx: XX cm</li>
                            <li>Valor máx. declarado: US$ XX,XX</li>
                        </ul>

                    </div>

                    <div className="plan3">

                        <h3>Plan's name</h3>
                        <p>US$ XX,XX</p>
                        <hr className='barraSimulate3'/>

                        <ul>
                            <li>Frete US$ XX,XX + Taxa BechMax US$ XX,XX</li>
                            <li>Prazo de entrega: XX a XX dias</li>
                            <li>Peso máx: XX lb/kg</li>
                            <li>Tamanho máx: P + L + A: XX cm</li>
                            <li>Lado maior máx: XX cm</li>
                            <li>Valor máx. declarado: US$ XX,XX</li>
                        </ul>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Section5;
