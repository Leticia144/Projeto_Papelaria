import estilos from './Produtos.module.css'

export default function Produtos() {
    return (
        <section id='produto' className={estilos.produtos}>
            <div className={estilos.titulos}>
                <h2>Nossos Produtos</h2>
                <p>
                    Aqui, reunimos as fragancias mais sofisticadas do mercado, trazendo
                    para você marcas renomadaas e essencias marcantes que trazewm luxo,
                    elegância e personalidade.
                </p>


                <p>
                    Autencidade garantida | as melhores marcas do mundo | envio rápido e seguro
                </p>


                <div className={estilos.creme_img}>
                    <div className={estilos.card_creme}>
                        <span className={estilos.seloNovo}>Novo</span>
                        <h3>Oceane 50g</h3>
                        <picture>
                            <img src='./Oceane.png' alt='Oceane'></img>
                        </picture>

                        <p className={estilos.preco}>R$ 30,00</p>
                        <button className={estilos.botao}>Comprar Agora</button>




                    </div>

         <div className={estilos.card_creme}>
                        <span className={estilos.selo}>Mais vendidos</span>
                        <h3>Todo dia - 400ml
                        </h3>
                        <picture>
                            <img src='./todo_dia.webp' alt='Todo Dia'></img>
                        </picture>

                        <p className={estilos.preco}>R$ 50,00</p>
                        <button className={estilos.botao}>Comprar Agora</button>

                    </div>


                
          <div className={estilos.card_creme}>
                        
                        <h3>Cuide se bem - 200ml</h3>
                        <picture>
                            <img src='./cuide-se-bem.png' alt='Cuide se bem'></img>
                        </picture>

                        <p className={estilos.preco}>R$ 35,00</p>
                        <button className={estilos.botao}>Comprar Agora</button>

                    </div>


                  <div className={estilos.card_creme}>
                        
                        <h3>Cuide se bem - Maça verde - 80g</h3>
                        <picture>
                            <img src='./maca-verde.png' alt='Todo Dia'></img>
                        </picture>

                        <p className={estilos.preco}>R$ 40,00</p>
                        <button className={estilos.botao}>Comprar Agora</button>

                    </div>












                </div>



            </div>
        </section>
    )
}