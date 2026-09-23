import { UnitTypology, Amenity, NearbyPoint, Testimonial, FaqItem } from '../types/real-estate';

export const FORM_INTEREST_URL = 'https://forms.gle/tVCVZ6NyEKQwbWRX6';

export const HERO_IMAGE = '/src/assets/images/hero_luxury_apartments_1790202018279.jpg';
export const LIVING_IMAGE = '/src/assets/images/interior_apartment_living_1790202029715.jpg';
export const ROOFTOP_IMAGE = '/src/assets/images/rooftop_pool_amenities_1790202038979.jpg';
export const MASTER_SUITE_IMAGE = '/src/assets/images/master_suite_interior_1790202048288.jpg';

export const UNIT_TYPOLOGIES: UnitTypology[] = [
  {
    id: 'unit-85',
    name: 'Concept Residence',
    area: 85,
    bedrooms: 2,
    suites: 2,
    parkingSpots: 2,
    startingPrice: 'A partir de R$ 890.000',
    description: 'Planta inteligente com aproveitamento máximo de espaço, living integrado à varanda gourmet e suíte master com closet generoso.',
    features: [
      '2 suítes plenas com piso vinílico acústico',
      'Varanda gourmet com churrasqueira a carvão embutida',
      'Lavabo social independente',
      'Infraestrutura completa para ar-condicionado multi-split',
      '2 vagas cobertas e demarcadas com ponto para carro elétrico'
    ],
    floorPlanImage: '2-suites',
    hotspots: [
      { title: 'Living & Jantar', description: 'Ambientes integrados com vista panorâmica e caixilhos piso-teto', x: 45, y: 35 },
      { title: 'Varanda Gourmet', description: 'Bancada em granito escovado com churrasqueira e ponto de chopeira', x: 20, y: 40 },
      { title: 'Suíte Principal', description: 'Espaço para cama king size com persianas 100% blackout elétricas', x: 75, y: 30 },
      { title: 'Cozinha Aberta', description: 'Conceito aberto com ilha central e cuba dupla gourmet', x: 45, y: 65 }
    ]
  },
  {
    id: 'unit-142',
    name: 'Horizon Panorama',
    area: 142,
    bedrooms: 3,
    suites: 3,
    parkingSpots: 3,
    startingPrice: 'A partir de R$ 1.480.000',
    description: 'A sofisticação do pé-direito ampliado com varanda de 11 metros de extensão, elevador privativo com biometria e suíte master com banheira de imersão.',
    features: [
      '3 suítes plenas (master com amplo closet walk-in)',
      'Elevador privativo com hall exclusivo e fechadura facial',
      'Varanda gourmet panorâmica integrada à sala de jantar',
      'Piso em porcelanato 120x120cm nas áreas sociais',
      '3 vagas de garagem fixas + depósito privativo no subsolo'
    ],
    floorPlanImage: '3-suites',
    hotspots: [
      { title: 'Hall Privativo', description: 'Acesso biométrico exclusivo direto na unidade', x: 15, y: 25 },
      { title: 'Varanda de 11m', description: 'Guarda-corpo panorâmico em vidro laminado duplo de alta resistência', x: 25, y: 60 },
      { title: 'Living 3 Ambientes', description: 'Espaço generoso para home theater, estar e jantar para 10 pessoas', x: 50, y: 45 },
      { title: 'Suíte Master + Spa', description: 'Banheiro duplo com pia Sr. e Sra. e banheira de imersão freestanding', x: 80, y: 60 }
    ]
  },
  {
    id: 'unit-195',
    name: 'Grand Signature',
    area: 195,
    bedrooms: 4,
    suites: 4,
    parkingSpots: 4,
    startingPrice: 'A partir de R$ 2.190.000',
    description: 'Exclusividade para famílias exigentes: 4 suítes, circulação íntima isolada, dependência completa de serviço e vista definitiva para o parque.',
    features: [
      '4 suítes completas com tratamento acústico de última geração',
      'Varanda com fechamento articulado de vidro premium',
      'Cozinha com despensa e entrada de serviço independente',
      'Pé-direito livre de 2,90m com gesso rebaixado em todo o imóvel',
      '4 vagas amplas de garagem com box de recarga elétrica individual'
    ],
    floorPlanImage: '4-suites',
    hotspots: [
      { title: 'Living Duplo', description: 'Mais de 55m² de área social contínua com piso em madeira maciça', x: 50, y: 35 },
      { title: 'Cozinha de Chef', description: 'Espaço para torre quente, fogão ilha e copa integrada', x: 30, y: 70 },
      { title: 'Suíte Master com Closet Duplo', description: 'Dormitório de 28m² com closet duplo planejado', x: 80, y: 40 },
      { title: 'Espaço Wine Lounge', description: 'Nicho projetado para adega climatizada de até 120 garrafas', x: 60, y: 70 }
    ]
  },
  {
    id: 'unit-238',
    name: 'Penthouse Duplex',
    area: 238,
    bedrooms: 4,
    suites: 4,
    parkingSpots: 4,
    startingPrice: 'A partir de R$ 2.950.000',
    description: 'O ápice do viver contemporâneo: cobertura duplex com piscina privativa aquecida com borda infinita, solário privativo e lareira ao ar livre.',
    features: [
      'Piscina privativa aquecida com cascata e deck de madeira cumaru',
      'Espaço gourmet externo com churrasqueira e forno de pizza',
      'Living com pé-direito duplo de 5,80 metros',
      'Master suite no pavimento superior com terraço contemplativo exclusivo',
      '4 vagas demarcadas com carregador ultra-rápido incluso'
    ],
    floorPlanImage: 'penthouse',
    hotspots: [
      { title: 'Terraço Panorâmico', description: 'Piscina privativa com deck e vista em 360° para o pôr do sol', x: 30, y: 25 },
      { title: 'Pé-Direito Duplo', description: 'Amplitude visual dramática com escada escultural em balanço', x: 50, y: 55 },
      { title: 'Lounge Lareira', description: 'Firepit a gás ao ar livre para noites memoráveis', x: 20, y: 65 },
      { title: 'Suíte Penthouse', description: 'Isolada no andar superior com privacidade absoluta', x: 75, y: 75 }
    ]
  }
];

