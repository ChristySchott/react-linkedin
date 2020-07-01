import React from 'react';

import { FiMoreHorizontal } from 'react-icons/fi';
import Wrapper from 'components/Wrapper';
import Title from 'components/TitleWithoutHover';
import { Container, Image } from './styles';
import Item from './Item';
import publish from 'assets/publish.jpg';

interface Props {
  banner?: boolean;
}

const Promoted: React.FC<Props> = ({ banner = false }) => (
  <>
    {
      banner
        ? (
          <Image>
            <img src={publish} alt="Publish" />
          </Image>
        )
        : (
          <Wrapper>
            <Title title="Promovido" icon={<FiMoreHorizontal size={18} />} />
            <Container>
              <Item
                title="Seu futuro profissional"
                resume="Pós-graduação em Neurociências e Comportamento"
                url="https://pbs.twimg.com/profile_images/1214279506841808897/7spwPwNF_400x400.jpg"
              />
              <Item
                title="Curso Maquiagem"
                resume="Torna-se um(a) profissional da maquiagem. Apenas 39.90"
                url="https://media-exp1.licdn.com/dms/image/C4D0EAQHylk8UFl-Qlw/rightRail-logo-shrink_100_100/0?e=1593385200&v=beta&t=6W9qb4VcUc6f1T2nZVLYhCX3YDKcmO8oHP1ABsTX0vU"
              />
              <Item
                title="Atendimento via Whatsapp"
                resume="Crie rapimento um chatbot para atendimento via Whatsapp"
                url="https://media-exp1.licdn.com/dms/image/C4D0EAQGEHNX13OsSGA/rightRail-logo-shrink_200_200/0?e=1593385200&v=beta&t=CvY03QpFyutgqQGTdziJuns8B0vPQazY7dqLoXLgSWk"
              />
            </Container>
          </Wrapper>
        )
    }
  </>
);

export default Promoted;
