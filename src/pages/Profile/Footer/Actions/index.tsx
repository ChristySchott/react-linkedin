import React from 'react';

import { ReactComponent as Drop } from 'assets/profile/drop.svg';
import { ReactComponent as Question } from 'assets/profile/question.svg';
import { ReactComponent as Count } from 'assets/profile/count.svg';

import { Container, Cards, Card, ContainerCard, Image, Infos, Name, NameBlue, Followers, Language, Label, BoxInput, Input, Icon } from './styles';

const Actions: React.FC = () => {
    return <Container>
        <Cards>
            <Card>
                <ContainerCard>
                    <Image>
                        <Question />
                    </Image>
                    <Infos>
                        <Name>Dúvidas?</Name>
                        <Followers>Acesse a nossa Central de Ajuda.</Followers>
                    </Infos>
                </ContainerCard>
            </Card>
            <Card>
                <ContainerCard>
                    <Image>
                        <Count />
                    </Image>
                    <Infos>
                        <NameBlue>Gerenciar sua conta e privacidade</NameBlue>
                        <Followers>Acesse suas configura;'oes</Followers>
                    </Infos>
                </ContainerCard>
            </Card>
        </Cards>
        <Language>
            <Label> Selecionar idioma </Label>
            <BoxInput>
                <Input type="text" placeholder="Português (Português)" />
                <Icon><Drop /></Icon>
            </BoxInput>
        </Language>
    </Container>;
}

export default Actions;