export const AMENITIES_LIST: Amenity[] = [
  {
    id: 'am-1',
    category: 'wellness',
    title: 'Rooftop Infinity Pool & Solarium',
    description: 'Piscina aquecida de 25m com borda infinita debruçada sobre o horizonte no 28º andar, com espreguiçadeiras molhadas.',
    highlight: '28º Andar com vista 360°'
  },
  {
    id: 'am-2',
    category: 'wellness',
    title: 'Fitness Center High-Tech',
    description: 'Academia de 180m² equipada com esteiras e pesos profissionais Life Fitness®, área de cross training e sala de yoga/pilates.',
    highlight: 'Equipamentos Life Fitness®'
  },
  {
    id: 'am-3',
    category: 'wellness',
    title: 'Spa & Sauna Relax',
    description: 'Ambiente sensorial completo com sauna seca em cedro, sauna úmida com cromoterapia e sala de massagem privativa.',
    highlight: 'Sauna seca e úmida'
  },
  {
    id: 'am-4',
    category: 'social',
    title: 'Espaço Gourmet & Wine Bar',
    description: 'Salão refinado com cozinha de apoio profissional, adega climatizada privativa e capacidade para 40 convidados sentados.',
    highlight: 'Adega climatizada exclusiva'
  },
  {
    id: 'am-5',
    category: 'work',
    title: 'Coworking & Boardroom',
    description: 'Estrutura corporativa com internet de alta velocidade cabeada, 4 cabines acústicas individuais para chamadas e sala de reunião com telão.',
    highlight: 'Cabines acústicas de alta performance'
  },
  {
    id: 'am-6',
    category: 'family',
    title: 'Pet Place & Pet Care',
    description: 'Área externa gramada e cercada para passeio com circuito agility e sala com banho e tosa para cuidar do seu pet no condomínio.',
    highlight: 'Espaço pet care equipado'
  },
  {
    id: 'am-7',
    category: 'family',
    title: 'Brinquedoteca & Playground Lúdico',
    description: 'Ambientes seguros e divertidos para crianças de todas as idades, com piso emborrachado e brinquedos de madeira sustentável.',
    highlight: 'Piso emborrachado antialérgico'
  },
  {
    id: 'am-8',
    category: 'social',
    title: 'Lounge Bar no Terraço',
    description: 'Ponto de encontro sofisticado ao ar livre para assistir ao entardecer com lareiras ecológicas integradas.',
    highlight: 'Firepits e vista poente'
  }
];

