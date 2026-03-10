const etapasJornada = [];
const glossarioSiglas = [];
const entregaveisFinais = [];

etapasJornada.push({
  codigo: "Etapa 0",
  titulo: "Contexto e metas do projeto",
  introducao:
    "A reunião começa em uma tarde chuvosa em Guarulhos. Leandro chega com uma ideia forte, mas ainda aberta demais. Camila conduz a conversa para transformar intenção em direção. Nesta etapa, cada pergunta existe para reduzir incerteza e criar base de decisão para o MVP.",
  checklist: [
    "Definir tema e nicho de atuação do negócio",
    "Escolher o tipo de negócio digital prioritário",
    "Fixar meta concreta para os próximos 90 dias",
    "Delimitar público B2B ou B2C e capacidade de execução",
    "Mapear restrições operacionais, financeiras e de escopo"
  ],
  falas: [
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Leandro, antes de discutir tecnologia, preciso da base estratégica. Se a gente pular isso, o produto nasce bonito, mas sem tração. Vamos começar pelo contexto e pelas metas?",
      explicacaoDocente:
        "A consultora começa pelo diagnóstico porque produto sem problema claro gera retrabalho. Em consultoria, ordem importa: contexto -> problema -> público -> solução."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Faz total sentido. Quero construir algo profissional, então prefiro responder tudo com clareza agora para não improvisar depois.",
      explicacaoDocente:
        "Quando o empreendedor aceita o rito de diagnóstico, a consultoria ganha velocidade nas etapas seguintes. Esse alinhamento inicial é um sinal positivo."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Primeira pergunta: qual é a área do negócio e quem sente a dor mais aguda?",
      explicacaoDocente:
        "A pergunta foca segmento e dor. Sem nicho, a proposta fica genérica e o custo de aquisição sobe."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "A área é alimentação com serviços B2B. Quero atender restaurantes de pequeno e médio porte que precisam contratar prestadores com agilidade, confiança e previsibilidade.",
      explicacaoDocente:
        "Resposta forte porque combina setor, tipo de cliente e benefício esperado. Isso já prepara a proposta de valor."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Ótimo. E o formato do negócio digital? Você quer e-commerce, curso, comunidade, marketplace ou plataforma operacional?",
      explicacaoDocente:
        "Aqui se define arquitetura do modelo. O mesmo problema pode ter modelos muito diferentes de receita e operação."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Quero app/plataforma. A ideia é intermediar e organizar a contratação de serviços, conectando restaurantes a técnicos e empresas especializadas.",
      explicacaoDocente:
        "Ele escolhe plataforma com função de intermediação e gestão. Isso indica modelo de dois lados, com risco de cold start."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Perfeito. Agora meta de 90 dias: o que precisa acontecer para você considerar que o projeto saiu do papel?",
      explicacaoDocente:
        "Meta temporal reduz dispersão. Prazo de 90 dias é clássico para validar hipótese sem sobre-investir."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Quero validar a proposta de valor e montar um MVP funcional. Preciso mapear dores do público, fechar escopo mínimo, validar atratividade da solução e preparar operações piloto.",
      explicacaoDocente:
        "A resposta está orientada a validação, não a escala. Isso é maturidade de execução para estágio inicial."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "E sobre o público comercial e a capacidade de execução: será B2B, B2C ou misto? Quantas horas por semana você consegue dedicar?",
      explicacaoDocente:
        "Perguntas de viabilidade evitam plano incompatível com recursos reais."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Foco principal em B2B. No começo, vou operar com 10 a 15 horas por semana, praticamente sozinho, com apoio pontual de parceiros em design, desenvolvimento e marketing.",
      explicacaoDocente:
        "A assunção de capacidade é essencial para definir escopo. Sem isso, o MVP vira projeto inflado."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Último bloco: quais restrições já existem? Orçamento, região, ferramentas ou regras de operação.",
      explicacaoDocente:
        "Restrições não são problema. Elas funcionam como bordas para decisões de priorização."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Temos orçamento controlado, então precisamos validar antes de investir mais. O MVP deve ser enxuto, com foco geográfico inicial, ferramentas de baixo custo e um modelo simples para o mercado entender.",
      explicacaoDocente:
        "Resposta orientada a eficiência. Isso combina com estratégia de piloto local e aprendizado rápido."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Fechamos a etapa 0 com uma base clara: plataforma B2B para food service, meta de validação em 90 dias, operação enxuta e foco em simplicidade. Pendências: nome da marca, região exata do piloto e modelo de receita prioritário.",
      explicacaoDocente:
        "A síntese da etapa evita perda de contexto. Em consultoria, cada rodada precisa terminar com definições e pendências explícitas."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Excelente. Com essa estrutura, já consigo enxergar o projeto com mais segurança e sei exatamente o que ainda precisa ser decidido.",
      explicacaoDocente:
        "Encerramento com clareza de próximos passos é sinal de etapa bem concluída."
    }
  ],
  revisao: [
    "Negócio definido como plataforma B2B para restaurantes e serviços técnicos.",
    "Meta de 90 dias focada em validação e MVP funcional, não em escala precoce.",
    "Capacidade operacional assumida: 10 a 15 horas semanais com equipe enxuta.",
    "Restrições mapeadas: orçamento controlado, piloto regional e ferramentas acessíveis."
  ],
  saibaMais: {
    titulo: "Por que a Etapa 0 é decisiva?",
    texto:
      "Porque ela evita três erros caros: falar com público genérico, construir produto acima da capacidade de execução e perseguir métricas antes de validar dor real."
  },
  entrega:
    "Painel inicial estruturado com público, problema, proposta preliminar, hipóteses de receita, restrições e lista de pendências críticas para a Etapa 1."
});

etapasJornada.push({
  codigo: "Etapa 1",
  titulo: "Ideia, problema e público em profundidade",
  introducao:
    "Com o terreno pronto, Camila aprofunda a dor operacional do cliente. O foco deixa de ser a ideia ampla e vira cenário real de uso. A conversa ganha precisão: serviço crítico, região piloto, formato de operação e risco de adesão dos dois lados.",
  checklist: [
    "Definir o antes e depois percebido pelo restaurante",
    "Selecionar serviços críticos para o MVP inicial",
    "Escolher recorte geográfico do piloto",
    "Decidir nível de atuação da plataforma na jornada",
    "Descrever persona prioritária e risco principal de adoção"
  ],
  falas: [
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Agora vamos tornar sua proposta mais concreta. Em uma frase, qual transformação você quer gerar no dono do restaurante?",
      explicacaoDocente:
        "A lógica do antes e depois força clareza de benefício. Se essa frase estiver fraca, o posicionamento inteiro fica fraco."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Hoje ele perde tempo, corre riscos e vive incerteza ao buscar prestadores. Depois da plataforma, encontra, contrata e acompanha serviços essenciais com rapidez, segurança e previsibilidade.",
      explicacaoDocente:
        "Resposta completa: dor atual, solução proposta e ganho objetivo."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Quais serviços entram no MVP? Não vale abraçar tudo.",
      explicacaoDocente:
        "Recorte de escopo protege o MVP. Sem recorte, não há aprendizado confiável."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Vamos começar por manutenção de equipamentos de cozinha e refrigeração, elétrica e hidráulica, limpeza técnica, suporte em TI e PDV, além de consultoria sanitária para ajustes operacionais básicos.",
      explicacaoDocente:
        "Ele prioriza serviços urgentes e recorrentes. Isso aumenta frequência de uso e valor percebido."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Onde começa o piloto? Região ampla demais complica aquisição e atendimento.",
      explicacaoDocente:
        "Geografia é alavanca de eficiência no início. Distância afeta custo, tempo e SLA."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Guarulhos como base, com raio operacional entre 15 e 25 km. Depois disso, expansão gradual para zonas estratégicas da Grande São Paulo.",
      explicacaoDocente:
        "Recorte geográfico bem escolhido para validar operação com proximidade."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "E o nível de envolvimento da plataforma? Só conectar, conectar e organizar, ou também operar pagamentos e repasses?",
      explicacaoDocente:
        "Pergunta de arquitetura operacional. Cada nível muda complexidade e custos de implementação."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Quero a opção intermediária: conectar e organizar. A plataforma cadastra demanda, agenda, confirma atendimento, mantém histórico e avaliação, mas sem camada financeira completa no MVP.",
      explicacaoDocente:
        "Decisão equilibrada: entrega valor acima de um diretório simples, sem entrar cedo em complexidade financeira."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Qual perfil você quer atingir primeiro?",
      explicacaoDocente:
        "Persona inicial define linguagem de venda, canal e ticket aceitável."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Dono operador de uma unidade ou gestor de até três unidades. É quem sente a dor no dia a dia, decide rápido e valoriza solução prática.",
      explicacaoDocente:
        "Persona com dor intensa e autonomia de decisão tende a acelerar ciclos de validação."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Na sua visão, o que pode impedir o negócio de ganhar tração no início?",
      explicacaoDocente:
        "Pergunta de risco central. Boas decisões de piloto nascem daqui."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "O maior risco é confiança dos dois lados ao mesmo tempo. Restaurante pode desconfiar da plataforma nova e prestador pode não ver valor imediato. Sem equilíbrio de oferta e demanda, o modelo trava.",
      explicacaoDocente:
        "Ele identifica corretamente o efeito ovo e galinha típico de marketplaces."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Excelente leitura. Fechamos com uma proposta mais cirúrgica, público bem definido e tese clara de valor. Próximas decisões abertas: nome da marca, modelo de receita do MVP e plano prático para cold start.",
      explicacaoDocente:
        "A consultora já prepara o terreno para monetização e go to market."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Perfeito. Agora ficou claro como avançar sem dispersar e com foco em validação real.",
      explicacaoDocente:
        "Quando o empreendedor enxerga foco, a execução tende a ficar mais disciplinada."
    }
  ],
  revisao: [
    "Proposta de transformação validada com linguagem clara para o cliente.",
    "Escopo inicial de serviços definido com foco em urgência e recorrência.",
    "Piloto delimitado em Guarulhos com raio de 15 a 25 km.",
    "Modelo operacional escolhido: conectar e organizar, sem financeiro completo no MVP.",
    "Risco central mapeado: cold start de oferta e demanda."
  ],
  saibaMais: {
    titulo: "JTBD aplicado nesta etapa",
    texto:
      "A conversa trabalha Job To Be Done na prática: quando um equipamento crítico para, o gestor não compra apenas um serviço técnico. Ele compra continuidade operacional com risco reduzido."
  },
  entrega:
    "Hipótese de persona consolidada, dor prioritária explicitada, proposta de valor refinada e escopo funcional do MVP ajustado ao contexto local."
});

