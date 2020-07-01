import React from 'react';

import { Container, Title, Content, User } from './styles';
import Wrapper from 'components/Wrapper';
import Item from './Item';

import { ReactComponent as UserOne } from 'assets/main/one.svg';
import { ReactComponent as UserThree } from 'assets/main/three.svg';
import { ReactComponent as UserFour } from 'assets/main/four.svg';

const Connections: React.FC = () => (
    <Wrapper>
        <Container>
            <Title> Mais sugestões para você</Title>
            <Content>
                <User><Item color="#ff4d4d" photo={<UserThree />} name="Paulo Bruno Serafim" job=" Software Developer at Atlantico" number="33" /> </User>
                <User><Item color="#9999ff" photo={<UserOne />} name="Elenice Miranda" job=" Java Developer" number="27" /></User>
                <User><Item color="#ffb84d" photo={<UserFour />} name="Rodrigo Galba" job=" AWS Specialist 4x certified" number="74" /></User>
                <User><Item color="#ff4d4d" photo={<UserThree />} name="Artur Schaefer" job=" Android Developer" number="12" /></User>
                <User><Item color="#b3c6ff" photo={<UserOne />} name="Thais R." job=" Frontend Software Engineer" number="105" /></User>
                <User><Item color="#adad85" photo={<UserThree />} name="Paulo Bruno Serafim" job=" Software Developer at Atlantico" number="33" /> </User>
                <User><Item color="#9999ff" photo={<UserFour />} name="Rodrigo Galba" job=" AWS Specialist 4x certified" number="74" /></User>
                <User><Item color="#ff8080" photo={<UserOne />} name="Elenice Miranda" job=" Java Developer" number="27" /></User>
                <User><Item color="#ff4d4d" photo={<UserThree />} name="Paulo Bruno Serafim" job=" Software Developer at Atlantico" number="33" /> </User>
                <User><Item color="#9999ff" photo={<UserOne />} name="Elenice Miranda" job=" Java Developer" number="27" /></User>
                <User><Item color="#ffb84d" photo={<UserFour />} name="Rodrigo Galba" job=" AWS Specialist 4x certified" number="74" /></User>
                <User><Item color="#ff4d4d" photo={<UserThree />} name="Artur Schaefer" job=" Android Developer" number="12" /></User>
                <User><Item color="#b3c6ff" photo={<UserOne />} name="Thais R." job=" Frontend Software Engineer" number="105" /></User>
                <User><Item color="#adad85" photo={<UserThree />} name="Paulo Bruno Serafim" job=" Software Developer at Atlantico" number="33" /> </User>
                <User><Item color="#9999ff" photo={<UserFour />} name="Rodrigo Galba" job=" AWS Specialist 4x certified" number="74" /></User>
                <User><Item color="#ff8080" photo={<UserOne />} name="Elenice Miranda" job=" Java Developer" number="27" /></User>
            </Content>
        </Container>
    </Wrapper>
)

export default Connections;