export const NEARBY_POINTS: NearbyPoint[] = [
  {
    category: 'nature',
    name: 'Parque das Águas & Bosque Central',
    distance: '350 metros (4 min a pé)',
    highlight: 'Pista de cooper, lagos e área de preservação ambiental'
  },
  {
    category: 'education',
    name: 'Colégio Bilíngue Maple Bear / Saint Paul',
    distance: '900 metros (3 min de carro)',
    highlight: 'Educação internacional de referência do infantil ao médio'
  },
  {
    category: 'dining',
    name: 'Polo Gastronômico Jardins',
    distance: '500 metros (6 min a pé)',
    highlight: 'Restaurantes premiados Michelin, cafés artesanais e bistrôs'
  },
  {
    category: 'shopping',
    name: 'Shopping Iguatemi / Pátio Batel',
    distance: '1,8 km (5 min de carro)',
    highlight: 'Lojas internacionais, cinema VIP e empório gourmet'
  },
  {
    category: 'health',
    name: 'Hospital e Maternidade Santa Joana',
    distance: '1,2 km (4 min de carro)',
    highlight: 'Centro médico de excelência e pronto atendimento 24h'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Dr. Roberto Vasconcellos',
    role: 'Médico Cirurgião e Investidor',
    unit: 'Comprador Unidade 195m²',
    quote: 'O que me conquistou foi o isolamento acústico impecável e a inteligência da planta. Como cirurgião, preciso de silêncio e conforto. É o melhor empreendimento que comprei nos últimos 15 anos.',
    outcome: 'Valorização de 31% desde o lançamento da fase 1'
  },
  {
    name: 'Mariana Duarte Prado',
    role: 'Arquiteta e Sócia do Duo Studio',
    unit: 'Compradora Unidade 142m²',
    quote: 'A atenção aos detalhes de acabamento, como o esquadro dos caixilhos de vidro e a integração da varanda gourmet, é exemplar. Projeto com alma contemporânea que não vai envelhecer.',
    outcome: 'Escolha número 1 para moradia com a família'
  },
  {
    name: 'Lucas & Beatriz Meirelles',
    role: 'Empresários do Setor de Tecnologia',
    unit: 'Compradores Penthouse Duplex',
    quote: 'A estrutura de coworking com cabines acústicas e o rooftop com vista para a cidade transformaram nossa rotina. O atendimento da construtora durante todo o processo foi de extrema confiança.',
    outcome: 'Contrato fechado com tabela direta facilitada'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Qual é a previsão de entrega e fase atual da obra?',
    answer: 'A entrega das chaves está prevista para Dezembro de 2027. O empreendimento já possui alvará de construção aprovado, memorial de incorporação registrado sob o R.I. nº 142.890 e está com obras aceleradas e cronograma auditado pela Caixa Econômica Federal.'
  },
  {
    question: 'Quais são as condições de pagamento e financiamento?',
    answer: 'Oferecemos plano facilitado direto com a incorporadora durante o período de obras, com entrada a partir de 15%, parcelas mensais, balões semestrais com correção apenas pelo INCC (sem juros adicionais). O saldo devedor na entrega das chaves pode ser quitado à vista ou financiado em até 420 meses por qualquer banco de sua preferência.'
  },
  {
    question: 'Posso personalizar a planta e os acabamentos do meu apartamento?',
    answer: 'Sim! Através do nosso exclusivo programa "Lumina Custom", você tem a assessoria da nossa equipe de engenharia para escolher opções de layout (como ampliação da sala eliminando um dormitório, kit de automação inteligente e opções de revestimentos) antes do fechamento da alvenaria, sem custos de retrabalho.'
  },
  {
    question: 'As vagas de garagem são demarcadas? Há suporte para veículos elétricos?',
    answer: 'Todas as vagas do Lumina Horizon são definitivas, livres e demarcadas em escritura, sem sorteios periódicos. Além disso, cada apartamento conta com infraestrutura individual de tubulação para instalação de carregadores elétricos inteligentes com medição individualizada na própria fatura da unidade.'
  },
  {
    question: 'Como faço para receber a tabela de preços completa e agendar uma visita ao decorado?',
    answer: 'Basta clicar no botão "Tenho Interesse" nesta página para acessar o formulário rápido de contato oficial. Nossa equipe de consultoria especializada entrará em contato em minutos pelo WhatsApp ou ligação com o book digital completo, plantas cotadas e condições da tabela de lançamento.'
  }
];