etapasJornada.push({
  codigo: "Etapa 2",
  titulo: "Pesquisa de mercado prática e concorrência",
  introducao:
    "Com a proposta mais afiada, Camila leva Leandro para a rua: entrevistas curtas, validação de dor real e leitura de concorrência local. Nesta etapa, o objetivo é evitar suposições frágeis e transformar hipótese em evidência prática antes do piloto.",
  checklist: [
    "Definir base inicial de restaurantes para entrevistas",
    "Mapear prestadores fundadores de refrigeração e cozinha",
    "Montar plano de entrevistas para 7 a 10 dias",
    "Validar hipótese de comissão com lógica de teste",
    "Listar alternativas atuais usadas pelos restaurantes",
    "Mapear concorrentes diretos parciais e indiretos em SP/Guarulhos"
  ],
  falas: [
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Chegou a etapa em que a hipótese precisa encostar na realidade. Vamos mapear dores reais, alternativas atuais e concorrência para reduzir surpresa no piloto.",
      explicacaoDocente:
        "A etapa de pesquisa prática evita que o MVP seja construído com base só em opinião interna."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Para facilitar, deixo um roteiro enxuto de entrevista de 5 a 10 minutos: <br><br><strong>1)</strong> Quando freezer ou forno quebra, o que você faz primeiro e quanto tempo leva para resolver? <br><strong>2)</strong> Já usou app ou site para isso? O que funcionou e o que incomodou? <br><strong>3)</strong> Se existisse um lugar para abrir chamado, ver disponibilidade e acompanhar atendimento, você usaria? Qual taxa aceitaria pagar?",
      explicacaoDocente:
        "Esse script coleta comportamento atual, experiência com alternativa e sensibilidade de preço em poucos minutos."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Excelente. Assim a gente evita entrevista longa e consegue padrão comparável entre respostas.",
      explicacaoDocente:
        "Padronizar perguntas ajuda a comparar respostas e encontrar padrão de decisão."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Primeiro ponto: você já tem contatos de restaurantes no perfil ideal em Guarulhos?",
      explicacaoDocente:
        "Sem base mínima de contato, pesquisa de mercado vira intenção e não execução."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Sim. Para um piloto viável, vou trabalhar com 10 a 20 contatos qualificados de restaurantes independentes, acessando por WhatsApp, visita curta, indicação e grupos locais de comerciantes e food service.",
      explicacaoDocente:
        "A faixa de 10 a 20 contatos é suficiente para identificar padrão inicial sem travar o cronograma."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Ótimo. E do lado da oferta? Você já tem de 3 a 5 prestadores de refrigeração e cozinha para começar?",
      explicacaoDocente:
        "Marketplaces precisam dos dois lados em movimento. A oferta inicial é gargalo comum."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Sim, essa é a meta mínima. Vou buscar mistura de autônomos qualificados e pequenas empresas. Se faltar base própria, capto em Google, OLX, grupos de Facebook, indicações e plataformas generalistas como GetNinjas e Tá Contratado.",
      explicacaoDocente:
        "Resposta boa porque combina captação ativa local com fontes digitais de baixo custo."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Agora a execução da pesquisa: qual é seu plano de entrevistas para os próximos 7 a 10 dias?",
      explicacaoDocente:
        "Pesquisa sem agenda vira tarefa adiada. Datas forçam execução."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Dia 1 e 2: lista com 10 a 15 restaurantes e 5 a 8 prestadores. Dia 3 a 6: abordagem por WhatsApp e visitas em horário de menor pico. Dia 7 a 10: consolidação dos padrões em planilha simples. Meta: 5 a 10 entrevistas com restaurantes, 3 a 5 com prestadores, dedicando 4 a 6 horas na semana.",
      explicacaoDocente:
        "Plano realista, com volume e tempo compatíveis com a disponibilidade assumida do projeto."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Sobre monetização no piloto: comissão entre 10% e 15% por serviço faz sentido para você?",
      explicacaoDocente:
        "A pergunta testa viabilidade sem fechar preço definitivo cedo demais."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Faz sentido como faixa de teste, mas começo com 10%. Em um chamado de R$ 500, isso gera R$ 50 de comissão. Se a plataforma entregar demanda qualificada e velocidade, a percepção de justiça aumenta para os dois lados.",
      explicacaoDocente:
        "Começar no limite inferior reduz fricção de entrada e melhora taxa de adesão no MVP."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Perfeito. Agora a pergunta de realidade operacional: hoje, quais alternativas o dono usa quando freezer falha?",
      explicacaoDocente:
        "Mapear alternativa atual define com quem você realmente concorre no dia a dia."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Três caminhos dominam: indicação boca a boca, busca rápida no Google/WhatsApp/Instagram e retorno para técnico já conhecido. Mesmo quando o serviço não é ideal, o dono repete porque reduz risco percebido.",
      explicacaoDocente:
        "Aqui aparece concorrência comportamental: hábito e confiança prévia são barreiras fortes."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "E sobre concorrência em SP e Guarulhos? Você enxerga algum player realmente dominante no nicho exato?",
      explicacaoDocente:
        "É importante separar concorrente direto de alternativa parcial e de plataforma generalista."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Vejo concorrentes indiretos fortes, como GetNinjas e Triider, além de diretórios como Tá Contratado. No nicho técnico especializado, há empresas como Sistera, Topema, New Master e prestadores locais como Frio-On e TKL Serv. Ainda não vejo um app amplamente consolidado focado só em manutenção sob demanda para restaurantes independentes em Guarulhos.",
      explicacaoDocente:
        "Conclusão estratégica: há competição, mas também espaço para diferenciação por nicho e jornada organizada."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Último ajuste de priorização: para entrevistas iniciais, você prefere começar por restaurantes ou por prestadores?",
      explicacaoDocente:
        "Essa decisão define sequência da validação e velocidade de aprendizado."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Vou priorizar restaurantes primeiro para calibrar dor, urgência e disposição de uso, sem abandonar o recrutamento paralelo de 3 a 5 prestadores fundadores. Assim validamos demanda e já garantimos capacidade mínima de atendimento.",
      explicacaoDocente:
        "Priorizar demanda com oferta mínima em paralelo é abordagem pragmática para evitar efeito vazio no piloto."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Excelente. Fechamos com plano acionável de pesquisa, script de abordagem e matriz inicial de concorrência. Isso deixa a Etapa 3 muito mais precisa para proposta e posicionamento.",
      explicacaoDocente:
        "Encerramento correto: coleta prática alimenta decisões estratégicas das etapas seguintes."
    }
  ],
  revisao: [
    "Base inicial definida com 10 a 20 restaurantes e 3 a 5 prestadores fundadores.",
    "Plano de entrevistas estruturado para execução em 7 a 10 dias com registro simples.",
    "Faixa de comissão validada para teste, com entrada sugerida de 10%.",
    "Alternativas atuais mapeadas: indicação, busca digital e técnico recorrente.",
    "Concorrência classificada entre indireta e direta parcial, com espaço para diferenciação local."
  ],
  saibaMais: {
    titulo: "Leitura técnica da concorrência nesta etapa",
    texto:
      "No início, seu principal concorrente costuma ser o comportamento atual do cliente, não apenas outro aplicativo. Por isso, a matriz deve incluir hábitos, canais improvisados e fornecedores recorrentes."
  },
  entrega:
    "Plano de pesquisa prática fechado com roteiro de entrevista, estratégia de abordagem, hipóteses de preço para teste e matriz de concorrência inicial para Guarulhos/SP."
});

etapasJornada.push({
  codigo: "Etapa 3",
  titulo: "Proposta de valor e posicionamento",
  introducao:
    "Depois da pesquisa prática, Camila e Leandro refinam a mensagem central do negócio. Agora a pergunta não é só o que a plataforma faz, mas como ela se posiciona para ser escolhida no momento de urgência. A etapa traduz diagnóstico em mensagem comercial clara para pitch, entrevista e teste de MVP.",
  checklist: [
    "Validar a persona principal com caso típico real",
    "Definir hierarquia da mensagem de valor",
    "Ajustar frase central da proposta de valor",
    "Escolher incentivo para prestadores fundadores",
    "Definir tagline da marca para comunicação inicial",
    "Fixar eixo principal de diferenciação competitiva"
  ],
  falas: [
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Com base no que validamos, vou consolidar uma versão refinada da proposta de valor e do posicionamento para você usar em pitch e entrevistas.",
      explicacaoDocente:
        "Nesta etapa, o foco é transformar análise em mensagem comercial simples, memorável e defensável."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Persona principal proposta: dono operador de restaurante, perfil João da Hamburgueria, entre 30 e 45 anos, em Guarulhos. Dor típica: freezer quebra numa sexta e ele perde venda, insumo e tempo caçando técnico.",
      explicacaoDocente:
        "A persona precisa ser concreta o suficiente para orientar comunicação, canal e argumento de venda."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "JTBD dessa persona: quando um equipamento crítico falha, ele precisa de técnico confiável no mesmo dia, sem depender de indicação incerta.",
      explicacaoDocente:
        "JTBD tira o foco da ferramenta e coloca na tarefa crítica que o cliente quer resolver."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Para orientar o discurso inicial, proponho esta base: Pronto Cozinha, serviços essenciais para restaurantes sem complicação. Abra chamado em 2 minutos, encontre prestador curado disponível, acompanhe status e histórico, e avalie para ganhar confiança recorrente.",
      explicacaoDocente:
        "Boa proposta combina benefício imediato, processo simples e ganho de confiança no médio prazo."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 1: a persona João da Hamburgueria reflete bem seu público? Me descreva um contato típico real com nome fictício.",
      explicacaoDocente:
        "A validação por caso real evita persona genérica criada só no papel."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Reflete muito bem. João é dono operador de uma hamburgueria com uma unidade, operação noturna intensa e equipe enxuta. Quando freezer, chapa ou coifa falham, ele corre para indicação ou busca urgente no Google e no WhatsApp, sem clareza de confiança, prazo e custo.",
      explicacaoDocente:
        "Descrição boa porque traz rotina, dor operacional e comportamento de compra sob pressão."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 2: na frase de valor, qual ênfase vem primeiro para você: rapidez, confiança com curadoria, ou organização com histórico?",
      explicacaoDocente:
        "Escolher eixo principal de mensagem evita comunicação difusa."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "A prioridade é confiança e curadoria. Em seguida, rapidez. Depois, organização e histórico. Em manutenção crítica, o cliente prefere alguém certo e confiável antes de apenas alguém rápido.",
      explicacaoDocente:
        "Hierarquia correta para ambiente de risco operacional alto."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Perfeito. Então a frase de valor fica: encontre técnicos confiáveis para seu restaurante com mais rapidez, menos improviso e acompanhamento organizado.",
      explicacaoDocente:
        "A frase final une decisão racional de risco com benefício operacional imediato."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 3: para prestadores fundadores, qual incentivo inicial você quer usar?",
      explicacaoDocente:
        "Incentivo inicial é chave para ativar oferta qualificada no começo do marketplace."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Quero um pacote simples e forte: 0% de comissão nos primeiros 5 serviços, selo de parceiro fundador e prioridade nos chamados iniciais. Assim reduzimos barreira de entrada e aumentamos engajamento.",
      explicacaoDocente:
        "Boa combinação entre ganho financeiro imediato e reconhecimento de status."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 4: sobre tagline, a opção inicial era técnico confiável para seu restaurante. Já. Você aprova ou prefere ajuste?",
      explicacaoDocente:
        "Tagline precisa ser curta, clara e coerente com tom da marca."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Prefiro ajustar para um tom mais profissional: Técnicos confiáveis para manter seu restaurante funcionando.",
      explicacaoDocente:
        "Escolha sólida para B2B porque comunica continuidade operacional, não só urgência."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 5: no posicionamento competitivo, você quer diferenciar mais por local Guarulhos, por nicho food service ou por curadoria com histórico?",
      explicacaoDocente:
        "Definir eixo de diferenciação é fundamental contra concorrentes generalistas."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Quero diferenciar primeiro por nicho food service, depois por curadoria e histórico. O fator local Guarulhos é estratégia de entrada, não a essência da marca.",
      explicacaoDocente:
        "Posicionamento bem estruturado: essência de nicho com execução local."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Excelente. O posicionamento consolidado fica assim: para restaurantes independentes com falhas operacionais críticas, o Pronto Cozinha conecta técnicos confiáveis com mais contexto, organização e segurança do que alternativas generalistas.",
      explicacaoDocente:
        "Frase de posicionamento já comparável a concorrentes e aplicável em apresentação comercial."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Fechando com um pitch de 30 segundos para entrevista: João, sei como é perder venda com freezer parado e ficar caçando técnico no WhatsApp. A Pronto Cozinha conecta você a prestador curado de Guarulhos, organiza o atendimento e deixa histórico para próxima urgência. Testaria no próximo problema com taxa de R$ 50 a R$ 75?",
      explicacaoDocente:
        "Pitch curto com dor, solução, diferencial e pergunta de validação de preço."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Última decisão desta etapa: seguimos para a Etapa 4, focada em MVP e jornada, ou você quer aprofundar algum ponto de mensagem agora?",
      explicacaoDocente:
        "Essa pergunta garante que a etapa feche com alinhamento antes de avançar para escopo de produto."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Podemos avançar para a Etapa 4. A mensagem está lapidada e pronta para uso nas próximas entrevistas e no desenho do MVP.",
      explicacaoDocente:
        "Com proposta e posicionamento claros, a etapa de MVP ganha muito mais precisão."
    }
  ],
  revisao: [
    "Persona João validada com dor operacional concreta e recorrente.",
    "Hierarquia da proposta definida: confiança e curadoria, depois rapidez, depois organização.",
    "Frase de valor refinada para comunicação comercial do piloto.",
    "Pacote fundador aprovado: 0% em 5 jobs, selo e prioridade.",
    "Tagline escolhida: Técnicos confiáveis para manter seu restaurante funcionando.",
    "Posicionamento consolidado por nicho food service + curadoria com histórico."
  ],
  saibaMais: {
    titulo: "Como usar esta etapa em aula",
    texto:
      "Peça para cada equipe criar duas versões do pitch com a mesma proposta de valor: uma para restaurante e outra para prestador. Depois compare clareza, objeções e taxa de interesse."
  },
  entrega:
    "Proposta de valor, tagline, posicionamento competitivo e pitch curto consolidados para uso em entrevistas, validação de preço e início da Etapa 4 (MVP e jornada)."
});

