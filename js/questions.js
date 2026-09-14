// Banco de Questões de Fisiologia Veterinária e Zootécnica (1º Semestre)
// Total: 60 Questões divididas em 3 Matérias (20 questões por matéria)

const QUESTIONS_DATABASE = [
  // ==========================================
  // MATÉRIA 1: PRINCÍPIOS FISIOLÓGICOS (20 questões: Q1 a Q20)
  // ==========================================
  {
    id: 1,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "facil",
    pergunta: "Em Fisiologia Animal, o conceito de Homeostase refere-se a:",
    alternativas: [
      "Paralisação total das atividades metabólicas celulares durante o sono do animal.",
      "Manutenção da constância do meio interno em relação a limites fisiológicos dinâmicos.",
      "Incapacidade dos animais de adaptar sua temperatura à variação ambiental.",
      "Destruição contínua de membranas celulares para renovação de energia."
    ],
    respostaCorreta: 1,
    explicacao: "Homeostase é a capacidade do organismo animal de manter o meio interno em relativo equilíbrio dinâmico e constante, essencial para a sobrevivência das células frente a variações do ambiente externo.",
    dica: "Homeostase = Equilíbrio e estabilidade do meio interno."
  },
  {
    id: 2,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "facil",
    pergunta: "O conceito de 'Meio Interno', introduzido por Claude Bernard, corresponde histologicamente e fisiologicamente a qual compartimento corporal?",
    alternativas: [
      "Ao líquido extracelular (LEC), que banha e nutre diretamente as células.",
      "Ao conteúdo alimentar contido no lúmen do estômago dos ruminantes.",
      "Ao ar residual armazenado nos alvéolos pulmonares.",
      "Exclusivamente ao citoplasma intracelular dos neurônios."
    ],
    respostaCorreta: 0,
    explicacao: "O meio interno é representado pelo Líquido Extracelular (LEC), composto pelo plasma sanguíneo e líquido intersticial. É através do LEC que as células trocam nutrientes, gases e excretas.",
    dica: "Meio interno = Líquido Extracelular (LEC) que banha as células."
  },
  {
    id: 3,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "medio",
    pergunta: "Qual é o principal mecanismo de controle utilizado pelo organismo animal para manter a homeostase (ex: regulação da temperatura corporal ou da glicemia)?",
    alternativas: [
      "Feedback positivo contínuo descontrolado.",
      "Apoptose celular maciça imediata.",
      "Feedback negativo (ou retroalimentação negativa).",
      "Difusão simples de grande peso molecular."
    ],
    respostaCorreta: 2,
    explicacao: "O Feedback Negativo é o principal mecanismo homeostático: quando uma variável corporal sofre alteração, o sistema gera uma resposta no sentido OPOSTO para trazê-la de volta ao valor normal de referência.",
    dica: "Feedback Negativo = Reverte a alteração e restaura o equilíbrio."
  },
  {
    id: 4,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "medio",
    pergunta: "Em qual das seguintes situações fisiológicas específicas ocorre a atuação de um mecanismo de Feedback Positivo?",
    alternativas: [
      "Redução da frequência cardíaca durante o repouso.",
      "Manutenção da pressão arterial em níveis normais.",
      "Regulação dos níveis de cálcio no sangue pela calcitonina.",
      "Liberação massiva de ocitocina que intensifica as contrações uterinas durante o parto."
    ],
    respostaCorreta: 3,
    explicacao: "No Feedback Positivo, a resposta intensifica a alteração inicial. No parto, o estiramento do colo uterino estimula a liberação de ocitocina, que aumenta a contração, aumentando ainda mais o estiramento até a expulsão do feto.",
    dica: "Feedback Positivo = Amplifica o estímulo inicial (ex: Parto e Ocitocina)."
  },
  {
    id: 5,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "facil",
    pergunta: "A membrana plasmática das células animais é descrita pelo modelo do mosaico fluido. Sua estrutura básica é constituída por:",
    alternativas: [
      "Uma camada dupla rígida e cristalina de carboidratos puros.",
      "Uma bicamada fosfolipídica com proteínas integrais e periféricas incrustadas.",
      "Uma rede sólida inalterável de fibras de queratina e sais minerais.",
      "Uma lâmina de triglicerídeos impermeável a gases e água."
    ],
    respostaCorreta: 1,
    explicacao: "A membrana celular é formada por uma bicamada de fosfolipídios com cabeças hidrofílicas e caudas hidrofóbicas, além de proteínas e glicídios que se movimentam lateralmente (mosaico fluido).",
    dica: "Membrana = Bicamada de fosfolipídios + proteínas móveis."
  },
  {
    id: 6,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "medio",
    pergunta: "O transporte de gases respiratórios (como $O_2$ e $CO_2$) através da membrana alveolar ocorre por:",
    alternativas: [
      "Difusão simples a favor do gradiente de concentração, sem consumo de ATP.",
      "Transporte ativo primário mediado por ATP-ase.",
      "Endocitose mediada por receptores de membrana.",
      "Osmose inversa sob alta pressão estática."
    ],
    respostaCorreta: 0,
    explicacao: "Substâncias lipossolúveis e gases pequenos ($O_2$, $CO_2$) atravessam a bicamada lipídica diretamente por difusão simples, deslocando-se da maior para a menor concentração sem gasto de energia metabólica.",
    dica: "Gases ($O_2$, $CO_2$) atravesam a membrana por Difusão Simples sem gastar ATP."
  },
  {
    id: 7,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "medio",
    pergunta: "Moléculas polares solúveis em água (como a glicose e certos aminoácidos) atravessam a membrana a favor do gradiente de concentração utilizando proteínas carreadoras sem gastar ATP. Esse transporte é chamado:",
    alternativas: [
      "Transporte ativo primário.",
      "Pinocitose lipídica.",
      "Difusão facilitada.",
      "Antiporte dependente de energia."
    ],
    respostaCorreta: 2,
    explicacao: "A difusão facilitada é um transporte passivo (sem gasto de ATP) a favor do gradiente, mas que requer proteínas transportadoras (como os transportadores GLUT) para auxiliar a passagem de moléculas polares.",
    dica: "A favor do gradiente + com proteína transportadora = Difusão Facilitada."
  },
  {
    id: 8,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "medio",
    pergunta: "A Osmose é definida especificamente como o movimento de:",
    alternativas: [
      "Solutos do meio hipertônico para o meio hipotônico através de poros ativos.",
      "Proteínas de grande porte através dos poros da membrana celular.",
      "Íons sódio e potássio contra seus gradientes eletroquímicos.",
      "Água (solvente) do meio menos concentrado em soluto (hipotônico) para o mais concentrado (hipertônico)."
    ],
    respostaCorreta: 3,
    explicacao: "A osmose é a difusão do solvente (água) através de uma membrana semipermeável, movendo-se do local de menor concentração de soluto (hipotônico) para o de maior concentração (hipertônico).",
    dica: "Osmose = A água vai de onde está mais diluído (hipotônico) para onde está mais concentrado (hipertônico)."
  },
  {
    id: 9,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "medio",
    pergunta: "Se hemácias de um bovino forem colocadas em uma solução HIPERTÔNICA (com concentração de soluto muito superior à do plasma), o que ocorrerá com as células?",
    alternativas: [
      "Absorverão água e sofrerão lise celular (estouro).",
      "Perderão água por osmose e murcharão (crenação).",
      "Manterão o volume inalterado por equilíbrio iônico.",
      "Converterão os açúcares citoplasmáticos em cristais de fósforo."
    ],
    respostaCorreta: 1,
    explicacao: "Em solução hipertônica, a concentração externa de solutos é maior que a intracelular. Para igualar a osmolaridade, a água sai da hemácia por osmose, fazendo-a murchar (crenar).",
    dica: "Solução Hipertônica = Célula perde água e murcha (crenação)."
  },
  {
    id: 10,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "medio",
    pergunta: "A bomba de $Na^+/K^+$-ATPase é um exemplo clássico de transporte ativo primário. A cada ciclo catalítico utilizando 1 molécula de ATP, ela transporta:",
    alternativas: [
      "3 íons $Na^+$ para o exterior e 2 íons $K^+$ para o interior da célula.",
      "2 íons $Na^+$ para o interior e 3 íons $K^+$ para o exterior da célula.",
      "3 íons $Ca^{2+}$ para o exterior e 3 íons $Cl^-$ para o interior.",
      "1 molécula de glicose e 1 íon sódio na mesma direção."
    ],
    respostaCorreta: 0,
    explicacao: "A bomba de $Na^+/K^+$ utiliza ATP para bombear 3 íons $Na^+$ para FORA da célula e 2 íons $K^+$ para DENTRO, mantendo o gradiente iônico eletrogênico e o potencial de repouso.",
    dica: "Bomba $Na^+/K^+$ = 3 Sódio para FORA, 2 Potássio para DENTRO (com gasto de ATP)."
  },
  {
    id: 11,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "dificil",
    pergunta: "O transporte ativo secundário (como o simporte de sódio e glicose no intestino dos animais) caracteriza-se por:",
    alternativas: [
      "Usar hidrólise direta de ATP na própria proteína de transporte da glicose.",
      "Ocorrer exclusivamente por poros abertos permanentemente sem regulação.",
      "Aproveitar o gradiente de $Na^+$ gerado previamente pela bomba de $Na^+/K^+$ para mover a glicose contra seu gradiente.",
      "Mover água contra a gravidade no sistema circulatório."
    ],
    respostaCorreta: 2,
    explicacao: "No transporte ativo secundário, o transporte da glicose contra o gradiente não consome ATP diretamente na sua proteína, mas utiliza a energia potencial do gradiente de $Na^+$ gerado previamente pelo transporte ativo primário.",
    dica: "Transporte Ativo Secundário = Usa o gradiente iônico já criado (sem queimar ATP diretamente na molécula)."
  },
  {
    id: 12,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "dificil",
    pergunta: "O potencial de repouso da membrana celular de células excitáveis (como neurônios e fibras musculares, cerca de -70mV a -90mV) é determinado principalmente por:",
    alternativas: [
      "Alta permeabilidade da membrana ao sódio durante o repouso.",
      "Entrada contínua de grandes quantidades de íons cálcio.",
      "Ausência de proteínas aniônicas no interior do citoplasma.",
      "Vazamento passivo de íons $K^+$ para fora através de canais de repouso e ação da bomba $Na^+/K^+$."
    ],
    respostaCorreta: 3,
    explicacao: "A membrana é muito mais permeável ao $K^+$ do que ao $Na^+$ no repouso. A saída contínua de $K^+$ a favor do gradiente deixa o interior da célula eletronegativo, mantido pela bomba $Na^+/K^+$.",
    dica: "Potencial de repouso negativo = Vazamento passivo de $K^+$ para fora + Bomba de $Na^+/K^+$."
  },
  {
    id: 13,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "facil",
    pergunta: "Na comunicação celular, a sinalização ENDÓCRINA caracteriza-se por:",
    alternativas: [
      "Liberação de neurotransmissores diretamente na fenda sináptica.",
      "Secreção de hormônios na corrente sanguínea para atingir células-alvo em tecidos distantes.",
      "Ação imediata do sinalizador apenas na própria célula que o secretou.",
      "Passagem direta de íons por junções comunicantes (gap junctions)."
    ],
    respostaCorreta: 1,
    explicacao: "Na sinalização endócrina, as glândulas secretam mediadores químicos (hormônios) no sangue, que os transporta por todo o corpo até as células-alvo que possuem receptores específicos.",
    dica: "Sinalização Endócrina = Hormônio via Sangue até células distantes."
  },
  {
    id: 14,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "medio",
    pergunta: "Durante uma reação inflamatória local no tecido conjuntivo de um animal, os mastócitos liberam histamina que atua nas células endoteliais vizinhas. Esse tipo de sinalização é classificado como:",
    alternativas: [
      "Parácrina.",
      "Endócrina.",
      "Autócrina puramente nervosa.",
      "Sinalização neurohipofisária."
    ],
    respostaCorreta: 0,
    explicacao: "A sinalização parácrina ocorre quando uma célula secreta mediadores químicos que se difundem no líquido intersticial e atuam em células vizinhas próximas no mesmo tecido.",
    dica: "Sinalização Parácrina = Atua em células vizinhas (próximas no mesmo tecido)."
  },
  {
    id: 15,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "medio",
    pergunta: "Quando uma célula secreta uma substância química (como certo fator de crescimento) que se liga a receptores localizados na SUA PRÓPRIA membrana celular, chamamos essa sinalização de:",
    alternativas: [
      "Endócrina distante.",
      "Parácrina cruzada.",
      "Autócrina.",
      "Sináptica direta."
    ],
    respostaCorreta: 2,
    explicacao: "Na sinalização autócrina (Auto = próprio), a substância química produzida pela célula atua regulando a atividade da própria célula emissora.",
    dica: "Sinalização Autócrina = Sinal para a própria célula."
  },
  {
    id: 16,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "dificil",
    pergunta: "A ligação de um hormônio proteico (como o glucagon) ao seu receptor de membrana acoplado à Proteína G ativa a enzima Adenilato Ciclase. Essa enzima catalisa a formação de qual segundo mensageiro intracelular?",
    alternativas: [
      "Ácido láctico.",
      "Ácido pirúvico.",
      "Glicose-6-fosfato.",
      "AMP cíclico (AMPc)."
    ],
    respostaCorreta: 3,
    explicacao: "A enzima Adenilato Ciclase converte ATP em $AMPc$ (AMP cíclico), que atua como segundo mensageiro ativando a Proteína Cinase A (PKA) e desencadeando a resposta celular.",
    dica: "Adenilato Ciclase converte ATP em $AMPc$ (Segundo Mensageiro)."
  },
  {
    id: 17,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "dificil",
    pergunta: "Na via de sinalização da fosfolipase C (PLC), a clivagem do fosfolipídio de membrana PIP2 gera dois importantes segundos mensageiros. Quais são eles?",
    alternativas: [
      "Glicose e Frutose.",
      "Inositol trisfosfato ($IP_3$) e Diacilglicerol (DAG).",
      "AMPc e GMPc.",
      "Sódio e Potássio."
    ],
    respostaCorreta: 1,
    explicacao: "A fosfolipase C cliva o $PIP_2$ gerando $IP_3$ (que promove a liberação de $Ca^{2+}$ do retículo endoplasmático) e DAG (que ativa a Proteína Cinase C - PKC).",
    dica: "Fosfolipase C gera $IP_3$ (libera $Ca^{2+}$) e DAG."
  },
  {
    id: 18,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "medio",
    pergunta: "Qual das opções apresenta a distribuição iônica CORRETA nos fluidos corporais dos animais em condições fisiológicas de repouso?",
    alternativas: [
      "Maior concentração de $Na^+$ no líquido extracelular e maior concentração de $K^+$ no líquido intracelular.",
      "Maior concentração de $K^+$ no líquido extracelular e maior concentração de $Na^+$ no líquido intracelular.",
      "Concentrações idênticas de $Na^+$ e $K^+$ dentro e fora das células.",
      "Ausência total de íons potássio no citoplasma celular."
    ],
    respostaCorreta: 0,
    explicacao: "Fisiologicamente, o sódio ($Na^+$) é o principal cátion do líquido extracelular (LEC), enquanto o potássio ($K^+$) é o principal cátion do líquido intracelular (LIC).",
    dica: "Sódio ($Na^+$) domina FORA da célula; Potássio ($K^+$) domina DENTRO da célula."
  },
  {
    id: 19,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "dificil",
    pergunta: "Em um animal desidratado, o aumento da osmolaridade do plasma sanguíneo estimula os osmorreceptores do hipotálamo, desencadeando a liberação de qual hormônio para reter água nos rins?",
    alternativas: [
      "Insulina.",
      "Tiroxina ($T_4$).",
      "Hormônio Antidiurético (ADH ou Vasopressina).",
      "Paratormônio (PTH)."
    ],
    respostaCorreta: 2,
    explicacao: "O aumento da osmolaridade plasmática estimula o hipotálamo a secretar ADH (vasopressina), que aumenta a reabsorção de água nos ductos coletores renais para restaurar o volume do LEC.",
    dica: "Desidratação / Alta osmolaridade = Liberação de ADH (reabsorve água nos rins)."
  },
  {
    id: 20,
    materia: "Princípios Fisiológicos",
    assunto: "Princípios Fisiológicos",
    dificuldade: "facil",
    pergunta: "Assinale a alternativa INCORRETA em relação aos processos fisiológicos fundamentais:",
    alternativas: [
      "A homeostase envolve constante gasto energético do organismo para manter o meio interno estável.",
      "O transporte ativo primário consome energia direta da quebra do ATP.",
      "A difusão facilitada consome grandes quantidades de ATP para mover íons contra o gradiente de concentração.",
      "As células utilizam Feedback Negativo para corrigir desvios no meio interno."
    ],
    respostaCorreta: 2,
    explicacao: "A alternativa C está INCORRETA porque a difusão facilitada é um transporte PASSIVO, ocorrendo a favor do gradiente e sem NENHUM consumo de ATP.",
    dica: "Difusão facilitada NÃO consome ATP!"
  },

  // ==========================================
  // MATÉRIA 2: NEUROFISIOLOGIA (20 questões: Q21 a Q40)
  // ==========================================
  {
    id: 21,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "facil",
    pergunta: "Anatomicamente e funcionalmente, o Sistema Nervoso Central (SNC) dos animais vertebrados é composto por:",
    alternativas: [
      "Nervos espinhais e gânglios simpáticos.",
      "Encéfalo e Medula Espinhal.",
      "Músculos esqueléticos e órgãos receptores.",
      "Plexo entérico e vasos sanguíneos."
    ],
    respostaCorreta: 1,
    explicacao: "O Sistema Nervoso Central (SNC) é formado pelo encéfalo (cérebro, cerebelo e tronco encefálico) e pela medula espinhal. Os nervos e gânglios formam o Sistema Nervoso Periférico (SNP).",
    dica: "SNC = Encéfalo + Medula Espinhal."
  },
  {
    id: 22,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "facil",
    pergunta: "Em um neurônio típico, qual é a estrutura responsável por receber os sinais de outros neurônios e conduzi-los em direção ao corpo celular?",
    alternativas: [
      "Dendritos.",
      "Axônio.",
      "Bainha de Mielina.",
      "Nódulo de Ranvier."
    ],
    respostaCorreta: 0,
    explicacao: "Os dendritos são ramificações celulares especializadas em receber estímulos e sinais sinápticos de outros neurônios e conduzi-los em direção ao soma (corpo celular).",
    dica: "Dendritos = Recebem os estímulos. Axônio = Transmite o impulso para longe."
  },
  {
    id: 23,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "medio",
    pergunta: "Qual tipo de célula da glia desempenha papel essencial na sustentação metabólica, regulação do $K^+$ extracelular e formação da Barreira Hematoencefálica (BHE) no SNC?",
    alternativas: [
      "Microglia.",
      "Célula de Schwann.",
      "Astrócito.",
      "Ependimócito."
    ],
    respostaCorreta: 2,
    explicacao: "Os astrócitos possuem prolongamentos (pés vasculares) que envolvem os capilares cerebrais, formando a barreira hematoencefálica e controlando o ambiente químico do SNC.",
    dica: "Barreira Hematoencefálica + Suporte ao SNC = Astrócito."
  },
  {
    id: 24,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "medio",
    pergunta: "A bainha de mielina isola eletricamente os axônios aumentando a velocidade de condução. Quais células são responsáveis pela mielinização no SNC e no SNP, respectivamente?",
    alternativas: [
      "Astrócitos no SNC e Microglia no SNP.",
      "Células de Schwann no SNC e Oligodendrócitos no SNP.",
      "Microglia no SNC e Astrócitos no SNP.",
      "Oligodendrócitos no SNC e Células de Schwann no SNP."
    ],
    respostaCorreta: 3,
    explicacao: "No Sistema Nervoso Central, a mielina é sintetizada pelos Oligodendrócitos. No Sistema Nervoso Periférico, a mielinização é realizada pelas Células de Schwann.",
    dica: "Mielina no SNC = Oligodendrócito; Mielina no SNP = Célula de Schwann."
  },
  {
    id: 25,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "medio",
    pergunta: "As células da Microglia no tecido nervoso exercem qual função primária?",
    alternativas: [
      "Condução rápida de potenciais de ação.",
      "Fagocitose e defesa imunológica contra patógenos e detritos no SNC.",
      "Produção de líquido cefalorraquidiano (líquor).",
      "Síntese de mielina nas raízes espinhais."
    ],
    respostaCorreta: 1,
    explicacao: "A microglia deriva de precursores de macrófagos e atua como o sistema imunológico residente do SNC, realizando fagocitose de microrganismos e restos celulares.",
    dica: "Microglia = Macrófagos/Defesa Imunológica do SNC."
  },
  {
    id: 26,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "medio",
    pergunta: "Durante o disparo de um potencial de ação no axônio, a fase rápida de DESPOLARIZAÇÃO ocorre devido a:",
    alternativas: [
      "Abertura de canais de $Na^+$ voltagem-dependentes e rápida entrada de $Na^+$ na célula.",
      "Saída massiva de íons potássio através de canais lentos.",
      "Bomba de $Na^+/K^+$ funcionando ao contrário.",
      "Fechamento completo de todos os canais iônicos da membrana."
    ],
    respostaCorreta: 0,
    explicacao: "A despolarização é desencadeada quando o potencial atinge o limiar, abrindo canais de $Na^+$ voltagem-dependentes. O $Na^+$ entra rapidamente na célula a favor do gradiente, tornando o interior positivo.",
    dica: "Despolarização = Rápida ENTRADA de $Na^+$ (Sódio)."
  },
  {
    id: 27,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "medio",
    pergunta: "A fase de REPOLARIZAÇÃO do potencial de ação, que faz o potencial elétrico retornar aos níveis negativos, é causada principalmente por:",
    alternativas: [
      "Entrada excessiva de sódio e cálcio.",
      "Inativação dos canais de $Na^+$ e abertura de canais de $K^+$ voltagem-dependentes com saída de $K^+$.",
      "Bloqueio da bomba de sódio e potássio pela mielina.",
      "Aumento imediato da temperatura citoplasmática."
    ],
    respostaCorreta: 2,
    explicacao: "Na repolarização, os canais de $Na^+$ inativam-se e os canais de $K^+$ voltagem-dependentes se abrem. A saída de íons $K^+$ positivos restaura a eletronegatividade interna da célula.",
    dica: "Repolarização = Inativação de $Na^+$ + SAÍDA de $K^+$ (Potássio)."
  },
  {
    id: 28,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "dificil",
    pergunta: "Durante o PERÍODO REFRATÁRIO ABSOLUTO de um neurônio:",
    alternativas: [
      "É possível gerar um segundo potencial de ação com um estímulo de intensidade normal.",
      "A célula está despolarizada ao máximo e nenhum outro potencial de ação pode ser gerado, independentemente da força do estímulo.",
      "Apenas potenciais de ação inibitórios podem ser conduzidos pelo axônio.",
      "O axônio perde temporariamente a sua bainha de mielina."
    ],
    respostaCorreta: 1,
    explicacao: "No período refratário absoluto, os canais de $Na^+$ voltagem-dependentes estão inativados. É impossível deflagrar outro potencial de ação, o que garante a propagação unidirecional do impulso.",
    dica: "Período Refratário Absoluto = Impossível gerar novo potencial de ação."
  },
  {
    id: 29,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "medio",
    pergunta: "Como a presença da bainha de mielina e dos Nódulos de Ranvier influencia a propagação do potencial de ação ao longo do axônio?",
    alternativas: [
      "Diminui a velocidade do impulso para economizar glicose.",
      "Promove a condução saltatória, aumentando drasticamente a velocidade de transmissão.",
      "Impede que o impulso chegue aos terminais sinápticos.",
      "Transforma o potencial de ação em um impulso mecânico contínuo."
    ],
    respostaCorreta: 1,
    explicacao: "Nos axônios mielinizados, a bainha de mielina atua como isolante elétrico. O potencial de ação ocorre apenas nas regiões desprovidas de mielina (Nódulos de Ranvier), 'saltando' de nódulo em nódulo.",
    dica: "Bainha de Mielina = Condução Saltatória (MUITO mais rápida e econômica)."
  },
  {
    id: 30,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "facil",
    pergunta: "O que desencadeia diretamente a fusão das vesículas sinápticas e a exocitose de neurotransmissores na fenda sináptica de uma sinapse química?",
    alternativas: [
      "A entrada de íons Cálcio ($Ca^{2+}$) no terminal pré-sináptico através de canais voltagem-dependentes.",
      "A saída imediata de todas as moléculas de ATP da célula.",
      "O resfriamento repentino da membrana pós-sináptica.",
      "A destruição total dos receptores pós-sinápticos."
    ],
    respostaCorreta: 0,
    explicacao: "Quando o potencial de ação atinge o terminal axônico pré-sináptico, despolariza a membrana abrindo canais de $Ca^{2+}$ voltagem-dependentes. O influxo de $Ca^{2+}$ estimula a exocitose das vesículas de neurotransmissor.",
    dica: "Entrada de $Ca^{2+}$ no terminal pré-sináptico = Liberação de Neurotransmissores."
  },
  {
    id: 31,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "medio",
    pergunta: "Qual é o principal neurotransmissor utilizado na Junção Neuromuscular esquelética dos mamíferos e nos neurônios pré-ganglionares do Sistema Nervoso Autônomo?",
    alternativas: [
      "Dopamina.",
      "Serotonina.",
      "Acetilcolina (ACh).",
      "GABA."
    ],
    respostaCorreta: 2,
    explicacao: "A Acetilcolina (ACh) é o neurotransmissor fundamental na junção neuromuscular (desencadeando a contração dos músculos esqueléticos) e em todos os neurônios pré-ganglionares autônomos.",
    dica: "Junção Neuromuscular = Acetilcolina (ACh)."
  },
  {
    id: 32,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "medio",
    pergunta: "O principal neurotransmissor INIBITÓRIO do Sistema Nervoso Central dos mamíferos é o GABA (Ácido Gama-Aminobutírico). Ao se ligar aos receptores $GABA_A$, ele causa:",
    alternativas: [
      "Despolarização rápida por entrada de sódio.",
      "Bloqueio da síntese de proteínas contráteis.",
      "Aumento imediato da frequência cardíaca.",
      "Entrada de íons Cloreto ($Cl^-$), promovendo a hiperpolarização da membrana pós-sináptica."
    ],
    respostaCorreta: 3,
    explicacao: "Os receptores $GABA_A$ são canais de Cloreto ionotrópicos. A ligação do GABA provoca a entrada de $Cl^-$ (ânion), tornando o interior celular mais negativo (hiperpolarização) e dificultando o disparo de potenciais de ação.",
    dica: "GABA = Neurotransmissor INIBITÓRIO (Entrada de $Cl^-$ $\rightarrow$ Hiperpolarização)."
  },
  {
    id: 33,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "medio",
    pergunta: "Qual é o principal neurotransmissor EXCITATÓRIO do encéfalo dos animais vertebrados?",
    alternativas: [
      "Glicina.",
      "Glutamato.",
      "Histamina.",
      "Melatonina."
    ],
    respostaCorreta: 1,
    explicacao: "O Glutamato é o neurotransmissor excitatório mais abundante no SNC dos vertebrados. Ao se ligar aos receptores (AMPA e NMDA), promove o influxo de $Na^+$ e $Ca^{2+}$, gerando despolarização pós-sináptica.",
    dica: "Glutamato = Principal Neurotransmissor EXCITATÓRIO do SNC."
  },
  {
    id: 34,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "dificil",
    pergunta: "Um Potencial Pós-Sináptico Inibitório (PPSI) afasta a membrana neuronal do limiar de disparo. Eletrofisiologicamente, isso corresponde a uma:",
    alternativas: [
      "Hiperpolarização da membrana pós-sináptica.",
      "Despolarização supralimiar instantânea.",
      "Destruição do soma neuronal.",
      "Liberação retrógrada de noradrenalina."
    ],
    respostaCorreta: 0,
    explicacao: "O PPSI é uma alteração local do potencial de membrana em direção a valores mais negativos (hiperpolarização), provocada pela entrada de $Cl^-$ ou saída de $K^+$, tornando a célula menos excitável.",
    dica: "PPSI = Hiperpolarização (afasta a célula do limiar de disparo)."
  },
  {
    id: 35,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "medio",
    pergunta: "Quando um touro percebe uma ameaça no curral, a divisão SIMPÁTICA do Sistema Nervoso Autônomo é ativada (resposta de 'luta ou fuga'). Qual das seguintes respostas fisiológicas é esperada?",
    alternativas: [
      "Diminuição da frequência cardíaca e constrição das pupilas (miose).",
      "Estimulação da secreção salivar aquosa e da motilidade intestinal.",
      "Aumento da frequência cardíaca (taquicardia), broncodilatação e dilatação pupilar (midríase).",
      "Redução da pressão arterial sistêmica."
    ],
    respostaCorreta: 2,
    explicacao: "O Sistema Nervoso Simpático prepara o animal para situações de emergência ('luta ou fuga'): aumenta os batimentos cardíacos, dilata os brônquios para captar mais oxigênio, dilata as pupilas e redireciona o sangue para os músculos.",
    dica: "Sistema Simpático = Luta ou Fuga (Taquicardia + Broncodilatação + Pupilas dilatadas)."
  },
  {
    id: 36,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "medio",
    pergunta: "Após a ingestão de alimento por um ruminante em repouso no pasto, a divisão PARASSIMPÁTICA predomina. Essa divisão é responsável por:",
    alternativas: [
      "Inibir os movimentos ruminais e a digestão.",
      "Aumentar a pressão arterial e secretar noradrenalina sistêmica.",
      "Aumentar a sudorese e contrair o esfíncter anal.",
      "Promover a digestão, estimular o peristaltismo gastrointestinal e desacelerar a frequência cardíaca (bradicardia)."
    ],
    respostaCorreta: 3,
    explicacao: "O Sistema Nervoso Parassimpático domina em situações de repouso e digestão ('rest and digest'): desacelera a frequência cardíaca e estimula a motilidade e as secreções do trato digestório.",
    dica: "Sistema Parassimpático = Repouso e Digestão (Estimula o Trato Digestório)."
  },
  {
    id: 37,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "dificil",
    pergunta: "Os receptores que respondem à Noradrenalina e Adrenalina nos órgãos efetores autônomos são classificados como:",
    alternativas: [
      "Receptores Nicotínicos.",
      "Receptores Adrenérgicos (Alfa e Beta).",
      "Receptores Muscarínicos $M_1$.",
      "Receptores Purinérgicos $P_2X$."
    ],
    respostaCorreta: 1,
    explicacao: "Os receptores adrenérgicos (subdivididos em $\alpha_1, \alpha_2, \beta_1, \beta_2, \beta_3$) são ativados pelas catecolaminas noradrenalina e adrenalina liberadas pelas fibras simpáticas.",
    dica: "Noradrenalina e Adrenalina ligam-se a Receptores ADRENÉRGICOS ($\alpha$ e $\beta$)."
  },
  {
    id: 38,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "medio",
    pergunta: "Um Arco Reflexo Medular simples (como o reflexo patelar ou de retirada do membro ao pisar num objeto pontiagudo) é composto na sequência por:",
    alternativas: [
      "Receptor $\rightarrow$ Neurônio Sensorial (Aferente) $\rightarrow$ Centro Integrador (Medula) $\rightarrow$ Neurônio Motor (Eferente) $\rightarrow$ Órgão Efetor.",
      "Órgão Efetor $\rightarrow$ Neurônio Motor $\rightarrow$ Cérebro $\rightarrow$ Receptor Sensorial.",
      "Neurônio Motor $\rightarrow$ Bainha de Mielina $\rightarrow$ Astrócito $\rightarrow$ Sangue.",
      "Encéfalo $\rightarrow$ Hipófise $\rightarrow$ Glândula Adrenal $\rightarrow$ Receptor."
    ],
    respostaCorreta: 0,
    explicacao: "O caminho anatômico de um arco reflexo é: 1) Receptor capta o estímulo; 2) Neurônio aferente leva a informação à medula; 3) Centro integrador (sinapse na medula); 4) Neurônio eferente leva o comando; 5) Efetor responde.",
    dica: "Arco Reflexo = Receptor $\rightarrow$ Via Aferente $\rightarrow$ Medula $\rightarrow$ Via Eferente $\rightarrow$ Efetor."
  },
  {
    id: 39,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "dificil",
    pergunta: "O que diferencia a SOMAÇÃO TEMPORAL da SOMAÇÃO ESPACIAL no corpo celular de um neurônio?",
    alternativas: [
      "A somação temporal envolve destruição do axônio; a espacial envolve astrócitos.",
      "A somação temporal só ocorre durante a noite no animal.",
      "A somação temporal resulta de descargas repetidas de um ÚNICO terminal pré-sináptico em rápida sucessão; a espacial resulta de descargas MÚLTIPLAS de vários terminais diferentes simultaneamente.",
      "A somação espacial é exclusiva do músculo cardíaco."
    ],
    respostaCorreta: 2,
    explicacao: "Somação Temporal: impulsos repetidos vindos da MESMA sinapse em curto intervalo de tempo. Somação Espacial: impulsos vindos de VÁRIAS sinapses diferentes atingindo o neurônio ao mesmo tempo.",
    dica: "Somação Temporal = 1 sinapse disparando em alta frequência. Somação Espacial = Várias sinapses disparando juntas."
  },
  {
    id: 40,
    materia: "Neurofisiologia",
    assunto: "Neurofisiologia",
    dificuldade: "facil",
    pergunta: "Assinale a alternativa INCORRETA sobre a fisiologia neuronal:",
    alternativas: [
      "O potencial de ação obedece à lei do 'tudo-ou-nada'.",
      "Axônios de maior diâmetro e mielinizados conduzem o impulso nervoso com maior velocidade.",
      "Nas sinapses químicas, o sinal elétrico passa diretamente sem necessidade de mediadores moleculares.",
      "O neurotransmissor é removido da fenda sináptica por degradação enzimática ou recaptação."
    ],
    respostaCorreta: 2,
    explicacao: "A alternativa C está INCORRETA porque nas sinapses QUÍMICAS há obrigatoriamente a liberação de mediadores moleculares (neurotransmissores). É nas sinapses ELÉTRICAS que o sinal passa diretamente por junções comunicantes.",
    dica: "Sinapse Química exige neurotransmissor; não passa o sinal elétrico direto!"
  },

  // ==========================================
  // MATÉRIA 3: FISIOLOGIA MUSCULAR (20 questões: Q41 a Q60)
  // ==========================================
  {
    id: 41,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "facil",
    pergunta: "Em relação aos três tipos de tecido muscular nos animais domésticos, assinale a caracterização correta do MÚSCULO ESQUELÉTICO:",
    alternativas: [
      "Não estriado e de contração involuntária lentíssima.",
      "Estriado, de controle voluntário e multinucleado com núcleos periféricos.",
      "Estriado, involuntário, com discos intercalares mononucleados.",
      "Presente exclusivamente na parede dos vasos sanguíneos."
    ],
    respostaCorreta: 1,
    explicacao: "O músculo esquelético possui estriações transversais visíveis, células cilíndricas muito longas multinucleadas (núcleos localizados na periferia) e está sob controle consciente/voluntário do sistema nervoso somático.",
    dica: "Músculo Esquelético = Estriado + Voluntário + Multinucleado periférico."
  },
  {
    id: 42,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "facil",
    pergunta: "Histologicamente, a unidade funcional e contrátil da miofibrila do músculo esquelético, compreendida entre duas linhas Z consecutivas, é denominada:",
    alternativas: [
      "Sarcômero.",
      "Sarcolema.",
      "Sarcoplasma.",
      "Tríade."
    ],
    respostaCorreta: 0,
    explicacao: "O sarcômero é a menor unidade contrátil da fibra muscular estriada, delimitado pelas Linhas Z, contendo filamentos finos de actina e espessos de miosina organizados de forma paralela.",
    dica: "Unidade funcional da contração muscular = Sarcômero (entre duas Linhas Z)."
  },
  {
    id: 43,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "medio",
    pergunta: "Os filamentos FINOS do sarcômero são compostos por três proteínas fundamentais. Quais são elas?",
    alternativas: [
      "Miosina, Titina e Nebulina.",
      "Mioglobina, Hemoglobina e Albumina.",
      "Actina, Troponina e Tropomiosina.",
      "Colágeno, Elastina e Fibrilina."
    ],
    respostaCorreta: 2,
    explicacao: "Os filamentos finos são constituídos pela Actina (que possui o sítio de ligação), Tropomiosina (que bloqueia o sítio no repouso) e o complexo da Troponina (que liga o cálcio).",
    dica: "Filamento Fino = Actina + Troponina + Tropomiosina."
  },
  {
    id: 44,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "medio",
    pergunta: "A proteína contrátil que forma os filamentos ESPESSOS do sarcômero e possui uma cabeça com atividade enzimatica de ATPase é a:",
    alternativas: [
      "Actina.",
      "Tropomiosina.",
      "Calmodulina.",
      "Miosina (Miosina II)."
    ],
    respostaCorreta: 3,
    explicacao: "A Miosina forma os filamentos espessos. Suas 'cabeças' possuem sítios de ligação para a actina e capacidade de hidrolisar o ATP (atividade ATPase) para gerar a força de deslizamento.",
    dica: "Filamento Espesso com atividade ATPase = Miosina."
  },
  {
    id: 45,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "medio",
    pergunta: "Qual é o papel fundamental dos íons Cálcio ($Ca^{2+}$) para permitir o início da contração no músculo esquelético?",
    alternativas: [
      "Fornecer fosfato para a síntese direta de glicose.",
      "Ligar-se à Troponina C, deslocando a Tropomiosina e expondo os sítios de ligação da actina para a miosina.",
      "Destruir os sarcômeros para permitir a regeneração.",
      "Bloquear a entrada de acetilcolina na fibra muscular."
    ],
    respostaCorreta: 1,
    explicacao: "No repouso, a tropomiosina cobre os sítios da actina. Quando o $Ca^{2+}$ é liberado no citoplasma, liga-se à Troponina C. Isso muda a conformação do complexo, puxando a tropomiosina e liberando os sítios para a cabeça da miosina se ligar.",
    dica: "Cálcio ($Ca^{2+}$) liga-se à Troponina C $\rightarrow$ Desloca Tropomiosina $\rightarrow$ Libera sítio na Actina."
  },
  {
    id: 46,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "facil",
    pergunta: "Nas fibras musculares esqueléticas, qual organela membranosa funciona como o principal reservatório intracelular de íons Cálcio ($Ca^{2+}$)?",
    alternativas: [
      "Retículo Sarcoplasmático.",
      "Complexo de Golgi.",
      "Lisossomo primário.",
      "Peroxissomo."
    ],
    respostaCorreta: 0,
    explicacao: "O Retículo Sarcoplasmático (retículo endoplasmático liso especializado da fibra muscular) armazena altas concentrações de $Ca^{2+}$ e o libera rapidamente no sarcoplasma durante a estimulação.",
    dica: "Reservatório de Cálcio da fibra muscular = Retículo Sarcoplasmático."
  },
  {
    id: 47,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "medio",
    pergunta: "Os Túbulos T (túbulos transversos) são invaginações da membrana plasmática (sarcolema) da fibra muscular. Sua função essencial é:",
    alternativas: [
      "Armazenar glicogênio e gordura.",
      "Conduzir o potencial de ação rapidamente para o interior da fibra muscular até o retículo sarcoplasmático.",
      "Sintetizar proteínas miofibrilares.",
      "Excretar ácido láctico para fora da fibra."
    ],
    respostaCorreta: 1,
    explicacao: "Os Túbulos T penetram profundamente na fibra muscular, garantindo que a despolarização do potencial de ação alcance simultaneamente todas as miofibrilas e os sacos do retículo sarcoplasmático.",
    dica: "Túbulos T = Levam o potencial de ação para o fundo da fibra muscular."
  },
  {
    id: 48,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "medio",
    pergunta: "Na junção neuromuscular (placa motora), a liberação de Acetilcolina pelo neurônio motor alfa ativa receptores específicos na fibra muscular. Esses receptores são do tipo:",
    alternativas: [
      "Muscarínicos $M_2$.",
      "Adrenérgicos $\beta_1$.",
      "Dopaminérgicos $D_2$.",
      "Nicotínicos ($N_m$)."
    ],
    respostaCorreta: 3,
    explicacao: "Na placa motora do músculo esquelético, os receptores são do tipo Nicotínico ($N_m$). A ligação da Acetilcolina abre canais catiônicos de sódio, despolarizando a placa motora (potencial de placa motora).",
    dica: "Placa Motora Muscular = Receptores NICOTÍNICOS de Acetilcolina."
  },
  {
    id: 49,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "medio",
    pergunta: "De acordo com a Teoria dos Filamentos Deslizantes da contração muscular, o que ocorre com os filamentos e bandas do sarcômero durante a contração?",
    alternativas: [
      "Os filamentos de actina e miosina encurtam de tamanho por desnaturação.",
      "Os filamentos de actina deslizam sobre os de miosina, encurtando os sarcômeros sem alterar o comprimento individual das moléculas de actina e miosina.",
      "As linhas Z se afastam drasticamente umas das outras.",
      "A banda A desaparece completamente enquanto os filamentos de miosina se dobram."
    ],
    respostaCorreta: 1,
    explicacao: "Na contração, os filamentos finos de actina deslizam em direção ao centro do sarcômero sobre os filamentos espessos de miosina. As linhas Z se aproximam e o sarcômero encurta, mas o comprimento das fibras de proteína não muda.",
    dica: "Teoria dos Filamentos Deslizantes = As proteínas deslizam umas sobre as outras; NÃO encurtam de tamanho!"
  },
  {
    id: 50,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "dificil",
    pergunta: "Após a morte de um animal de produção (ex: abate bovino), ocorre o fenômeno do Rigor Mortis (rigidez cadavérica). Fisiologicamente, o rigor mortis se estabelece porque:",
    alternativas: [
      "Ocorre esgotamento de ATP, impedindo que a cabeça da miosina se desligue da actina.",
      "O excesso de ATP faz as fibras musculares se contraírem infinitamente.",
      "Os sarcômeros são completamente destruídos por enzimas bacterianas.",
      "A temperatura corporal do animal cai abaixo de zero grau."
    ],
    respostaCorreta: 0,
    explicacao: "A ligação de uma NOVA molécula de ATP à cabeça da miosina é estritamente necessária para desfazer a ponte cruzada com a actina. Sem ATP após a morte, a miosina fica presa à actina no estado rígido (Rigor Mortis).",
    dica: "Rigor Mortis = Falta de ATP impede o desligamento da Miosina da Actina."
  },
  {
    id: 51,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "medio",
    pergunta: "Quando um cavalo tenta puxar uma carga extremamente pesada sem conseguir movê-la, seu músculo desenvolve tensão mas o comprimento do músculo NÃO se altera. Essa contração é chamada de:",
    alternativas: [
      "Contração Isotônica Concêntrica.",
      "Contração Isotônica Excêntrica.",
      "Contração Isométrica.",
      "Contração Peristáltica."
    ],
    respostaCorreta: 2,
    explicacao: "Na contração ISOMÉTRICA (Iso = igual, métrica = medida), o músculo gera força/tensão interna, mas o comprimento do músculo permanece constante e não há movimento articular.",
    dica: "Contração Isométrica = Desenvolve tensão SEM alterar o comprimento do músculo."
  },
  {
    id: 52,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "medio",
    pergunta: "Quando um animal caminha e flexiona o membro, o músculo se encurta mantendo a tensão constante para mover a articulação. Esse tipo de contração é classificado como:",
    alternativas: [
      "Contração Isométrica estática.",
      "Contração Tetânica involuntária.",
      "Contração Rigorosa de repouso.",
      "Contração Isotônica (Concêntrica)."
    ],
    respostaCorreta: 3,
    explicacao: "Na contração ISOTÔNICA (Iso = igual, tônica = tensão), a tensão muscular permanece constante enquanto o músculo altera seu comprimento (encurta na concêntrica), realizando trabalho mecânico.",
    dica: "Contração Isotônica = Músculo encurta e gera movimento."
  },
  {
    id: 53,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "dificil",
    pergunta: "O fenômeno da SOMAÇÃO DE FREQUÊNCIAS, no qual estímulos elétricos repetidos em alta frequência fazem o músculo atingir uma contração máxima e sustentada sem relaxamento intermédio, é denominado:",
    alternativas: [
      "Fadiga metabólica.",
      "Tétano Muscular (ou contração tetânica).",
      "Tônus basal nulo.",
      "Hipertrofia fisiológica."
    ],
    respostaCorreta: 1,
    explicacao: "Se os potenciais de ação estimulam a fibra muscular repetidamente antes de haver relaxamento, os íons $Ca^{2+}$ continuam acumulados no sarcoplasma, fundindo os abalos musculares em uma contração tetânica sustentada.",
    dica: "Estímulos frequentes sem relaxamento = Tétano Muscular."
  },
  {
    id: 54,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "medio",
    pergunta: "Mesmo quando o animal está em repouso, seus músculos esqueléticos mantêm um estado constante de contração parcial e involuntária que garante a postura. Esse estado é chamado de:",
    alternativas: [
      "Tônus Muscular.",
      "Fadiga de trabalho.",
      "Paralisia flácida.",
      "Choque espinhal."
    ],
    respostaCorreta: 0,
    explicacao: "O tônus muscular é mantido por impulsos involuntários oriundos da medula espinhal que ativam alternadamente pequenas unidades motoras, mantendo os músculos firmes para sustentação postural.",
    dica: "Tônus Muscular = Contração parcial involuntária constante para manter a postura."
  },
  {
    id: 55,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "dificil",
    pergunta: "Diferente do músculo esquelético, o MÚSCULO LISO (presente no trato gastrointestinal e vasos sanguíneos) não possui troponina. Como o $Ca^{2+}$ desencadeia a contração no músculo liso?",
    alternativas: [
      "Ligando-se diretamente à queratina.",
      "O $Ca^{2+}$ não participa da contração do músculo liso.",
      "Ligando-se à proteína Calmodulina, que ativa a Enzima Cinase da Cadeia Leve da Miosina (MLCK).",
      "Promovendo a fusão dos discos intercalares."
    ],
    respostaCorreta: 2,
    explicacao: "No músculo liso, o $Ca^{2+}$ se liga à Calmodulina. O complexo $Ca^{2+}$-Calmodulina ativa a enzima MLCK, que fosforila a cabeça da miosina, permitindo sua ligação à actina.",
    dica: "Músculo Liso = Cálcio liga-se à CALMODULINA (ativa MLCK)."
  },
  {
    id: 56,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "dificil",
    pergunta: "O MÚSCULO CARDÍACO possui junções comunicantes (gap junctions) localizadas em estruturas especializadas chamadas Discos Intercalares. Qual é a importância fisiológica dessas junções?",
    alternativas: [
      "Permitir a passagem rápida de íons entre as células, fazendo o miocárdio funcionar como um sincício elétrico funcional.",
      "Impedir a entrada de sangue nas câmaras cardíacas.",
      "Servir como reserva de glicogênio para os linfócitos.",
      "Inibir a contração do ventrículo esquerdo."
    ],
    respostaCorreta: 0,
    explicacao: "As junções comunicantes dos discos intercalares oferecem baixa resistência elétrica, permitindo que o potencial de ação se espalhe instantaneamente por todas as células cardíacas, fazendo o coração contrair como um sincício.",
    dica: "Discos Intercalares com Gap Junctions = Permitem contração coordenada do Miocárdio (Sincício)."
  },
  {
    id: 57,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "medio",
    pergunta: "Durante os primeiros segundos de um esforço físico intenso e repentino em um cavalo de corrida, qual é a fonte imediata mais rápida para regenerar o ATP nos músculos?",
    alternativas: [
      "Beta-oxidação de ácidos graxos de cadeia longa.",
      "Fosfocreatina (Fosfato de Creatina via Creatina Cinase).",
      "Gliconeogênese hepática.",
      "Ciclo da ureia renal."
    ],
    respostaCorreta: 1,
    explicacao: "A fosfocreatina é a reserva energética imediata das fibras musculares. Sua transferência de fosfato para o ADP via enzima Creatina Cinase (CK) regenera o ATP em milissegundos sem necessitar de oxigênio.",
    dica: "Regeneração de ATP ultra-rápida (primeiros segundos) = Fosfocreatina."
  },
  {
    id: 58,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "medio",
    pergunta: "A fadiga muscular após trabalho prolongado em animais de tração é causada por diversos fatores. Qual das alternativas apresenta um fator determinante para essa fadiga?",
    alternativas: [
      "Acúmulo de íons $H^+$ (acidose metabólica intracelular), depleção de glicogênio e alteração no manuseio de $Ca^{2+}$.",
      "Excesso de oxigênio armazenado nas mitocôndrias.",
      "Aumento descontrolado na síntese de fibras colágenas.",
      "Elevação extrema dos níveis de potássio na saliva."
    ],
    respostaCorreta: 0,
    explicacao: "A fadiga muscular envolve o acúmulo de metabólitos (como íons $H^+$ provenientes do lactato que reduzem o pH citoplasmático e inibem as enzimas contráteis), depleção de estoques de glicogênio e falhas no acoplamento excitação-contração.",
    dica: "Fadiga Muscular = Acúmulo de $H^+$, queda de pH e esgotamento de glicogênio."
  },
  {
    id: 59,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "dificil",
    pergunta: "O conceito de UNIDADE MOTORA em Fisiologia Muscular é definido como:",
    alternativas: [
      "Todas as artérias que irrigam um determinado grupo muscular.",
      "Um sarcômero individual isolado no centro da fibra.",
      "Um único motoneurônio alfa e todas as fibras musculares esqueléticas que ele inerva.",
      "A junção entre a cartilagem e o tendão muscular."
    ],
    respostaCorreta: 2,
    explicacao: "Uma Unidade Motora consiste em um neurônio motor e o conjunto de fibras musculares por ele inervadas. Músculos de controle fino (ex: oculares) possuem poucos fios por neurônio; músculos grandes de força possuem centenas.",
    dica: "Unidade Motora = 1 Neurônio Motor Alfa + todas as fibras por ele inervadas."
  },
  {
    id: 60,
    materia: "Fisiologia Muscular",
    assunto: "Fisiologia Muscular",
    dificuldade: "facil",
    pergunta: "Assinale a alternativa INCORRETA em relação ao acoplamento excitação-contração no músculo esquelético:",
    alternativas: [
      "O potencial de ação se propaga pelos Túbulos T.",
      "O íon Cálcio é liberado do retículo sarcoplasmático para o citoplasma.",
      "O relaxamento muscular ocorre quando o Cálcio é bombeado de volta para o retículo sarcoplasmático com gasto de ATP.",
      "A contração muscular independe de ATP, utilizando apenas glicose pura sem fosforilação."
    ],
    respostaCorreta: 3,
    explicacao: "A alternativa D está INCORRETA. A contração muscular DEPENDEM criticamente de ATP tanto para a movimentação das cabeças de miosina quanto para a reabsorção ativa do cálcio pelo retículo sarcoplasmático (bomba SERCA).",
    dica: "Contração e relaxamento exigem ATP!"
  }
];

window.QUESTIONS_DATABASE = QUESTIONS_DATABASE;
