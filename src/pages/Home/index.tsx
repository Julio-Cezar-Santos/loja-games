import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo de ação e aventura desenvolvido pela Capcom.',
    image: resident,
    infos: ['10%', 'R$ 99,90'],
    system: 'PS5',
    title: 'Resident Evil 4 Remake'
  },
  {
    id: 2,
    category: 'Aventura',
    description: 'Jogo de aventura épica',
    image: zelda,
    infos: ['5%', 'R$ 199,90'],
    system: 'Nintendo Switch',
    title: ' The Legend of Zelda: Tears of the Kingdom'
  },
  {
    id: 3,
    category: 'RPG',
    description: 'Diablo é um jogo de RPG de ação sombrio.',
    image: diablo,
    infos: ['20%', 'R$ 149,90'],
    system: 'PC',
    title: 'Diablo IV'
  },
  {
    id: 4,
    category: 'Ação',
    description: 'Star Wars é um jogo de ação no universo Star Wars.',
    image: starWars,
    infos: ['15%', 'R$ 129,90'],
    system: 'Xbox',
    title: 'Star Wars: Jedi Survivor'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'Prepare-se para uma nova aventura em Resident Evil!',
    system: 'PS5',
    title: 'Resident Evil 4 Remake',
    image: resident,
    infos: ['20/07/2024']
  },
  {
    id: 6,
    category: 'Aventura',
    description: 'A continuação épica de Zelda está chegando!',
    system: 'Nintendo Switch',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    image: zelda,
    infos: ['15/08/2024']
  },
  {
    id: 7,
    category: 'RPG',
    description: 'O universo sombrio de Diablo retorna em breve.',
    system: 'PC',
    title: 'Diablo IV',
    image: diablo,
    infos: ['01/09/2024']
  },
  {
    id: 8,
    category: 'Ação',
    description: 'Nova jornada no universo Star Wars está a caminho!',
    system: 'Xbox',
    title: 'Star Wars: Jedi Survivor',
    image: starWars,
    infos: ['10/10/2024']
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em Breve" background="black" />
  </>
)

export default Home