etapasJornada.push({
  codigo: "Etapa 4",
  titulo: "Produto/MVP e jornada do usuário",
  introducao:
    "Com mensagem e posicionamento definidos, Camila conduz Leandro para o desenho do produto mínimo viável. O foco é validar operação real em 30 a 60 dias, com escopo enxuto, fluxo assistido e métricas simples de funil para aprender rápido sem sobrecarga técnica.",
  checklist: [
    "Definir stack tecnológica compatível com tempo e orçamento",
    "Escolher formato de lançamento: MVP web ou app mobile",
    "Determinar modelo de matching no início da operação",
    "Fixar integrações mínimas de comunicação e acompanhamento",
    "Aprovar direção de design para velocidade com boa percepção",
    "Fechar prazo, cadência de build e responsável de execução"
  ],
  falas: [
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Entramos na Etapa 4. Agora vamos transformar o plano em produto validável, com escopo de MVP e jornada completa do usuário.",
      explicacaoDocente:
        "Nesta fase, o objetivo não é sofisticação técnica. É aprender rápido com operação real."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Escopo funcional proposto para v1: cadastro de restaurante e prestador, abertura de chamado com categoria/descrição/foto/urgência, matching assistido, acompanhamento de status, avaliação de 1 a 10 e histórico simples de chamados.",
      explicacaoDocente:
        "Escopo bom porque cobre ponta a ponta da jornada crítica sem inflar o produto."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Fora de escopo no v1: pagamento online, chat nativo, app mobile, automação total de matching e relatórios avançados. Isso entra depois da validação inicial.",
      explicacaoDocente:
        "Dizer não para funcionalidades cedo protege prazo, custo e foco de aprendizagem."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Backlog sugerido: semana 1 landing + cadastro; semanas 2 e 3 formulário de chamado + painel admin; semana 4 notificações WhatsApp e e-mail; semana 5 histórico e avaliação.",
      explicacaoDocente:
        "Backlog em blocos semanais cria ritmo de entrega e facilita acompanhamento."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Na jornada e funil, a referência inicial fica assim: topo com descoberta via visita e WhatsApp; meio com primeiro chamado; fundo com avaliação acima de 8 e repetição em 30 dias. Métricas iniciais: 50 cadastros, 20 chamados e 30% de retenção.",
      explicacaoDocente:
        "Funil com poucos indicadores é suficiente para aprender sem gestão excessiva."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 1: qual stack você prefere para o MVP? NoCode puro, WordPress com plugins, ou custom em PHP/JS?",
      explicacaoDocente:
        "A decisão de stack precisa respeitar contexto de tempo, custo e capacidade de execução."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Vou de WordPress com plugins. É o melhor equilíbrio para lançar rápido, gastar menos e validar sem desenvolvimento pesado. A ideia é usar WordPress base, formulário de chamados, área restrita, gestão simples de usuários e integração com WhatsApp e e-mail.",
      explicacaoDocente:
        "Escolha pragmática para fase inicial com equipe enxuta e validação operacional."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 2: você quer iniciar com web ou app mobile?",
      explicacaoDocente:
        "No início, web costuma reduzir custo de entrada e tempo de iteração."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "MVP web. Vamos começar com landing page e painel básico para restaurante, prestador e admin. App mobile fica para depois, se o piloto validar aderência.",
      explicacaoDocente:
        "Boa decisão para validar mercado antes de investir em Android e iOS."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 3: no fluxo, matching manual total ou semi-manual assistido?",
      explicacaoDocente:
        "Matching é ponto crítico do serviço. Automação precoce pode mascarar problemas de operação."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Semi-manual assistido. O restaurante abre chamado, o admin analisa, direciona para prestadores adequados, recebe aceite ou recusa e atualiza status. Assim testamos tempo de resposta, qualidade e aderência da demanda sem complexidade desnecessária.",
      explicacaoDocente:
        "Fluxo correto para MVP de serviço com alta variabilidade de atendimento."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 4: integrações mínimas. Vamos só de WhatsApp e e-mail ou incluir algo a mais agora?",
      explicacaoDocente:
        "Integrar demais cedo aumenta risco técnico e dispersa foco de validação."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "No MVP: WhatsApp e e-mail. Se precisar, adicionamos agenda simples no admin depois. Nada de ERP, fiscal ou pagamento online nesta fase.",
      explicacaoDocente:
        "Boa priorização: comunicação operacional primeiro, integrações complexas depois."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 5: design. Você quer algo 100% funcional sem cuidado visual, ou template pronto com adaptação profissional?",
      explicacaoDocente:
        "Percepção de confiança também influencia conversão, especialmente em B2B."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Template pronto com adaptação visual profissional. Quero linguagem limpa, responsiva, B2B e com poucos cliques para abrir chamado. Não precisamos começar com Figma complexo agora.",
      explicacaoDocente:
        "Escolha equilibrada entre velocidade de build e credibilidade comercial."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 6: prazo realista para MVP pronto: 30, 45 ou 60 dias? E quem executa?",
      explicacaoDocente:
        "Prazo precisa casar com escopo, disponibilidade semanal e capacidade técnica."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "45 dias é o mais realista. Semana 1 escopo e plugins; semana 2 estrutura e landing; semana 3 áreas de usuário e admin; semana 4 testes e ajustes; semanas 5 e 6 piloto controlado. Eu coordeno e opero, com apoio de freelancer ou parceiro técnico na implementação.",
      explicacaoDocente:
        "Cronograma consistente com a disponibilidade de 10 a 15 horas semanais."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Fechando a decisão adicional: para esse cenário, seguimos em linha híbrida de no-code com WordPress e plugins agora, deixando código custom para etapa de escala.",
      explicacaoDocente:
        "Estratégia certa: validar primeiro, refatorar arquitetura depois com evidência de uso."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Excelente, Leandro. WordPress web semi-manual em 45 dias é o caminho mais sólido para validar sem overengineering e com controle de risco.",
      explicacaoDocente:
        "Encerramento com tese técnica e operacional alinhadas ao estágio do negócio."
    }
  ],
  revisao: [
    "MVP definido com fluxo completo de cadastro, chamado, matching, status, avaliação e histórico.",
    "Escopo v1 protegido com exclusão de pagamentos, app nativo e automações avançadas.",
    "Stack escolhida: WordPress com plugins e operação assistida.",
    "Canal de comunicação mínimo aprovado: WhatsApp + e-mail.",
    "Direção de design: template pronto com adaptação profissional responsiva.",
    "Prazo consolidado: 45 dias com execução coordenada pelo empreendedor e apoio técnico pontual."
  ],
  saibaMais: {
    titulo: "Regra prática para MVP de serviço",
    texto:
      "Se o negócio depende de operação humana, automatize depois de estabilizar o processo manual. Primeiro prove demanda, qualidade e repetição; depois escale tecnologia."
  },
  entrega:
    "Escopo do MVP, jornada do usuário, funil inicial e plano de build em 45 dias consolidados para execução do piloto controlado."
});

