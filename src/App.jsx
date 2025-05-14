import { useState, useRef } from 'react'
import styled from 'styled-components'
import ReactPlayer from 'react-player'
import { FaLock, FaCheck, FaArrowRight, FaWhatsapp, FaShieldAlt } from 'react-icons/fa'

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
  background-color: #1a1a1a;
  color: #ffffff;
`

const HeadlineBlock = styled.div`
  background: #222;
  border-left: 6px solid #ff4d4d;
  border-radius: 8px;
  margin: 2rem auto 1.5rem auto;
  padding: 1.2rem 1rem 1rem 1.5rem;
  max-width: 700px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.15);
  text-align: left;
  position: relative;
`

const TopCTAButton = styled.button`
  background: linear-gradient(90deg, #ff4d4d, #ff3333);
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  padding: 1rem 2rem;
  margin: 0 auto 1.2rem auto;
  display: block;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(255,77,77,0.2);
  text-transform: uppercase;
  transition: 0.2s;
  &:hover {
    background: #ff3333;
    transform: scale(1.04);
  }
`

const Headline = styled.h2`
  font-size: clamp(1.2rem, 3vw, 1.7rem);
  color: #ff4d4d;
  font-weight: 900;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
`

const Subheadline = styled.p`
  font-size: clamp(1rem, 2vw, 1.15rem);
  color: #fff;
  opacity: 0.9;
  margin: 0;
`

const VideoContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto 0 auto;
  position: relative;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 16/9;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 700px) {
    max-width: 100vw;
    border-radius: 0;
    margin: 1rem 0 0 0;
  }
`

const PriceBox = styled.div`
  margin: 2rem 0 1rem 0;
  text-align: center;
`
const OldPrice = styled.span`
  color: #aaa;
  font-size: 1.2rem;
  text-decoration: line-through;
  margin-right: 1rem;
`
const NewPrice = styled.span`
  color: #4CAF50;
  font-size: 2rem;
  font-weight: bold;
  background: #222;
  padding: 0.3rem 1.2rem;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(76,175,80,0.08);
`

const CTAButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  margin: 1rem auto;
  display: block;
  text-transform: uppercase;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255,77,77,0.3);

  &:hover {
    background-color: #ff3333;
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(255,77,77,0.4);
  }
`

const Section = styled.section`
  padding: 3rem 2rem;
  margin: 2rem auto;
  background-color: #2a2a2a;
  max-width: 1200px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
`

const BenefitsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`

const BenefitItem = styled.li`
  background-color: #333;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`

const Testimonial = styled.div`
  background-color: #333;
  padding: 2rem;
  margin: 0;
  border-radius: 10px;
  border-left: 4px solid #ff4d4d;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`

const TestimonialPhoto = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ff4d4d;
  margin-top: 0.2rem;
`

const TestimonialText = styled.div`
  flex: 1;
`

const TestimonialName = styled.div`
  font-weight: bold;
  color: #ff4d4d;
  margin-top: 0.5rem;
  font-size: 1rem;
`

const ProgressContainer = styled.div`
  background-color: #333;
  padding: 2rem;
  border-radius: 10px;
  margin: 2rem 0;
  text-align: center;
`

const ProgressBar = styled.div`
  width: 100%;
  height: 25px;
  background-color: #444;
  border-radius: 15px;
  margin: 1rem 0;
  overflow: hidden;
  box-shadow: inset 0 2px 5px rgba(0,0,0,0.2);
