import React from 'react';

import Container from './styles';
import Card from './Card';

const Cards: React.FC = () => (
  <Container>
    <Card
      color="#2f7b15"
      title="Carreiras"
      sub="Seja contratado e saia na frente"
      first="Destaque-se e entre em contato com recrutadores"
      second="Veja como você se compara a outros candidatos"
      third="Adquira novas competências para avançar na sua carreira"
    />
    <Card
      color="#0073b1"
      title="Negócios"
      sub="Amplie e desenvolva sua rede"
      first="Encontre e contrate as pessoas certas"
      second="Promova e desenvolva seu negócio"
      third="Adquira novas competências para destacar sua marca profissional"
    />
    <Card
      color="#665ed0"
      title="Vendas"
      sub="Descubra mais oportunidades de vendas"
      first="Encontre leads e contas no seu público-alvo"
      second="Receba estatísticas em tempo real para ajudar no contato inicial com leads"
      third="Desenvolva relacionamentos com potenciais e atuais clientes"
    />
    <Card
      color="#b74700"
      title="Contratação"
      sub="Encontre e contrate talentos"
      first="Encontre candidatos qualificados com rapidez"
      second="Entre em contato direto com os melhores talentos"
      third="Desenvolva relacionamentos com potenciais candidatos"
    />
  </Container>
);

export default Cards;