etapasJornada.push({
  codigo: "Etapa 5",
  titulo: "Modelo de negócio e precificação",
  introducao:
    "Com o MVP definido, Camila leva Leandro para a sustentabilidade financeira do projeto. A conversa entra em unit economics, escolha de pagador, estrutura de planos e limite de investimento no piloto. O objetivo é validar mercado sem comprometer caixa antes da hora.",
  checklist: [
    "Validar fórmula de receita e hipóteses de ticket/comissão",
    "Escolher estrutura de monetização do MVP",
    "Mapear custos fixos iniciais em faixa realista",
    "Definir hipótese de LTV simples para 6 meses",
    "Ajustar o canvas para entrada freemium do restaurante",
    "Definir teto de investimento tolerável para o MVP"
  ],
  falas: [
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Entramos na Etapa 5. Agora vamos modelar o negócio: receita, custos, planos de preço e viabilidade do piloto.",
      explicacaoDocente:
        "Sem modelo econômico claro, o MVP até roda, mas não sustenta evolução."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Base de cálculo: receita = chamados x ticket médio x comissão %. Cenário conservador para 90 dias: 20 chamados x R$ 500 x 12% = R$ 1.200 de receita bruta.",
      explicacaoDocente:
        "Essa fórmula simples dá visão rápida de tração mínima necessária."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Também deixo uma estrutura inicial de planos: Básico no piloto com 10% + taxa fixa de R$ 20 por chamado; Padrão com 12% a 15%; Premium futuro por R$ 99/mês com prioridade.",
      explicacaoDocente:
        "Definir planos cedo ajuda a testar percepção de valor e elasticidade de preço."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 1: o ticket médio de R$ 500 está coerente? Comissão mínima de 10% cobre custos no início?",
      explicacaoDocente:
        "A pergunta combina viabilidade comercial e sustentabilidade operacional."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "R$ 500 como ticket médio inicial faz sentido. Com 10% geramos R$ 50 por chamado; com 12%, R$ 60; com 15%, R$ 75. Para o MVP, 10% funciona como entrada, mas sozinho tende a apertar se o volume for baixo.",
      explicacaoDocente:
        "Resposta madura: mantém entrada comercial acessível, mas reconhece limite de margem no começo."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 2: no MVP você prefere apenas comissão ou quer incluir taxa fixa e setup? E quem paga primeiro?",
      explicacaoDocente:
        "Escolher pagador no início é decisão crítica de adesão."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "No MVP, prefiro cobrança principal por comissão paga pelo prestador. Restaurante entra sem mensalidade e sem taxa de adesão. Prestador fundador ganha 0% nos primeiros 5 atendimentos e depois entra na comissão padrão.",
      explicacaoDocente:
        "Boa estratégia para reduzir fricção do lado da demanda e ativar oferta fundadora."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 3: quais custos fixos mensais você quer considerar para projetar com realismo?",
      explicacaoDocente:
        "Mesmo operação enxuta precisa de faixa de custo clara para evitar surpresa de caixa."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Trabalho com estrutura enxuta: hosting, domínio e e-mail entre R$ 100 e R$ 250; plugins entre R$ 100 e R$ 300; ferramentas operacionais até R$ 150; marketing e comercial entre R$ 300 e R$ 800; reserva técnica de R$ 200 a R$ 500. Faixa total recomendada: R$ 700 a R$ 2.000 por mês, com base prática em R$ 1.200.",
      explicacaoDocente:
        "Ele organiza custo por blocos e define referência base, o que facilita projeção e controle."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 4: qual LTV simples você projeta por restaurante em 6 meses?",
      explicacaoDocente:
        "LTV inicial não precisa ser sofisticado, mas precisa orientar decisão de aquisição."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Hipótese base de 4 a 6 chamados em 6 meses, com referência de 5 chamados por restaurante. Com ticket de R$ 500 e comissão de 10%, dá R$ 250 por restaurante em 6 meses. Se a comissão média subir para 12%, vai para R$ 300.",
      explicacaoDocente:
        "Estimativa clara e diretamente conectada ao modelo de receita por chamado."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 5: no canvas, você quer ajustar para freemium de entrada no lado do restaurante?",
      explicacaoDocente:
        "Ajuste de canvas precisa refletir comportamento real de adoção no piloto."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Sim. Modelo freemium implícito para restaurante: cadastro e abertura de chamado gratuitos no MVP. Monetização inicial no prestador por comissão de serviço fechado. Depois podemos evoluir para plano mensal com histórico avançado, recorrência e prioridade.",
      explicacaoDocente:
        "Modelo coerente com validação de mercado: baixa barreira de entrada e monetização por resultado."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 6: seguimos para Etapa 6 de go-to-market ou você quer gerar template WordPress agora?",
      explicacaoDocente:
        "Sequenciamento correto evita construir material técnico antes da estratégia de entrada."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Vamos para Etapa 6 primeiro. Quero fechar aquisição, funil e abordagem comercial antes de detalhar template.",
      explicacaoDocente:
        "Decisão certa: primeiro estratégia comercial, depois refinamento de implementação."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Última checagem financeira: custo máximo tolerável para o MVP, entre R$ 1 mil e R$ 3 mil?",
      explicacaoDocente:
        "Definir teto de investimento protege o projeto contra gasto antecipado sem validação."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Teto recomendado de R$ 3.000, com faixa ideal entre R$ 2.000 e R$ 3.000. Até R$ 1.000 ficaria limitado demais e dependente de execução quase total por conta própria.",
      explicacaoDocente:
        "Faixa escolhida equilibra profissionalismo mínimo do MVP e controle de risco financeiro."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Fechamos a Etapa 5 com modelo econômico simples e acionável: ticket de R$ 500, comissão de entrada em 10%, base freemium para restaurante, custo mensal enxuto e teto de investimento bem definido.",
      explicacaoDocente:
        "Encerramento sólido: já existe base para projetar e decidir com critério na próxima etapa."
    }
  ],
  revisao: [
    "Unit economics validado com fórmula simples e cenário conservador de 90 dias.",
    "Monetização do MVP definida com foco em comissão paga pelo prestador.",
    "Faixa de custos mensais mapeada com referência base de R$ 1.200.",
    "LTV simples estimado entre R$ 250 e R$ 300 por restaurante em 6 meses.",
    "Canvas ajustado para entrada freemium no lado do restaurante.",
    "Teto de investimento definido entre R$ 2.000 e R$ 3.000, com máximo tolerável de R$ 3.000."
  ],
  saibaMais: {
    titulo: "Regra financeira para fase de validação",
    texto:
      "No MVP, simplicidade vence precisão excessiva. Use poucas métricas que orientem decisão: ticket, comissão, custo mensal, LTV inicial e limite de caixa para testar sem comprometer o projeto."
  },
  entrega:
    "Modelo de negócio do MVP consolidado com unit economics, estrutura de precificação, faixas de custo, hipótese de LTV e limite financeiro para execução segura do piloto."
});

etapasJornada.push({
  codigo: "Etapa 6",
  titulo: "Go-to-market (aquisição, funil e vendas)",
  introducao:
    "Com produto e modelo de receita definidos, Camila e Leandro desenham a entrada no mercado para os próximos 90 dias. O foco é execução direta, com canais de confiança, metas de ativação e rotina comercial simples para validar tração real com restaurantes e prestadores.",
  checklist: [
    "Priorizar canais de aquisição com maior confiança no contexto local",
    "Estruturar plano para captar 5 prestadores fundadores",
    "Ajustar funil para ativação real e não só volume de cadastro",
    "Definir cadência de conteúdo com baixa complexidade operacional",
    "Consolidar script de vendas para visita e WhatsApp",
    "Validar orçamento de testes e sequência de experimentação de canais"
  ],
  falas: [
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Entramos na Etapa 6: go-to-market. Meta de 90 dias: 10 restaurantes, 5 prestadores e 20 chamados com operação controlada.",
      explicacaoDocente:
        "Go-to-market em estágio inicial precisa de foco em execução e aprendizado de campo."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Base de canais proposta: visitas locais, WhatsApp em grupos de food service e indicações com contadores e consultores. A lógica inicial era testar 20 visitas por semana, 3 posts por semana e 5 parcerias.",
      explicacaoDocente:
        "Combinar canal presencial, digital leve e rede de confiança reduz dependência de mídia paga."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "No funil bruto, a referência inicial seria topo com 50 cadastros, meio com 20 chamados e fundo com 30% de repetição.",
      explicacaoDocente:
        "Esse funil serve como norte, mas pode ser ajustado para refletir qualidade de ativação."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 1: você aprova visitas, WhatsApp e indicações como canais prioritários, ou quer priorizar outro como Instagram local?",
      explicacaoDocente:
        "Escolher poucos canais no início aumenta consistência de execução."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Aprovo totalmente visitas, WhatsApp e indicações. Ordem ideal: 1) visitas presenciais curtas, 2) WhatsApp, 3) indicações. Instagram local entra como apoio de marca, não como canal principal do MVP.",
      explicacaoDocente:
        "Boa decisão para mercado de serviço técnico, em que confiança pesa mais que alcance inicial."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 2: como você vai mapear os 5 prestadores fundadores?",
      explicacaoDocente:
        "Oferta fundadora precisa de processo, não improviso."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Vou usar múltiplas fontes: Google Maps e busca local, indicações de donos de restaurante e fornecedores, OLX, grupos locais e perfis ativos em Instagram/Facebook. Meta prática: mapear 15 nomes, contatar 8 e fechar 5 fundadores com critérios de resposta rápida, especialidade comercial e confiabilidade.",
      explicacaoDocente:
        "Estratégia correta: funil de recrutamento de prestadores com critérios objetivos de seleção."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 3: a meta de topo com 50 cadastros está boa, ou você prefere ajustar?",
      explicacaoDocente:
        "No começo, ativação costuma ser métrica mais útil do que cadastro bruto."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Vou ajustar para algo mais qualificado: 30 contatos abordados, 15 conversas qualificadas, 10 interessados, 5 a 8 cadastrados e 3 a 5 restaurantes ativos, buscando 10 a 20 chamados no piloto. Cadastro vazio não valida o negócio.",
      explicacaoDocente:
        "Ajuste excelente: sai de métrica de vaidade e vai para comportamento real de uso."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 4: conteúdo em LinkedIn e grupos de WhatsApp, ou foco quase total no offline? Qual frequência semanal?",
      explicacaoDocente:
        "Produção de conteúdo sem capacidade operacional vira distração no MVP."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Foco principal em offline e WhatsApp, com presença digital simples de apoio. LinkedIn fica secundário. Cadência ideal: 2 a 3 ações por semana com posts curtos sobre manutenção preventiva, perdas por falha de refrigeração, convites para piloto e destaque de prestadores fundadores.",
      explicacaoDocente:
        "Boa leitura de esforço: constância leve vence operação de conteúdo pesada no início."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 5: para vendas, você quer seguir com script pronto de visita e WhatsApp ou prefere produzir vídeo agora?",
      explicacaoDocente:
        "Material comercial deve priorizar uso imediato em campo."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Vamos com script pronto. Para visita: Olá, estou estruturando uma solução para restaurantes encontrarem técnicos confiáveis com rapidez e menos improviso. Estamos abrindo piloto local em Guarulhos. Posso explicar em 2 minutos? Para WhatsApp: Estou montando solução para ajudar restaurantes a encontrar suporte técnico com mais organização. Posso te mostrar rapidamente?",
      explicacaoDocente:
        "Script direto reduz improviso comercial e melhora repetibilidade da abordagem."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 6: orçamento de R$ 200 a R$ 500 para ads locais está aprovado como teste?",
      explicacaoDocente:
        "Mídia paga em piloto deve funcionar como apoio, não como canal dominante."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Sim, aprovado como teste complementar. Vamos usar para reforço de presença local e validação de mensagem em Instagram e Facebook com segmentação geográfica em Guarulhos.",
      explicacaoDocente:
        "Uso correto de verba pequena: aprender mensagem e captar apoio ao canal principal."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Última decisão operacional: qual canal você testa primeiro, visitas ou digital?",
      explicacaoDocente:
        "Primeiro teste define ritmo de aprendizagem da equipe."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Primeiro visitas presenciais. A sequência será: fase 1 visitas + WhatsApp, fase 2 indicações, fase 3 digital leve com ads locais e fase 4 presença social básica. Isso acelera confiança e traz objeções reais para ajustar o pitch.",
      explicacaoDocente:
        "Decisão muito forte para validação local B2B de serviço crítico."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Para conteúdo, deixo o plano de 4 semanas como base de execução: semana 1 falha de freezer e resposta em menos de 2 horas; semana 2 caso de perda evitada; semana 3 erros comuns de manutenção de coifa; semana 4 valor da curadoria técnica.",
      explicacaoDocente:
        "Calendário enxuto com dor real aumenta relevância e favorece conversão."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Também ficam 10 ideias rápidas para posts: perda de vendas por técnico demorado; manutenção de refrigeração; proposta da Pronto Cozinha em Guarulhos; entrada de fundadores sem comissão inicial; checklist de prevenção; alerta de urgência; confiança por histórico; chamado rápido em piloto; comparação com improviso e convite para parceiros locais.",
      explicacaoDocente:
        "Banco de ideias pronto reduz bloqueio criativo e mantém rotina de comunicação."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Template de post para uso imediato: Freezer parou na sexta e a operação travou? Com Pronto Cozinha você abre chamado e conecta com técnico curado em Guarulhos. Piloto com vagas limitadas para restaurantes parceiros. Fale comigo no WhatsApp.",
      explicacaoDocente:
        "Template curto, com dor, solução, recorte local e chamada de ação clara."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Fechamos a Etapa 6 com estratégia de aquisição orientada a confiança: visitas, WhatsApp, indicações, funil por ativação real e mídia paga apenas como suporte.",
      explicacaoDocente:
        "Encerramento alinhado ao contexto do piloto e à capacidade atual de execução."
    }
  ],
  revisao: [
    "Canais prioritários definidos: visitas presenciais, WhatsApp e indicações; Instagram como apoio.",
    "Plano de captação de prestadores fundadores estruturado com múltiplas fontes e critérios.",
    "Funil ajustado para qualidade: menos cadastro vazio e mais ativação real.",
    "Conteúdo com baixa complexidade operacional: 2 a 3 ações semanais.",
    "Script comercial de visita e WhatsApp consolidado para uso imediato.",
    "Orçamento de ads entre R$ 200 e R$ 500 validado como teste complementar.",
    "Ordem de teste de canais definida: presencial primeiro, digital depois."
  ],
  saibaMais: {
    titulo: "Regra prática de tração no piloto",
    texto:
      "Para negócio de serviço crítico, o canal mais forte no início é o que gera confiança rápida e coleta objeção real. Por isso, visitas e WhatsApp costumam performar melhor do que depender de mídia paga desde o primeiro ciclo."
  },
  entrega:
    "Plano de go-to-market de 90 dias consolidado com canais prioritários, funil de ativação, rotina de conteúdo, scripts de vendas e sequência de testes para aquisição de restaurantes e prestadores."
});

