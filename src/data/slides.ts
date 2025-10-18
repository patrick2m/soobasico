export type Slide =
  | { kind: 'text'; id: string; content: string }
  | { kind: 'image'; id: string; src: string; alt?: string }

// export const slides: Slide[] = [
// { kind: 'text', id: 't1', content: 'Há 1 mês começou algo incrível 💖' },
// { kind: 'image', id: 'i1', src: '/assets/foto1.jpg', alt: 'Nós dois' },
// { kind: 'text', id: 't2', content: 'Cada momento contigo é único ✨' },
// { kind: 'image', id: 'i2', src: '/assets/foto2.jpg', alt: 'Sorriso' },
// { kind: 'text', id: 't3', content: 'Te amo mais a cada dia ❤️' },
// { kind: 'image', id: 'i3', src: '/assets/foto3.jpg', alt: 'Abraço' },
// { kind: 'text', id: 't4', content: 'Obrigado por ser você 💫' }
// ]

function daysSince(dateString: string): number {
  const start = new Date(dateString);
  const now = new Date();
  const diffTime = now.getTime() - start.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

const conheciEm = "2025-03-01"; // data que você conheceu a Julia
const diasJuntos = daysSince(conheciEm);

const pedidoDeNamoroEm = "2025-09-18"; // data que você conheceu a Julia
const diasDeNamoro = daysSince(pedidoDeNamoroEm);

export const slides: Slide[] = [
  { kind: 'text', id: 't1', content: 'É... eu sou nerd, acho que você já sabe disso.' },
  { kind: 'text', id: 't2', content: `Mas sabia que eu gosto de contar histórias?` },
  { kind: 'text', id: 't3', content: `Opa, uma dica, se clicar ali no "Tocar", fica melhor o passeio 😊` },
  { kind: 'text', id: 't4', content: `Essa é a hora que se estiver do meu lado deve me olhar assim...` },
  { kind: 'image', id: 'i1', src: `${import.meta.env.BASE_URL}assets/juliameolhando.jpg`, alt: 'Júlia me olhando' },
  { kind: 'text', id: 't5', content: `Mas voltando...` },
  { kind: 'text', id: 't6', content: `Tudo começou em 04 de janeiro de 2025...` },
  { kind: 'image', id: 'i2', src: `${import.meta.env.BASE_URL}assets/juliaspartaninicio.png`, alt: 'Começo do time sub21' },
  { kind: 'text', id: 't8', content: 'Uma menina esquisitinha de cabelo azul apareceu.' },
  { kind: 'text', id: 't9', content: 'Mas... minhas férias, fui buscar lá fora o sentido de levantar todo dia da cama.' },
  { kind: 'text', id: 't12', content: 'Mas voltando da viagem, no primeiro vôlei, o tal do carnavôlei, a esquisitinha estava lá, comendo à beça.' },
  { kind: 'text', id: 't13', content: `O primeiro contato, ${diasJuntos} dia${diasJuntos !== 1 ? 's' : ''} atrás.` },
  { kind: 'text', id: 't14', content: 'E a partir dali ela estava em tudo, mesmo sem querer, sem saber...' },
  { kind: 'text', id: 't15', content: 'Estava na minha primeira vitória num time, na LIVERJ.' },
  { kind: 'image', id: 'i3', src: `${import.meta.env.BASE_URL}assets/vsvitoria.png`, alt: 'Começo do time sub21' },
  { kind: 'text', id: 't16', content: 'Até que ela começou a estar por querer estar.' },
  { kind: 'text', id: 't17', content: 'E de repente eu tive o melhor passeio de moto que eu podia ter, no mesmo lugar que sempre passo...' },
  { kind: 'image', id: 'i3', src: `${import.meta.env.BASE_URL}assets/passeionapraia.jpg`, alt: 'Começo do time sub21' },
  { kind: 'text', id: 't18', content: 'Um dia que mudou minha vida, de tantos jeitos que não sei dizer.' },
  { kind: 'text', id: 't19', content: 'Que fez, dia após dia, a vida fazer mais sentido, a vida ser colorida, com mais de 72 cores de lápis da Faber-Castell.' },
  { kind: 'text', id: 't20', content: 'E agora estava aqui sem saber, na minha mente, todo dia, acordar e buscar ela, saber dela.' },
  { kind: 'text', id: 't21', content: 'Que fez eu querer me cuidar pra poder cuidar melhor de alguém que me faz bem, por mais tempo.' },
  { kind: 'text', id: 't22', content: 'Por um sorriso...' },
  { kind: 'image', id: 'i4', src: `${import.meta.env.BASE_URL}assets/sorrisojulia.jpg`, alt: 'sorriso na praia' },
  { kind: 'text', id: 't23', content: 'Que me tirou de um lugar onde eu achava que nunca iria sair, já acostumado.' },
  { kind: 'text', id: 't24', content: 'Quem iria aturar isso???' },
  { kind: 'image', id: 'i5', src: `${import.meta.env.BASE_URL}assets/eutirandofotodearanha.jpg`, alt: 'Patrick tirando foto de aranha' },
  { kind: 'text', id: 't25', content: 'Cara esquisito' },
  { kind: 'text', id: 't26', content: 'Ela...' },
  { kind: 'text', id: 't27', content: 'É, ela, fazendo só o básico.' },
  { kind: 'text', id: 't28', content: 'Em meio a tantos problemas, devido a questões sociais, a questões morais.' },
  { kind: 'text', id: 't29', content: 'Estávamos lá, nós dois, fazendo coisas juntos, por ser legal, agradável, ser leve.' },
  { kind: 'image', id: 'i6', src: `${import.meta.env.BASE_URL}assets/quintadaboavista.jpg`, alt: 'Passeio na quinta da boa vista' },
  { kind: 'text', id: 't30', content: 'Um passeio num parque se transformando num lugar de brincadeiras, inocentes, divertidas.' },
  { kind: 'image', id: 'i7', src: `${import.meta.env.BASE_URL}assets/novaamerica.jpg`, alt: 'Passeio no shopping' },
  { kind: 'text', id: 't31', content: 'Um passeio no shopping, um simples dar voltas, andando, sendo tão legal, por estar juntos, fazendo nada, rindo do nada.' },
  { kind: 'text', id: 't32', content: 'E de repente é tão bom, é tão bom estar com ela... ah cara.' },
  { kind: 'image', id: 'i8', src: `${import.meta.env.BASE_URL}assets/lancheaposjogopaugrande.jpg`, alt: 'Lanche pro velox' },
  { kind: 'text', id: 't33', content: 'Como se não precisássemos de mais nada.' },
  { kind: 'text', id: 't34', content: 'Por estar comigo, vai em qualquer lugar.' },
  { kind: 'image', id: 'i9', src: `${import.meta.env.BASE_URL}assets/capacetenorj.jpg`, alt: 'Mochilinha na cidade' },
  { kind: 'text', id: 't35', content: 'Minha mochilinha, seja na cidade.' },
  { kind: 'image', id: 'i10', src: `${import.meta.env.BASE_URL}assets/viagemmagecapacete.jpg`, alt: 'Mochilinha na estrada' },
  { kind: 'text', id: 't36', content: 'Seja na estrada.' },
  { kind: 'text', id: 't37', content: 'Lá vai ela, com o popô doendo, mas vai, pra me ver, pra estar comigo.' },
  { kind: 'text', id: 't38', content: 'E eu não sei nem como reagir, não sei como retribuir, não sei ser amado assim.' },
  { kind: 'text', id: 't39', content: 'Principalmente por questões sociais ser chato simplesmente gritar pro mundo inteiro como essa mulher é maravilhosa, todo dia.' },
  { kind: 'text', id: 't40', content: 'Então eu faço do jeito que eu posso sabe, eu cuido como eu posso, eu dou carinho, dou colo, dou conselho.' },
  { kind: 'text', id: 't41', content: 'Ela é minha melhor amiga.' },
  { kind: 'text', id: 't42', content: 'Pros lanchinhos pós vôleis, com fofoca.' },
  { kind: 'image', id: 'i11', src: `${import.meta.env.BASE_URL}assets/comendofomezero.jpg`, alt: 'Fomezero' },
  { kind: 'text', id: 't43', content: 'A primeira que me levou pra sair.' },
  { kind: 'image', id: 'i12', src: `${import.meta.env.BASE_URL}assets/acai.jpg`, alt: 'Açaí' },
  { kind: 'text', id: 't44', content: 'Então como que não tenta fazer essa menina feliz?' },
  { kind: 'text', id: 't45', content: 'Seja cuidando dela levando-a à terapia pra aprender a se cuidar.' },
  { kind: 'text', id: 't46', content: 'E realizar os sonhos dela.' },
  { kind: 'text', id: 't47', content: 'Dela de 9 anos...' },
  { kind: 'image', id: 'i13', src: `${import.meta.env.BASE_URL}assets/boloarcoiris.jpg`, alt: 'Bolo Arco-íris' },
  { kind: 'text', id: 't48', content: 'Dela de 12 anos...' },
  { kind: 'image', id: 'i14', src: `${import.meta.env.BASE_URL}assets/juliacomgato.jpg`, alt: 'Júlia com gato' },
  { kind: 'text', id: 't49', content: 'Dela de hoje pra sempre' },
  { kind: 'text', id: 't50', content: 'É fazer o básico, por esse sorriso' },
  { kind: 'image', id: 'i15', src: `${import.meta.env.BASE_URL}assets/juliasorrindonoshopping.jpg`, alt: 'Júlia sorrindo no shopping' },
  { kind: 'text', id: 't51', content: 'Pra ter isso aqui, pra sempre' },
  { kind: 'image', id: 'i16', src: `${import.meta.env.BASE_URL}assets/maosdadas.jpg`, alt: 'Mãos dadas' },
  { kind: 'text', id: 't52', content: 'Alguém de confiança, alguém que não tem maldade, que vai te proteger, mesmo de longe.' },
  { kind: 'text', id: 't53', content: 'Alguém que quer seu bem, independente de qualquer coisa.' },
  { kind: 'image', id: 'i17', src: `${import.meta.env.BASE_URL}assets/abracadosnobk.jpg`, alt: 'Abraço no BK' },
  { kind: 'text', id: 't54', content: 'Que ama esse abraço, esse colo, essa linguinha pra fora, esses olhinhos, tudo isso.' },
  { kind: 'text', id: 't55', content: 'Mas que se você realmente sumir hoje (18/10/2025), às 15 horas, ou outro dia e isso for o melhor pra você, tá tudo bem.' },
  { kind: 'text', id: 't56', content: 'Se você continuar se cuidando, tá tudo bem, é o que importa afinal, desde o início.' },
  { kind: 'text', id: 't57', content: 'É o motivo da pulseira, é você saber que não precisa ter gente ruim perto, que você basta pra si.' },
  { kind: 'text', id: 't58', content: 'É o motivo da urgência de cortar a aproximação de Felipe no plaza, não sabendo lidar com você.' },
  { kind: 'text', id: 't59', content: 'Da carona tirando você de Daniel, de todo desvio de rota, de toda furada de sinal, de toda corrida atrás de ti.' },
  { kind: 'text', id: 't60', content: 'É porque te amo.' },
  { kind: 'text', id: 't61', content: 'O suficiente pra entender que não preciso estar aqui recebendo o que entrego, pra estar bem.' },
  { kind: 'text', id: 't62', content: 'Como sempre foi, aqui as coisas são leves, só faz sentido ficar se puder ir a qualquer momento.' },
  { kind: 'text', id: 't63', content: 'E se não foi embora e quiser ficar, ótimo, meu gosto por inhame não foi tão ruim assim.' },
  { kind: 'text', id: 't64', content: 'Não temos um pedido oficial, não temos algo concreto que somos, mas hoje faz 1 mês desse dia aí.' },
  { kind: 'image', id: 'i18', src: `${import.meta.env.BASE_URL}assets/juliasendopedidaemnamoro.jpg`, alt: 'Júlia no Oishi' },
  { kind: 'text', id: 't65', content: 'Que você se pediu em namoro por mim 😅, mais um pedido de namoro.' },
  { kind: 'text', id: 't66', content: 'Um dia que resolvemos marcar como sendo nosso, 18/09/2025.' },
  { kind: 'text', id: 't67', content: `Hoje faz${diasDeNamoro !== 1 ? 'em' : ''} ${diasDeNamoro} dia${diasDeNamoro !== 1 ? 's' : ''} que posso dizer que te namoro ❤️ entre nós, pelo menos.` },
  { kind: 'text', id: 't68', content: 'E espero que esse contador nunca pare, pois é muito bom estar aqui.' },
  { kind: 'text', id: 't69', content: 'Obrigado por fazer o básico.' },
  { kind: 'text', id: 't70', content: 'Que só você fez até hoje.' },
  { kind: 'text', id: 't71', content: 'Que só você faz.' },
  { kind: 'text', id: 't72', content: 'Só.' },
  { kind: 'text', id: 't73', content: 'Você.' },
  { kind: 'image', id: 'i19', src: `${import.meta.env.BASE_URL}assets/fimcinema.jpg`, alt: 'Júlia no Oishi' },
  { kind: 'text', id: 't73', content: 'Fim.' },

]