`

const Progress = styled.div`
  width: 99%;
  height: 100%;
  background: linear-gradient(90deg, #ff4d4d, #ff3333);
  transition: width 0.3s ease;
  border-radius: 15px;
`

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`

const FAQItem = styled.div`
  background-color: #333;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
`

const CheckoutSection = styled(Section)`
  background-color: #222;
  border: 2px solid #ff4d4d;
`

const PrivacyBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4CAF50;
  margin: 1rem 0;
`

const FloatingCheckoutButton = styled.button`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  z-index: 9999;
  background: linear-gradient(90deg, #ff4d4d, #ff3333);
  color: #fff;
  font-size: 1.3rem;
  font-weight: bold;
  border: none;
  border-radius: 0;
  padding: 1.1rem 0;
  box-shadow: 0 -2px 12px rgba(255,77,77,0.18);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background: #ff3333;
    filter: brightness(1.08);
  }
  @media (min-width: 900px) {
    width: auto;
    left: auto;
    right: 2.5rem;
    bottom: 2.5rem;
    border-radius: 40px;
    padding: 1.1rem 2.5rem;
    font-size: 1.1rem;
    box-shadow: 0 4px 24px rgba(255,77,77,0.18);
  }
`

function App() {
  const [showCheckout, setShowCheckout] = useState(false)
  const checkoutRef = useRef(null)

  const checkoutUrl = 'https://go.disruptybr.click/9mcbvxrlbw'

  const scrollToCheckout = () => {
    setShowCheckout(true)
    setTimeout(() => {
      checkoutRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const goToCheckout = () => {
    window.location.href = checkoutUrl
  }

  return (
    <Container>
      <HeadlineBlock>
        <TopCTAButton onClick={goToCheckout}>
          Quero Desbloquear Agora <FaArrowRight />
        </TopCTAButton>
        <Headline>O Segredo Que Está Revolucionando a Vida Sexual dos Homens Acima dos 40</Headline>
        <Subheadline>Descubra o método que já transformou a vida de mais de 10.000 homens</Subheadline>
      </HeadlineBlock>
      <VideoContainer>
        <ReactPlayer
          url="https://youtube.com/shorts/JX8Uh2jpbxM?feature=share"
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
          controls
        />
      </VideoContainer>

      <Section>
        <h2>Por Que Você Precisa Desse Método Agora?</h2>
        <BenefitsList>
          <BenefitItem><FaCheck color="#4CAF50" /> Recupere sua potência sexual em 30 dias</BenefitItem>
          <BenefitItem><FaCheck color="#4CAF50" /> Método 100% natural e sem efeitos colaterais</BenefitItem>
          <BenefitItem><FaCheck color="#4CAF50" /> Resultados comprovados por mais de 10.000 homens</BenefitItem>
          <BenefitItem><FaCheck color="#4CAF50" /> Entrega discreta e garantida</BenefitItem>
        </BenefitsList>
      </Section>

      <Section>
        <h2>Histórias de Sucesso</h2>
        <TestimonialGrid>
          <Testimonial>
            <TestimonialPhoto src="https://randomuser.me/api/portraits/men/52.jpg" alt="Carlos" />
            <TestimonialText>
              <div>"Depois de 15 anos sofrendo, finalmente encontrei a solução. Hoje minha esposa não me deixa em paz!"</div>
              <TestimonialName>Carlos, 52 anos</TestimonialName>
            </TestimonialText>
          </Testimonial>
          <Testimonial>
            <TestimonialPhoto src="https://randomuser.me/api/portraits/men/58.jpg" alt="Roberto" />
            <TestimonialText>
              <div>"Não acreditava que funcionaria, mas em 3 semanas já estava como um jovem de 20 anos!"</div>
              <TestimonialName>Roberto, 58 anos</TestimonialName>
            </TestimonialText>
          </Testimonial>
          <Testimonial>
            <TestimonialPhoto src="https://randomuser.me/api/portraits/men/45.jpg" alt="Paulo" />
            <TestimonialText>
              <div>"O melhor investimento que fiz na minha vida. Minha autoestima voltou ao normal!"</div>
              <TestimonialName>Paulo, 45 anos</TestimonialName>
            </TestimonialText>
          </Testimonial>
        </TestimonialGrid>
      </Section>

      <Section>
        <h2>Bônus Exclusivo</h2>
        <BenefitItem>
          <FaCheck color="#ff4d4d" size={24} />
          Checklist das 3 Piores Comidas Que Destroem Sua Potência Sexual
        </BenefitItem>
      </Section>

      <Section>
        <h2>Garantia de Privacidade</h2>
        <BenefitsList>
          <BenefitItem><FaShieldAlt color="#4CAF50" /> Você recebe de forma totalmente discreta</BenefitItem>
          <BenefitItem><FaShieldAlt color="#4CAF50" /> Nenhuma informação aparece na fatura</BenefitItem>
          <BenefitItem><FaWhatsapp color="#4CAF50" /> Suporte 24/7 via WhatsApp</BenefitItem>
        </BenefitsList>
      </Section>

      <Section>
        <ProgressContainer>
          <h2>Últimas Unidades Disponíveis</h2>
          <ProgressBar>
            <Progress />
          </ProgressBar>
          <p>99% das unidades já foram vendidas!</p>
          <CTAButton onClick={() => setShowCheckout(true)}>
            Quero Agora <FaArrowRight />
          </CTAButton>
        </ProgressContainer>
      </Section>

      <Section>
        <h2>Perguntas Frequentes</h2>
        <FAQGrid>
          <FAQItem>
            <h3>É seguro?</h3>
            <p>Sim, nosso método é 100% natural e aprovado por especialistas.</p>
          </FAQItem>
          <FAQItem>
            <h3>Quanto tempo leva para ver resultados?</h3>
            <p>Os primeiros resultados são notados em 2-3 semanas.</p>
          </FAQItem>
          <FAQItem>
            <h3>Como vou receber?</h3>
            <p>Você recebe de forma totalmente discreta, sem identificação do conteúdo.</p>
          </FAQItem>
          <FAQItem>
            <h3>Qual a garantia?</h3>
            <p>Você tem 7 dias de garantia ou seu dinheiro de volta.</p>
          </FAQItem>
        </FAQGrid>
      </Section>

      {showCheckout && (
        <CheckoutSection ref={checkoutRef}>
          <h2>Checkout Seguro</h2>
          <PrivacyBadge>
            <FaLock /> Pagamento 100% Seguro
          </PrivacyBadge>
          <PriceBox>
            <OldPrice>De R$ 99,00</OldPrice>
            <NewPrice>Por R$ 19,90</NewPrice>
          </PriceBox>
          <p>Você será redirecionado para o pagamento via PIX</p>
          <CTAButton onClick={goToCheckout}>
            Pagar com PIX <FaLock />
          </CTAButton>
        </CheckoutSection>
      )}

      {/* Floating Checkout Button */}
      <FloatingCheckoutButton onClick={goToCheckout}>
        Comprar Agora por R$ 19,90 <FaArrowRight />
      </FloatingCheckoutButton>
    </Container>
  )
}

export default App