etapasJornada.push({
  codigo: "Etapa 7",
  titulo: "Operação, SLA e qualidade do serviço",
  introducao:
    "Com aquisição e vendas desenhadas, Camila leva Leandro para a engrenagem operacional do piloto. A etapa define quem executa o matching, quais prazos serão prometidos, como medir qualidade e quando começar a escalar equipe sem perder controle.",
  checklist: [
    "Definir responsável do matching na fase inicial",
    "Estabelecer SLA mínimo para resposta e atendimento",
    "Escolher canais de suporte operacionais",
    "Fixar métrica principal de qualidade com regra de alerta",
    "Criar gatilho de escala e regra de offboarding de prestadores",
    "Padronizar ferramentas de acompanhamento da operação",
    "Mapear risco operacional prioritário e plano de mitigação"
  ],
  falas: [
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Entramos na Etapa 7. Agora vamos fechar operação e qualidade para o piloto não depender de improviso no dia a dia.",
      explicacaoDocente:
        "Operação bem definida é o que transforma promessa comercial em experiência real."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 1: no começo, você vai gerenciar 100% do matching ou quer entrar com assistente virtual desde já?",
      explicacaoDocente:
        "No início, quem opera aprende padrões críticos de demanda, tempo e qualidade."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Vou gerenciar 100% do matching no início. Quero absorver aprendizado direto de urgência, perfil de demanda, performance dos prestadores e falhas do processo antes de delegar.",
      explicacaoDocente:
        "Escolha correta para fase inicial: aprendizado operacional vem antes de terceirização."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 2: vamos fechar um SLA realista para o MVP. Qual tempo máximo você assume para resposta e atendimento?",
      explicacaoDocente:
        "SLA sem capacidade real cria quebra de confiança e desgaste comercial."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "SLA sugerido: primeiro retorno ao restaurante em até 15 minutos, triagem e matching em até 30 minutos, aceite do prestador em até 30 minutos, chamados urgentes em até 4 horas quando houver disponibilidade e não urgentes em até 24 horas.",
      explicacaoDocente:
        "SLA forte e factível para piloto assistido com base enxuta de prestadores."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 3: suporte será só WhatsApp ou vamos abrir mais canais agora?",
      explicacaoDocente:
        "Multiplicar canal cedo demais aumenta ruído e reduz velocidade de execução."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "No MVP, WhatsApp como canal principal e e-mail como apoio formal. FAQ pode ficar para depois. Quero manter o fluxo simples para não dispersar operação.",
      explicacaoDocente:
        "Estratégia enxuta: rapidez no WhatsApp e registro institucional por e-mail."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 4: qual será sua métrica principal de qualidade? E você quer regra de alerta para nota baixa?",
      explicacaoDocente:
        "Qualidade precisa de número central e gatilho de ação, não só percepção subjetiva."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Métrica principal: avaliação média por atendimento, de 1 a 10. Meta mínima de 8,0. Qualquer nota abaixo de 8 gera revisão obrigatória. Como apoio, vou acompanhar tempo de resposta, taxa de aceite e repetição de uso.",
      explicacaoDocente:
        "Boa governança de qualidade: indicador principal claro e ações corretivas explícitas."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 5: quando você considera contratar VA? E como será o processo para prestador com desempenho ruim?",
      explicacaoDocente:
        "Escala precisa de gatilho objetivo e regra de disciplina da rede de oferta."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "VA só depois que a operação atingir cerca de 20 a 30 chamados por mês, com rotina repetitiva e processo documentado. Para prestador ruim, fluxo será: registrar ocorrência, alerta formal, nova chance monitorada quando cabível e descredenciamento em reincidência ou falha grave.",
      explicacaoDocente:
        "Excelente: gatilho de escala e offboarding estruturado protegem consistência do serviço."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 6: quais ferramentas operacionais você adota no dia a dia? Só WordPress e WhatsApp ou inclui tracking?",
      explicacaoDocente:
        "Sem tracking visual, a operação perde controle e vira sequência de mensagens soltas."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Vou operar com WordPress + WhatsApp + Trello. O Trello será o quadro de controle com colunas: novo chamado, triagem, encaminhado, aceito, em atendimento, concluído e revisão.",
      explicacaoDocente:
        "Composição muito adequada para MVP: simples, visual e fácil de manter."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Última pergunta de risco: qual é seu maior medo operacional no piloto?",
      explicacaoDocente:
        "Identificar o medo principal ajuda a priorizar mitigação desde o primeiro dia."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Maior medo: receber chamado urgente e não ter prestador disponível ou adequado no tempo esperado. Isso derruba confiança, percepção de valor e chance de recorrência.",
      explicacaoDocente:
        "Risco central bem identificado: capacidade de atendimento é o coração do modelo."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Plano de mitigação desse risco: manter base mínima por categoria, evitar dependência de um único parceiro, classificar disponibilidade por região e alinhar expectativa de prazo com transparência.",
      explicacaoDocente:
        "Mitigação correta: redundância de oferta e comunicação clara protegem a experiência."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Fechamos a Etapa 7 com uma operação enxuta, mas com critérios sólidos de SLA, qualidade, escala e governança de prestadores.",
      explicacaoDocente:
        "Encerramento forte: agora o piloto tem regras operacionais objetivas para funcionar."
    }
  ],
  revisao: [
    "Matching inicial definido sob gestão direta do empreendedor para acelerar aprendizado.",
    "SLA do MVP estabelecido com metas de resposta e atendimento factíveis.",
    "Suporte padronizado com WhatsApp principal e e-mail de apoio.",
    "Qualidade medida por avaliação média com alerta para notas abaixo de 8.",
    "Gatilho de contratação de VA definido entre 20 e 30 chamados mensais.",
    "Processo de offboarding de prestadores estruturado por etapas.",
    "Stack operacional definida: WordPress + WhatsApp + Trello."
  ],
  saibaMais: {
    titulo: "Ponto crítico da etapa operacional",
    texto:
      "No início, a métrica que mais protege a marca é confiabilidade de entrega. Melhor prometer um SLA realista e cumprir do que prometer velocidade máxima e falhar em chamado urgente."
  },
  entrega:
    "Checklist operacional com SLA, governança de qualidade, rotina de suporte, regras de escala e fluxo de controle de chamados pronto para execução do piloto."
});

etapasJornada.push({
  codigo: "Etapa 8",
  titulo: "Viabilidade financeira, cenários e tracking",
  introducao:
    "Com operação definida, Camila e Leandro entram no bloco financeiro do piloto. A etapa organiza custos reais, break-even, cenários de chamados, forma de financiamento e rotina de acompanhamento para manter decisões baseadas em dados, não em percepção.",
  checklist: [
    "Confirmar custo mensal base do MVP com despesas de campo",
    "Calcular break-even em chamados com comissão média",
    "Definir cenários conservador, base e agressivo para 90 dias",
    "Escolher estratégia de financiamento no estágio de validação",
    "Padronizar ferramenta de tracking financeiro e operacional",
    "Mapear principais riscos financeiros do ciclo inicial",
    "Escolher cenário de referência para pitch comercial"
  ],
  falas: [
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Entramos na Etapa 8. Agora vamos fechar projeções e controles para validar o piloto com segurança financeira.",
      explicacaoDocente:
        "Sem disciplina financeira, a validação perde clareza e o risco de caixa aumenta."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 1: mantemos custo fixo de R$ 1.200 por mês ou você quer ajustar com outras despesas, como deslocamento para visitas?",
      explicacaoDocente:
        "Custos invisíveis de operação de campo costumam distorcer projeções no MVP."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "R$ 1.200 continua uma boa referência, mas vou ajustar para um cenário mais realista com visitas locais. Incluindo deslocamento de cerca de R$ 200 por mês, prefiro trabalhar com faixa de R$ 1.200 a R$ 1.400 e usar R$ 1.400 como base de projeção.",
      explicacaoDocente:
        "Ajuste correto: inclui custo operacional real sem inflar estrutura cedo demais."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 2: break-even. Com comissão média de R$ 50 por chamado, a conta de 24 chamados para cobrir R$ 1.200 está ok?",
      explicacaoDocente:
        "Break-even traduz meta de volume mínima para sustentabilidade operacional."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Está correta. Com custo de R$ 1.200, break-even é 24 chamados por mês. Com custo ajustado para R$ 1.400, sobe para 28 chamados por mês.",
      explicacaoDocente:
        "Resposta objetiva e útil para alinhamento entre meta comercial e viabilidade."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 3: cenário base de 20 chamados por mês é realista para os primeiros 90 dias?",
      explicacaoDocente:
        "Essa definição orienta metas semanais e narrativa de expectativa para parceiros."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Sim, é realista. Vou trabalhar com três faixas: conservador de 8 a 12 chamados por mês, base de 15 a 20 e agressivo de 25 a 35. Para projeção oficial, uso 10, 20 e 35 como referências.",
      explicacaoDocente:
        "Cenários bem estruturados facilitam gestão de risco e tomada de decisão progressiva."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 4: financiamento. Você prefere bootstrap total ou captação inicial de R$ 5 mil?",
      explicacaoDocente:
        "No estágio de validação, fonte de capital define apetite de risco e velocidade."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Vou de bootstrap total, com reserva de até R$ 5.000. Distribuição sugerida: R$ 2.000 a R$ 3.000 para MVP, R$ 1.000 a R$ 1.500 para operação e marketing inicial, e R$ 500 a R$ 1.000 de contingência.",
      explicacaoDocente:
        "Estratégia coerente: mantém controle e evita capital excessivo antes da validação."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 5: tracking financeiro e operacional fica em Google Sheets ou ferramenta mais robusta agora?",
      explicacaoDocente:
        "Ferramenta deve acompanhar maturidade da operação, não o contrário."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "No início, Google Sheets é suficiente e ideal. Vou controlar prospectados, cadastrados, prestadores, chamados, ticket médio, comissão, avaliação, tempo de resposta e repetição. Ferramenta mais avançada só quando o volume crescer.",
      explicacaoDocente:
        "Boa escolha para MVP: simplicidade com visibilidade completa dos indicadores críticos."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 6: quais riscos financeiros merecem atenção imediata?",
      explicacaoDocente:
        "Risco financeiro claro permite priorizar mitigação sem dispersão."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Os riscos principais são baixo volume inicial de chamados, inflação de peças que pressiona preço final, sazonalidade do food service, dependência de poucos clientes ou prestadores e comissão baixa demais para sustentar crescimento. No curto prazo, o risco mais crítico continua sendo volume insuficiente.",
      explicacaoDocente:
        "Leitura sólida: volume e recorrência são as variáveis que mais afetam sobrevivência no piloto."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Pergunta 7: qual cenário você usa no pitch, conservador ou agressivo?",
      explicacaoDocente:
        "A narrativa financeira no pitch precisa equilibrar credibilidade e potencial."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Vou usar cenário base com viés conservador. Ele mostra tração mínima viável sem parecer inflado e passa mais confiança para parceiros.",
      explicacaoDocente:
        "Escolha correta para fase inicial: discurso crível aumenta confiança de execução."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Fechamos a Etapa 8 com base financeira pronta para planilha e acompanhamento: custos ajustados, break-even claro, cenários definidos, bootstrap com teto e tracking operacional simples.",
      explicacaoDocente:
        "Encerramento consistente: agora as metas comerciais estão ancoradas em viabilidade financeira."
    }
  ],
  revisao: [
    "Custo mensal ajustado para faixa de R$ 1.200 a R$ 1.400, com base em R$ 1.400.",
    "Break-even definido em 24 chamados (custo de R$ 1.200) ou 28 chamados (custo de R$ 1.400).",
    "Cenários de volume estruturados: conservador, base e agressivo.",
    "Financiamento definido como bootstrap com reserva de até R$ 5.000.",
    "Tracking aprovado em Google Sheets com indicadores de operação e receita.",
    "Risco financeiro principal priorizado: baixo volume de chamados.",
    "Pitch financeiro adotará cenário base com viés conservador."
  ],
  saibaMais: {
    titulo: "Regra de projeção para piloto",
    texto:
      "No estágio de validação, projeção serve para orientar decisão semanal, não para provar escala futura. Use cenário base crível, compare com conservador e ajuste rápido com dados reais."
  },
  entrega:
    "Projeção financeira do piloto consolidada com custos ajustados, break-even, cenários de volume, estratégia de financiamento e rotina de tracking para gestão contínua."
});

