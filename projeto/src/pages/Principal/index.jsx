import './style.css'

export default function Principal() {
    return (
        <main className="home-page">
            <section className="hero-section">
                <div className="hero-content">
                    <p className="hero-tag">Contabilidade planejada para seu negócio</p>
                    <h1>Mais segurança para suas finanças e crescimento alinhado.</h1>
                    <p>Serviços fiscais, trabalhistas e contábeis com atendimento próximo e humanizado.</p>
                </div>
            </section>

            <section className="services-section">
                <h2>Nossos serviços</h2>
                <div className="services-grid">
                    <article className="service-card">
                        <h3>Contabilidade</h3>
                        <p>Organizamos suas finanças, demonstrativos e obrigações fiscais com clareza.</p>
                    </article>
                    <article className="service-card">
                        <h3>Consultoria</h3>
                        <p>Ajuda estratégica para decisões de crescimento, fluxo de caixa e tributos.</p>
                    </article>
                    <article className="service-card">
                        <h3>RH e folha</h3>
                        <p>Gestão de folha, benefícios e rotinas trabalhistas sem dor de cabeça.</p>
                    </article>
                </div>
            </section>
        </main>
    )
}