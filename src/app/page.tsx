import Image from "next/image";

export default function Home() {
  return (
    <>
    <header>
        <div className="container">
            <h1>COFFEE SHOPS TIA ROSA</h1>
            <nav>
                <ul>
                    <li><a href="#about">Sobre Nós</a></li>
                    <li><a href="#products">Produtos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </div>
    </header>
    
    <section id="hero">
        <div className="container">
            <h2>O melhor café e acesso à internet</h2>
            <p>Desfrute do nosso ambiente acolhedor e dos nossos deliciosos produtos</p>
        </div>
    </section>

    <section id="about" className="container">
        <h2>Sobre Nós</h2>
        <p>O COFFEE SHOPS TIA ROSA é dedicado a oferecer os melhores cafés e um ambiente confortável para nossos clientes. Nossa missão é proporcionar uma experiência única, combinando sabores incríveis com um espaço aconchegante.</p>
    </section>

    <section id="products" className="container">
        <h2>Produtos</h2>
        <div className="product-list">
            <div className="product">
                <h3>Café Expresso</h3>
                <p>A nossa especialidade, feito com os melhores grãos.</p>
            </div>
            <div className="product">
                <h3>Cappuccino</h3>
                <p>Uma combinação perfeita de café, leite e espuma.</p>
            </div>
            <div className="product">
                <h3>Smoothie de Frutas</h3>
                <p>Refrescante e saudável, perfeito para qualquer hora do dia.</p>
            </div>
        </div>
    </section>

    <section id="contact" className="container">
        <h2>Contato</h2>
        <p>Para mais informações, entre em contato conosco:</p>
        <p>Email: contato@tia-rosa.com</p>
        <p>Telefone: (11) 1234-5678</p>
    </section>

    <footer>
        <div className="container">
            <p>&copy; 2024 COFFEE SHOPS TIA ROSA. Todos os direitos reservados.</p>
        </div>
    </footer>
    </>
  );
}