etapasJornada.push({
  codigo: "Etapa 9",
  titulo: "KPIs, riscos e plano 30/60/90",
  introducao:
    "Com a tese já validada em papel, chega a hora da disciplina de execução. Camila conduz Leandro para números semanais, matriz de risco e marcos operacionais. A etapa transforma visão estratégica em cadência de trabalho mensurável.",
  checklist: [
    "Ajustar KPIs semanais e mensais para operação inicial",
    "Priorizar riscos por ordem de impacto no piloto",
    "Detalhar plano 30/60/90 com marcos objetivos",
    "Definir momento de consolidação dos entregáveis finais",
    "Refinar texto da proposta de valor e próximos passos do painel"
  ],
  falas: [
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Leandro, vou validar sua cadência semanal. A base de cinco visitas e dois cadastros por semana funciona para o começo ou você ajustaria algo?",
      explicacaoDocente:
        "KPI inicial deve ser simples, mas completo o suficiente para indicar tração comercial e capacidade de entrega."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "A base funciona, mas prefiro ampliar para cinco a oito visitas qualificadas, dois restaurantes cadastrados, uma a duas conversas com prestadores e monitoramento de conversão e tempo de resposta. No mês, meta de vinte visitas, oito cadastros e quatro a cinco prestadores ativos.",
      explicacaoDocente:
        "Ele adiciona métricas de oferta e eficiência, evitando gestão cega apenas por volume de contatos."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Entre volume e qualidade, qual risco precisa ser mitigado antes?",
      explicacaoDocente:
        "Priorização de risco evita esforço no problema errado."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Primeiro, prestadores confiáveis e disponíveis. Depois vem volume de chamados e, em seguida, qualidade. Também me preocupo com dependência de poucos parceiros, atrasos de atendimento e comissão baixa para sustentar crescimento.",
      explicacaoDocente:
        "Boa leitura de risco estrutural: sem oferta confiável, não existe experiência positiva para gerar recorrência."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Plano 30/60/90: você prefere visão geral ou tarefas com marco por data?",
      explicacaoDocente:
        "Planos genéricos parecem confortáveis, mas não sustentam execução."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Quero marcos específicos. Dia 7 com listas prontas, dia 10 com entrevistas, dia 20 com três prestadores fundadores, dia 45 com primeiro chamado real e dia 90 com dez restaurantes piloto, vinte chamados e avaliação média mínima de oito.",
      explicacaoDocente:
        "Metas com data e critério objetivo melhoram acompanhamento e responsabilização."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Com essa base, consolidamos os entregáveis agora ou deixamos para uma rodada final separada?",
      explicacaoDocente:
        "A pergunta decide ritmo de entrega e alinhamento da equipe."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Vamos consolidar agora. Já temos informação suficiente para estruturar os 14 entregáveis com consistência.",
      explicacaoDocente:
        "Decisão pragmática. Evita atrasar material com mais reunião do que execução."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Perfeito. E no painel, você faria algum ajuste final antes de fechar?",
      explicacaoDocente:
        "Revisão de linguagem final é importante para coerência comercial."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Faria dois ajustes. Na proposta de valor: conectar restaurantes a técnicos confiáveis com rapidez, curadoria e acompanhamento organizado. E nos próximos passos: executar piloto com prestadores fundadores, captar restaurantes parceiros e validar chamados reais com foco em qualidade, recorrência e viabilidade.",
      explicacaoDocente:
        "Ajustes reforçam clareza operacional e posicionamento estratégico."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Excelente. Etapa validada com governança de execução. Vamos para a consolidação final do plano completo da Pronto Cozinha.",
      explicacaoDocente:
        "Encerramento conecta planejamento e ação. É o ponto em que a consultoria vira roteiro operacional."
    }
  ],
  revisao: [
    "KPIs foram ajustados para incluir lado da demanda e lado da oferta.",
    "Risco prioritário definido: falta de prestadores confiáveis e responsivos.",
    "Plano 30/60/90 detalhado com marcos por data e metas concretas.",
    "Decisão tomada: gerar entregáveis finais imediatamente.",
    "Painel final refinado com proposta de valor e próximos passos mais precisos."
  ],
  saibaMais: {
    titulo: "Por que KPI sem risco priorizado falha?",
    texto:
      "Porque número sem contexto vira vaidade. Se o risco principal é oferta, não adianta comemorar cadastros de restaurantes sem garantir capacidade de atendimento."
  },
  entrega:
    "Plano tático validado com metas semanais e mensais, matriz de risco priorizada e cronograma 30/60/90 pronto para acompanhamento em equipe."
});

etapasJornada.push({
  codigo: "Etapa 10",
  titulo: "Consolidação dos 14 entregáveis finais",
  introducao:
    "A etapa final transforma todo o diálogo em um material ensinável e executável. Camila apresenta o plano completo por blocos, Leandro valida aderência ao cenário real e o docente evidencia como cada entrega conversa com a próxima.",
  checklist: [
    "Organizar os 14 entregáveis em sequência lógica de execução",
    "Conectar estratégia, operação, aquisição e monetização",
    "Amarrar métricas de validação com metas de 90 dias",
    "Fechar roteiro de comunicação comercial do projeto",
    "Gerar material utilizável em atividade de equipe"
  ],
  falas: [
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Leandro, agora consolidamos tudo. Vou organizar as 14 entregas para que sua turma consiga entender, discutir e executar em equipes sem perder coerência entre diagnóstico e ação.",
      explicacaoDocente:
        "A etapa final precisa ser didática e operacional. Não basta informar, precisa orientar execução."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Perfeito. Quero que a turma veja como uma conversa estruturada vira plano real de negócio digital, com decisões justificadas.",
      explicacaoDocente:
        "Objetivo pedagógico claro: formar raciocínio, não só replicar respostas."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "No resumo executivo, deixamos a essência: plataforma B2B para food service em Guarulhos, MVP em 45 dias, piloto de 90 dias com meta de 10 restaurantes, 5 prestadores e 20 chamados.",
      explicacaoDocente:
        "Resumo executivo precisa conter tese, escopo e meta em poucas linhas."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Esse recorte ajuda muito. Fica fácil explicar para parceiros, alunos e possíveis apoiadores do piloto.",
      explicacaoDocente:
        "Comunicação simples aumenta adesão de stakeholders."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Depois entram Canvas, Persona e JTBD: segmento principal, proposta, canais, recursos, custos, personagem João da Hamburgueria e a tarefa crítica de resolver falhas sem improviso.",
      explicacaoDocente:
        "Canvas mostra modelo. Persona e JTBD conectam modelo à dor concreta."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Com isso, a equipe entende para quem o produto existe e que trabalho ele realmente precisa cumprir.",
      explicacaoDocente:
        "Boa síntese da relação entre mercado e entrega de valor."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Na proposta de valor e posicionamento, reforçamos foco local e curadoria. No MVP, priorizamos cadastro, abertura de chamado, matching semi-manual, status, avaliação e histórico. Pagamento e app nativo ficam fora do primeiro ciclo.",
      explicacaoDocente:
        "Escopo enxuto é estratégia, não limitação. Mantém aprendizado rápido."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Faz sentido deixar o financeiro para depois. No começo, precisamos provar utilidade e velocidade de atendimento.",
      explicacaoDocente:
        "Decisão reduz risco técnico e jurídico no início da operação."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Jornada, funil e aquisição ficam conectados: visitas locais, WhatsApp e indicações como canais principais, sempre medindo conversão e repetição de chamados.",
      explicacaoDocente:
        "Canais escolhidos combinam com público local e orçamento controlado."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Esse desenho cabe no nosso cenário. Não dependemos de mídia cara para começar a gerar atendimentos.",
      explicacaoDocente:
        "Estratégia de tração orgânica e ativa é adequada a fase de validação."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "Também deixamos plano de conteúdo, política de preço e projeção de 12 meses. A lógica de entrada é comissão de 10% a 12% no prestador, com incentivo para prestadores fundadores.",
      explicacaoDocente:
        "Preço inicial precisa equilibrar adesão e sustentabilidade."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Com essa estrutura, consigo testar aceitação sem travar caixa e já observar viabilidade do modelo.",
      explicacaoDocente:
        "Validação financeira começa cedo, mesmo sem escala."
    },
    {
      personagem: "consultora",
      nome: "Camila",
      emoji: "💼",
      texto:
        "No fechamento, entram KPIs, matriz de risco, plano 30/60/90 e pitch de dois minutos. Assim a equipe tem um roteiro completo para executar, avaliar e ajustar sem perder o foco.",
      explicacaoDocente:
        "Esses blocos transformam estratégia em rotina de gestão e comunicação."
    },
    {
      personagem: "empreendedor",
      nome: "Leandro",
      emoji: "🍔",
      texto:
        "Perfeito. Agora o plano está pronto para ensino e aplicação prática.",
      explicacaoDocente:
        "Consolidação concluída com coerência entre aprendizado e implementação."
    }
  ],
  revisao: [
    "As 14 entregas foram organizadas em sequência didática e operacional.",
    "Escopo de MVP, aquisição, precificação e métricas ficaram integrados.",
    "Plano final contempla execução em 90 dias com critérios objetivos.",
    "Material ficou apto para uso em aula, debate e trabalho em equipe."
  ],
  saibaMais: {
    titulo: "Como usar este material em turma",
    texto:
      "Divida a sala em squads. Cada equipe assume uma etapa, revisa decisões, propõe melhorias e depois reconstrói um plano completo para outro nicho B2B com o mesmo método."
  },
  entrega:
    "Pacote final com 14 entregáveis prontos para ensino, discussão técnica e aplicação no desenvolvimento de planos de negócios digitais."
});

