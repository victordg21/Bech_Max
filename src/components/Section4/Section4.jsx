import './Section4.css';

function Section4() {
    return (
        <div className="section4-container">

            <h2 className='title'>COMO FUNCIONA</h2>

            <div className="steps">

                <div className="step">
                    <img src="./src/assets/shop.png" alt="Icone 1" />
                    <h3>1. FAÇA SEU PEDIDO</h3>
                    <p>
                        Escolha os produtos que deseja comprar nos 
                        Estados Unidos e adicione-os ao seu carrinho. 
                        Aproveite as vantagens de nossa plataforma 
                        para encontrar ofertas e promoções exclusivas.
                    </p>
                </div>

                <div className="step">
                    <img src="./src/assets/check.png" alt="Icone 2" />
                    <h3>2. CONFIRMAÇÃO E COMPRA</h3>
                    <p>
                        Envie seu pedido para nossa equipe. Nós 
                        cuidaremos de todo o processo de compra 
                        e validação nos Estados Unidos, garantindo 
                        que seus produtos sejam adquiridos com 
                        segurança e rapidez.
                    </p>
                </div>

                <div className="step">
                    <img src="./src/assets/flight.png" alt="Icone 3" />
                    <h3>3. ENVIO E ENTREGA</h3>
                    <p>
                        Após a compra, enviaremos os produtos 
                        para o Brasil e realizaremos a entrega no 
                        endereço fornecido. Acompanhe seu pedido e 
                        receba os produtos no conforto de sua casa.
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Section4;
