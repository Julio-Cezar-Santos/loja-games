import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'

const Product = () => {
  const { id } = useParams()
  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto,
          ambientado no universo de Harry Potter. Os jogadores podem explorar
          Hogwarts e seus arredores, aprender feitiços, criar poções e enfrentar
          criaturas mágicas. O jogo se passa no final do século XIX, muito antes
          dos eventos dos livros, permitindo uma nova perspectiva sobre o mundo
          mágico. Os jogadores assumem o papel de um estudante que descobre ter
          a capacidade de manipular magia antiga, o que os leva a uma jornada
          para desvendar mistérios, fazer aliados e enfrentar forças sombrias
          que ameaçam o mundo mágico. Com uma rica narrativa, personalização de
          personagem e um vasto mundo para explorar, Hogwarts Legacy oferece uma
          experiência única para os fãs do universo de Harry Potter e
          entusiastas de RPGs. É um jogo que combina aventura, magia e
          exploração, permitindo que os jogadores vivenciem a magia de uma forma
          única e envolvente.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataformas:</b> PlayStation 5, Xbox Series X/S, PC, Nintendo
          Switch <br />
          <b>Desenvolvedora:</b> Portkey Games <br />
          <b>Publicadora:</b> Warner Bros. Games <br />
          <b>Idiomas:</b> Português, Inglês, Espanhol, Francês, Alemão, Italiano
          entre outros. As opçoes de áudio e legendas podem ser ajustadas nas
          configurações do jogo.
        </p>
      </Section>
      <Section title="Galeria" background="black">
        <p>
          A galeria de imagens e vídeos do jogo Hogwarts Legacy oferece uma
          visão fascinante do mundo mágico, apresentando capturas de tela
          impressionantes, trailers envolventes e artes conceituais que destacam
          a beleza e a complexidade do jogo. Os jogadores podem explorar visuais
          deslumbrantes de Hogwarts, criaturas mágicas e cenas emocionantes,
          proporcionando uma prévia emocionante da experiência de jogo. Esta
          galeria é uma celebração visual do universo de Harry Potter e uma
          maneira perfeita de os fãs se prepararem para a aventura que os
          aguarda.
        </p>
      </Section>
    </>
  )
}

export default Product
