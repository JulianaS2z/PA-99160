import './style.css'

export default function FaleConosco() {
    function handleSubmit(e) {
        e.preventDefault()
        alert('Mensagem enviada!')
    }
    return (
        <section className="contact-section">
            <div className="contact-card">
                <h1>Fale conosco</h1>
                <p>Tire dúvidas e peça um orçamento sem compromisso.</p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-grid">
                        <label>
                            <span>Nome</span>
                            <input type="text" required placeholder="Seu nome" />
                        </label>
                        <label>
                            <span>E-mail</span>
                            <input type="email" required placeholder="seu@email.com" />
                        </label>
                        <label>
                            <span>Telefone</span>
                            <input type="tel" required placeholder="(00) 9000-0000" />
                        </label>
                    </div>
                    <label>
                        <span>Assunto</span>
                        <input type="text" required placeholder="Ex.: Abertura de empresa" />
                    </label>
                    <label>
                        <span>Mensagem</span>
                        <textarea rows="6" required placeholder="Conte-nos um pouco do seu caso."></textarea>
                    </label>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    )
}