glossarioSiglas.push(
  {
    termo: "MVP",
    descricao: "Produto mínimo viável. Versão enxuta para validar hipótese de valor com menor custo e tempo."
  },
  {
    termo: "B2B",
    descricao: "Modelo de negócio entre empresas. Neste caso, a plataforma atende restaurantes como clientes."
  },
  {
    termo: "JTBD",
    descricao: "Job To Be Done. Tarefa principal que o cliente precisa resolver, além da funcionalidade aparente."
  },
  {
    termo: "SLA",
    descricao: "Service Level Agreement. Compromisso de prazo e padrão de atendimento entre as partes."
  },
  {
    termo: "NPS",
    descricao: "Net Promoter Score. Indicador de satisfação e recomendação do cliente."
  },
  {
    termo: "CAC",
    descricao: "Custo de Aquisição de Cliente. Quanto é gasto para conquistar cada novo cliente pagante."
  },
  {
    termo: "Churn",
    descricao: "Taxa de perda de clientes em um período. Mostra retenção e recorrência do modelo."
  },
  {
    termo: "Freemium",
    descricao: "Modelo com acesso gratuito inicial e monetização em funcionalidades avançadas ou volume."
  },
  {
    termo: "SaaS",
    descricao: "Software como serviço. Receita recorrente por assinatura de uso da plataforma."
  },
  {
    termo: "Cold Start",
    descricao: "Desafio inicial de marketplaces para equilibrar oferta e demanda ao mesmo tempo."
  },
  {
    termo: "Matching Assistido",
    descricao: "Encaminhamento de chamados com apoio humano para selecionar prestador adequado e disponível."
  },
  {
    termo: "No-Code",
    descricao: "Construção de produto com ferramentas visuais e mínima programação para acelerar validação."
  },
  {
    termo: "Overengineering",
    descricao: "Excesso de complexidade técnica antes da validação real do mercado e da operação."
  },
  {
    termo: "Funil de Conversão",
    descricao: "Etapas da jornada comercial, do primeiro contato até ativação e recorrência do cliente."
  },
  {
    termo: "Taxa de Conversão",
    descricao: "Percentual de pessoas que avançam de uma etapa do funil para a próxima."
  },
  {
    termo: "Retenção",
    descricao: "Capacidade de manter clientes ativos e gerando novos chamados ao longo do tempo."
  },
  {
    termo: "Unit Economics",
    descricao: "Análise econômica por unidade de transação, cliente ou chamado para medir viabilidade."
  },
  {
    termo: "Ticket Médio",
    descricao: "Valor médio de cada serviço realizado. Base para calcular receita e comissão."
  },
  {
    termo: "Comissão por Chamado",
    descricao: "Percentual cobrado sobre o valor do serviço concluído, principal receita do MVP."
  },
  {
    termo: "LTV",
    descricao: "Lifetime Value. Receita estimada que um cliente gera ao longo de um período definido."
  },
  {
    termo: "Break-even",
    descricao: "Ponto de equilíbrio no qual a receita cobre os custos totais da operação."
  },
  {
    termo: "Backlog",
    descricao: "Lista priorizada de funcionalidades e tarefas planejadas para as próximas entregas."
  },
  {
    termo: "Escopo do MVP",
    descricao: "Conjunto mínimo de funcionalidades para validar hipótese sem inflar custo e prazo."
  },
  {
    termo: "Piloto Controlado",
    descricao: "Fase de testes com grupo limitado de clientes e prestadores para validar operação."
  },
  {
    termo: "Business Model Canvas",
    descricao: "Quadro de modelagem de negócio com blocos de proposta de valor, receita, custos e parceiros."
  },
  {
    termo: "Go-to-Market",
    descricao: "Plano de entrada no mercado com canais, mensagem, funil e metas de aquisição."
  },
  {
    termo: "VA (Assistente Virtual)",
    descricao: "Profissional de apoio remoto para tarefas operacionais repetitivas, acionado após ganho de volume."
  },
  {
    termo: "Offboarding de Prestador",
    descricao: "Processo de descredenciamento de parceiro com baixa performance ou falha grave de conduta."
  },
  {
    termo: "Bootstrap",
    descricao: "Crescimento financiado com recursos próprios, sem investimento externo inicial."
  },
  {
    termo: "Tracking Operacional",
    descricao: "Acompanhamento contínuo de chamados, tempos, qualidade e conversões em planilha ou ferramenta simples."
  },
  {
    termo: "Ativação",
    descricao: "Momento em que o cadastro vira uso real, como a abertura do primeiro chamado."
  },
  {
    termo: "Repeat Rate",
    descricao: "Percentual de clientes que voltam a usar o serviço em um período definido."
  },
  {
    termo: "Cenário Conservador",
    descricao: "Projeção com menor volume e maior cautela para testar viabilidade mínima do modelo."
  },
  {
    termo: "Cenário Base",
    descricao: "Projeção principal de referência para gestão e pitch, equilibrando realismo e potencial."
  },
  {
    termo: "Cenário Agressivo",
    descricao: "Projeção com crescimento acelerado, usada para mapear teto de capacidade e oportunidade."
  },
  {
    termo: "Contingência Financeira",
    descricao: "Reserva de caixa para cobrir ajustes técnicos, imprevistos operacionais e oscilações de demanda."
  }
);

entregaveisFinais.push(
  {
    titulo: "A) Resumo Executivo",
    conteudo:
      '<p><strong>Pronto Cozinha</strong> é uma plataforma B2B nichada em serviços técnicos críticos para restaurantes de pequeno porte em Guarulhos e entorno. O modelo combina curadoria local de prestadores, matching assistido e acompanhamento por histórico.</p><p>Plano inicial: MVP web em até 45 dias, piloto de 90 dias com meta de 10 restaurantes, 5 prestadores e 20 chamados, receita prevista de R$ 2 mil e referência de break-even em torno de 28 chamados/mês.</p>'
  },
  {
    titulo: "B) Business Model Canvas",
    conteudo:
      "<ul><li><strong>Segmentos:</strong> restaurantes independentes (demanda) e técnicos/autônomos/pequenas empresas (oferta).</li><li><strong>Proposta:</strong> matching curado para falhas críticas com acompanhamento organizado.</li><li><strong>Canais:</strong> visitas presenciais, WhatsApp e indicações.</li><li><strong>Relacionamento:</strong> operação assistida com histórico e avaliação.</li><li><strong>Receita:</strong> comissão de 10% a 12% por chamado e evolução para planos SaaS.</li><li><strong>Recursos e custos:</strong> MVP WordPress, curadoria manual, Trello e custo fixo aproximado de R$ 1,4 mil/mês.</li></ul>"
  },
  {
    titulo: "C) Persona e JTBD",
    conteudo:
      '<p><strong>Persona central:</strong> João da Hamburgueria, 35 anos, dono operador de uma unidade em Guarulhos, com rotina intensa e estrutura enxuta.</p><p><strong>JTBD:</strong> quando um equipamento crítico para, ele precisa de um técnico confiável em poucas horas para evitar perda de vendas e desperdício.</p>'
  },
  {
    titulo: "D) Proposta de Valor e Posicionamento",
    conteudo:
      '<p><strong>Frase núcleo:</strong> conectar restaurantes a técnicos confiáveis para resolver falhas operacionais críticas com rapidez, curadoria e acompanhamento organizado.</p><p>Posicionamento: especialista local em food service, com foco em confiança e previsibilidade, acima de diretórios generalistas.</p>'
  },
  {
    titulo: "E) MVP (escopo, fora de escopo e backlog)",
    conteudo:
      "<ul><li><strong>Inclui:</strong> cadastro, abertura de chamado com foto/descrição, matching semi-manual, status, avaliação e histórico.</li><li><strong>Fora do MVP:</strong> pagamento integrado, repasse financeiro, app nativo e auto-matching avançado.</li><li><strong>Backlog por semana:</strong> semana 1 (landing e cadastro), semanas 2-3 (formulário e painel), semana 4 (notificações), semana 5 (histórico).</li></ul>"
  },
  {
    titulo: "F) Jornada do Usuário e Funil",
    conteudo:
      "<p>Fluxo do restaurante: contato comercial -> cadastro gratuito -> abertura de chamado -> matching em até 30 minutos -> acompanhamento -> avaliação -> repetição.</p><p>Funil inicial: topo com 30 contatos e 10 interessados; meio com 8 cadastros e 5 clientes ativos; fundo com meta de 30% de recorrência em até 6 meses.</p>"
  },
  {
    titulo: "G) Estratégia de Aquisição",
    conteudo:
      "<ul><li><strong>Canal 1:</strong> visitas locais em Guarulhos com meta de 20 contatos por semana.</li><li><strong>Canal 2:</strong> grupos de WhatsApp do setor com 3 publicações úteis por semana.</li><li><strong>Canal 3:</strong> parcerias com contadores e consultores de food service.</li></ul><p>Plano de teste: semana 1 focada em visitas, semana 2 em WhatsApp e rodada de mídia local entre R$ 200 e R$ 500 para validar argumento comercial.</p>"
  }
);

entregaveisFinais.push(
  {
    titulo: "H) Plano de Conteúdo (4 semanas + 10 ideias)",
    conteudo:
      "<p><strong>Sequência de 4 semanas:</strong> semana 1 (freezer parou e resposta rápida), semana 2 (caso de perda evitada), semana 3 (erros comuns de manutenção), semana 4 (por que curadoria importa).</p><p><strong>10 ideias de post:</strong> falha de freezer na sexta, perda de R$ 500 por refrigeração, piloto em Guarulhos, vantagens da curadoria, manutenção de chapa, SLA de urgência, histórico técnico, atração de prestadores fundadores, falha elétrica resolvida e convite para parceria local.</p>"
  },
  {
    titulo: "I) Precificação e justificativa",
    conteudo:
      "<ul><li><strong>Piloto:</strong> comissão de 10% no prestador, com faixa referência de R$ 50 por chamado de R$ 500.</li><li><strong>Padrão:</strong> evolução para 12% (cerca de R$ 60 por chamado), com opção de taxa fixa de R$ 20.</li><li><strong>Incentivo de entrada:</strong> 0% para os 5 primeiros jobs dos prestadores fundadores.</li><li><strong>Futuro:</strong> plano premium de R$ 99/mês para restaurantes com prioridade.</li></ul><p>Justificativa: baixa fricção inicial, percepção de valor por curadoria e caminho para sustentabilidade.</p>"
  },
  {
    titulo: "J) Projeção financeira de 12 meses",
    conteudo:
      "<p>Cenários trabalhados: conservador (10 chamados/mês), base (20 chamados/mês) e agressivo (35 chamados/mês), com receita unitária de comissão em torno de R$ 50/chamado.</p><table class='table table-sm'><thead><tr><th>Período</th><th>Receita Base</th><th>Custos acumulados</th><th>Resultado Base</th></tr></thead><tbody><tr><td>Meses 1-3</td><td>R$ 3.000</td><td>R$ 12.600</td><td>-R$ 9.600</td></tr><tr><td>Meses 4-6</td><td>R$ 6.000</td><td>R$ 25.200</td><td>-R$ 19.200</td></tr><tr><td>Meses 7-12</td><td>R$ 14.400</td><td>R$ 50.400</td><td>-R$ 36.000</td></tr></tbody></table><p>Leitura pedagógica: o primeiro ciclo prioriza prova de recorrência e eficiência operacional antes da escala.</p>"
  },
  {
    titulo: "K) KPIs semanais e mensais",
    conteudo:
      "<ul><li><strong>Semanais:</strong> 5 a 8 visitas qualificadas, 2 cadastros, 1 prestador validado, 1 a 3 chamados potenciais, conversão visita-cadastro e tempo de resposta.</li><li><strong>Meta semanal de serviço:</strong> SLA de resposta em até 30 minutos.</li><li><strong>Mensais:</strong> 20 visitas, 8 cadastros, 5 prestadores ativos, 10 a 20 chamados, avaliação média acima de 8, churn abaixo de 20% e CAC inferior a R$ 20.</li></ul>"
  },
  {
    titulo: "L) Matriz de riscos e mitigação",
    conteudo:
      "<table class='table table-sm'><thead><tr><th>Risco</th><th>Probabilidade</th><th>Impacto</th><th>Mitigação</th></tr></thead><tbody><tr><td>Falta de prestador para urgência</td><td>Alta</td><td>Alta</td><td>5 fundadores por categoria e sobrecapacidade</td></tr><tr><td>Baixo volume de chamados</td><td>Alta</td><td>Médio</td><td>20 visitas semanais e ajuste de pitch</td></tr><tr><td>Qualidade abaixo da meta</td><td>Média</td><td>Alta</td><td>avaliação contínua e offboarding</td></tr><tr><td>Dependência de poucos parceiros</td><td>Média</td><td>Médio</td><td>diversificação da base</td></tr></tbody></table><p>Prioridade de ataque: 1) prestadores, 2) volume, 3) qualidade.</p>"
  },
  {
    titulo: "M) Plano 30/60/90 dias",
    conteudo:
      "<p><strong>Dia 7:</strong> lista de 30 restaurantes e 15 prestadores. <strong>Dia 10:</strong> primeiras 10 entrevistas. <strong>Dia 20:</strong> 3 prestadores fundadores confirmados. <strong>Dia 30:</strong> 5 restaurantes e 3 prestadores ativos.</p><p><strong>Dia 45:</strong> primeiro chamado real. <strong>Dia 60:</strong> 5 restaurantes ativos e pelo menos 5 atendimentos. <strong>Dia 90:</strong> 10 restaurantes piloto, 20 chamados acumulados e avaliação média mínima de 8.</p>"
  },
  {
    titulo: "N) Pitch de 2 minutos e roteiro de apresentação",
    conteudo:
      "<p><strong>Roteiro:</strong> abrir com dor real (perda de vendas por falha técnica), apresentar solução (matching curado em até 30 minutos), reduzir risco de entrada (piloto sem taxa para restaurante) e fechar com chamada de ação objetiva (cadastro em 2 minutos).</p><p>Aplicação sugerida: visitas presenciais, WhatsApp comercial e reuniões com parceiros locais.</p>"
  }
);

