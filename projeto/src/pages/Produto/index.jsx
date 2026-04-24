import './style.css';

export default function Produto() {
  // Simulação de dados vindos do back-end ou banco de dados
  const modulosContabeis = [
    {
      id: 1,
      titulo: 'Contabilidade Financeira',
      descricao: 'Gestão de relatórios, balanços e demonstrativos para usuários externos e auditorias.',
      icone: '📊'
    },
    {
      id: 2,
      titulo: 'Contabilidade Gerencial',
      descricao: 'Análise de dados internos e relatórios estratégicos para tomada de decisão da diretoria.',
      icone: '📈'
    },
    {
      id: 3,
      titulo: 'Contabilidade Fiscal',
      descricao: 'Apuração de tributos, gestão de impostos e entrega de obrigações acessórias.',
      icone: '📑'
    },
    {
      id: 4,
      titulo: 'Contabilidade de Custos',
      descricao: 'Controle, alocação e análise de custos de produção, produtos e serviços.',
      icone: '💰'
    }
  ];

  return (
    <section className="produtos-section">
      <header className="produtos-header">
        <h1>Produtos da Empresa</h1>
        <p>Selecione o módulo contábil que deseja acessar:</p>
      </header>
      
      <div className="produtos-grid">
        {modulosContabeis.map((modulo) => (
          <div key={modulo.id} className="produto-card">
            <div className="produto-icone">{modulo.icone}</div>
            <h2>{modulo.titulo}</h2>
            <p>{modulo.descricao}</p>
            <button className="btn-acessar">Acessar Módulo</button>
          </div>
        ))}
      </div>
    </section>
  );
}