const estadoJornada = {
  indiceEtapaAtual: 0,
  docenteAutomaticoAtivo: false,
  docenteManualAtivo: false,
  indiceFalasPorEtapa: {},
  checklistPorEtapa: {}
};

const elementos = {
  listaEtapas: document.getElementById("lista-etapas"),
  etapaCodigo: document.getElementById("etapa-codigo"),
  etapaTitulo: document.getElementById("etapa-titulo"),
  etapaIntroducao: document.getElementById("etapa-introducao"),
  checklistEtapa: document.getElementById("checklist-etapa"),
  contadorFalas: document.getElementById("contador-falas"),
  rotuloPersonagem: document.getElementById("rotulo-personagem"),
  barraProgressoDialogo: document.getElementById("barra-progresso-dialogo"),
  bolhaFala: document.getElementById("bolha-fala"),
  botaoFalaAnterior: document.getElementById("botao-fala-anterior"),
  botaoProximaFala: document.getElementById("botao-proxima-fala"),
  botaoDocenteManual: document.getElementById("botao-docente-manual"),
  caixaDocente: document.getElementById("caixa-docente"),
  textoDocente: document.getElementById("texto-docente"),
  listaRevisao: document.getElementById("lista-revisao"),
  saibaMaisTitulo: document.getElementById("saiba-mais-titulo"),
  saibaMaisTexto: document.getElementById("saiba-mais-texto"),
  textoEntrega: document.getElementById("texto-entrega"),
  alternadorDocente: document.getElementById("alternador-docente"),
  botaoReiniciarEtapa: document.getElementById("botao-reiniciar-etapa"),
  botaoProximaEtapa: document.getElementById("botao-proxima-etapa"),
  listaGlossario: document.getElementById("lista-glossario"),
  acordeaoEntregaveis: document.getElementById("acordeao-entregaveis")
};

function iniciarEstado() {
  etapasJornada.forEach((etapa, indiceEtapa) => {
    estadoJornada.indiceFalasPorEtapa[indiceEtapa] = 0;
    estadoJornada.checklistPorEtapa[indiceEtapa] = etapa.checklist.map(() => false);
  });
}

function renderizarNavegadorEtapas() {
  elementos.listaEtapas.innerHTML = "";

  etapasJornada.forEach((etapa, indice) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = `nav-link ${indice === estadoJornada.indiceEtapaAtual ? "active" : ""}`;
    botao.setAttribute("data-indice-etapa", String(indice));
    botao.textContent = `${etapa.codigo} - ${etapa.titulo}`;
    botao.addEventListener("click", () => trocarEtapa(indice));
    elementos.listaEtapas.appendChild(botao);
  });
}

function montarChecklistEtapa(indiceEtapa) {
  const etapa = etapasJornada[indiceEtapa];
  const estadoChecklist = estadoJornada.checklistPorEtapa[indiceEtapa];

  elementos.checklistEtapa.innerHTML = "";

  etapa.checklist.forEach((item, indiceItem) => {
    const idCampo = `check-etapa-${indiceEtapa}-${indiceItem}`;

    const bloco = document.createElement("div");
    bloco.className = "form-check";
    bloco.innerHTML = `
      <input class="form-check-input" type="checkbox" id="${idCampo}" ${estadoChecklist[indiceItem] ? "checked" : ""}>
      <label class="form-check-label" for="${idCampo}">${item}</label>
    `;

    const campo = bloco.querySelector("input");
    campo.addEventListener("change", (evento) => {
      estadoJornada.checklistPorEtapa[indiceEtapa][indiceItem] = evento.target.checked;
    });

    elementos.checklistEtapa.appendChild(bloco);
  });
}

function renderizarFalaAtual() {
  const indiceEtapa = estadoJornada.indiceEtapaAtual;
  const etapa = etapasJornada[indiceEtapa];
  const indiceFala = estadoJornada.indiceFalasPorEtapa[indiceEtapa];
  const falaAtual = etapa.falas[indiceFala];
  const percentual = Math.round(((indiceFala + 1) / etapa.falas.length) * 100);

  elementos.contadorFalas.textContent = `Fala ${indiceFala + 1} de ${etapa.falas.length}`;
  elementos.rotuloPersonagem.textContent = `${falaAtual.emoji} ${falaAtual.nome}`;
  elementos.barraProgressoDialogo.style.width = `${percentual}%`;
  elementos.barraProgressoDialogo.setAttribute("aria-valuenow", String(percentual));

  elementos.bolhaFala.className = "bolha-fala";
  elementos.bolhaFala.classList.add(`bolha-fala-${falaAtual.personagem}`);
  elementos.bolhaFala.innerHTML = `<strong>${falaAtual.nome}:</strong> ${falaAtual.texto}`;

  elementos.botaoFalaAnterior.disabled = indiceFala === 0;
  elementos.botaoProximaFala.disabled = indiceFala === etapa.falas.length - 1;

  const deveExibirDocente = estadoJornada.docenteAutomaticoAtivo || estadoJornada.docenteManualAtivo;

  if (deveExibirDocente) {
    elementos.caixaDocente.classList.remove("d-none");
    elementos.textoDocente.textContent = falaAtual.explicacaoDocente;
  } else {
    elementos.caixaDocente.classList.add("d-none");
  }

  elementos.botaoDocenteManual.textContent = estadoJornada.docenteManualAtivo
    ? "👨‍🏫 Ocultar leitura nesta fala"
    : "👨‍🏫 Chamar docente nesta fala";
}

function renderizarResumoEtapa(indiceEtapa) {
  const etapa = etapasJornada[indiceEtapa];

  elementos.listaRevisao.innerHTML = "";
  etapa.revisao.forEach((item) => {
    const linha = document.createElement("li");
    linha.textContent = item;
    elementos.listaRevisao.appendChild(linha);
  });

  elementos.saibaMaisTitulo.textContent = etapa.saibaMais.titulo;
  elementos.saibaMaisTexto.textContent = etapa.saibaMais.texto;
  elementos.textoEntrega.textContent = etapa.entrega;
}

function renderizarEtapa(indiceEtapa) {
  const etapa = etapasJornada[indiceEtapa];

  elementos.etapaCodigo.textContent = etapa.codigo;
  elementos.etapaTitulo.textContent = etapa.titulo;
  elementos.etapaIntroducao.textContent = etapa.introducao;

  montarChecklistEtapa(indiceEtapa);
  renderizarResumoEtapa(indiceEtapa);
  renderizarFalaAtual();
}

function trocarEtapa(novoIndiceEtapa) {
  estadoJornada.indiceEtapaAtual = novoIndiceEtapa;
  estadoJornada.docenteManualAtivo = false;
  renderizarNavegadorEtapas();
  renderizarEtapa(novoIndiceEtapa);
}

function avancarFala() {
  const indiceEtapa = estadoJornada.indiceEtapaAtual;
  const etapa = etapasJornada[indiceEtapa];
  const indiceAtual = estadoJornada.indiceFalasPorEtapa[indiceEtapa];

  if (indiceAtual < etapa.falas.length - 1) {
    estadoJornada.indiceFalasPorEtapa[indiceEtapa] = indiceAtual + 1;
    estadoJornada.docenteManualAtivo = false;
    renderizarFalaAtual();
  }
}

function voltarFala() {
  const indiceEtapa = estadoJornada.indiceEtapaAtual;
  const indiceAtual = estadoJornada.indiceFalasPorEtapa[indiceEtapa];

  if (indiceAtual > 0) {
    estadoJornada.indiceFalasPorEtapa[indiceEtapa] = indiceAtual - 1;
    estadoJornada.docenteManualAtivo = false;
    renderizarFalaAtual();
  }
}

function reiniciarEtapaAtual() {
  const indiceEtapa = estadoJornada.indiceEtapaAtual;
  estadoJornada.indiceFalasPorEtapa[indiceEtapa] = 0;
  estadoJornada.checklistPorEtapa[indiceEtapa] = etapasJornada[indiceEtapa].checklist.map(() => false);
  estadoJornada.docenteManualAtivo = false;
  renderizarEtapa(indiceEtapa);
}

function avancarEtapa() {
  const proximaEtapa = estadoJornada.indiceEtapaAtual + 1;
  if (proximaEtapa < etapasJornada.length) {
    trocarEtapa(proximaEtapa);
    return;
  }

  const secaoFinal = document.getElementById("plano-final");
  if (secaoFinal) {
    secaoFinal.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderizarGlossario() {
  elementos.listaGlossario.innerHTML = "";

  glossarioSiglas.forEach((item) => {
    const coluna = document.createElement("div");
    coluna.className = "col-md-6 col-lg-4";
    coluna.innerHTML = `
      <article class="bloco-termo">
        <h3 class="h6 mb-1">${item.termo}</h3>
        <p class="mb-0">${item.descricao}</p>
      </article>
    `;
    elementos.listaGlossario.appendChild(coluna);
  });
}

function renderizarEntregaveisFinais() {
  elementos.acordeaoEntregaveis.innerHTML = "";

  entregaveisFinais.forEach((entrega, indice) => {
    const idTitulo = `titulo-entrega-${indice}`;
    const idColapso = `colapso-entrega-${indice}`;
    const item = document.createElement("article");
    item.className = "accordion-item";
    item.innerHTML = `
      <h3 class="accordion-header" id="${idTitulo}">
        <button class="accordion-button ${indice === 0 ? "" : "collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#${idColapso}" aria-expanded="${indice === 0 ? "true" : "false"}" aria-controls="${idColapso}">
          ${entrega.titulo}
        </button>
      </h3>
      <div id="${idColapso}" class="accordion-collapse collapse ${indice === 0 ? "show" : ""}" aria-labelledby="${idTitulo}" data-bs-parent="#acordeao-entregaveis">
        <div class="accordion-body">${entrega.conteudo}</div>
      </div>
    `;
    elementos.acordeaoEntregaveis.appendChild(item);
  });
}

function configurarEventos() {
  elementos.botaoFalaAnterior.addEventListener("click", voltarFala);
  elementos.botaoProximaFala.addEventListener("click", avancarFala);
  elementos.botaoReiniciarEtapa.addEventListener("click", reiniciarEtapaAtual);
  elementos.botaoProximaEtapa.addEventListener("click", avancarEtapa);

  elementos.botaoDocenteManual.addEventListener("click", () => {
    estadoJornada.docenteManualAtivo = !estadoJornada.docenteManualAtivo;
    renderizarFalaAtual();
  });

  elementos.alternadorDocente.addEventListener("change", (evento) => {
    estadoJornada.docenteAutomaticoAtivo = evento.target.checked;
    if (estadoJornada.docenteAutomaticoAtivo) {
      estadoJornada.docenteManualAtivo = false;
    }
    renderizarFalaAtual();
  });
}

function iniciarAplicacao() {
  iniciarEstado();
  renderizarNavegadorEtapas();
  renderizarEtapa(estadoJornada.indiceEtapaAtual);
  renderizarGlossario();
  renderizarEntregaveisFinais();
  configurarEventos();
}

document.addEventListener("DOMContentLoaded", iniciarAplicacao);
