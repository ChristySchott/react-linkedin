import React from 'react';
import List from './List';

import { ReactComponent as LogoIcon } from 'assets/profile/logo.svg';

import { Container, Content, Logo, Lists, Item } from './styles';

const Footer: React.FC = () => {
    return <Container>
        <Content>
            <Logo><LogoIcon /></Logo>

            <Lists>
                <List title="Geral">
                    <Item>Cadastre-se</Item>
                    <Item>Central de Ajuda</Item>
                    <Item>Sobre</Item>
                    <Item>Imprensa</Item>
                    <Item>Blog</Item>
                    <Item>Carreiras</Item>
                    <Item>Programadores</Item>
                </List>
                <List title="Navegar pelo Linkedin">
                    <Item>Learning</Item>
                    <Item>Vagas</Item>
                    <Item>Salário</Item>
                    <Item>Aplicativos</Item>
                    <Item>ProFinder</Item>
                </List>
                <List title="Soluções Business">
                    <Item>Talentos</Item>
                    <Item>Marketin</Item>
                    <Item>Vendas</Item>
                    <Item>Learning</Item>
                </List>
                <List title="Diretórios">
                    <Item>Usuários</Item>
                    <Item>Vagas</Item>
                    <Item>Empresas</Item>
                    <Item>Salários</Item>
                    <Item>Em destaque</Item>
                    <Item>Learning</Item>
                    <Item>Publicações</Item>
                    <Item>Central de vagas</Item>
                    <Item>Artigos</Item>
                    <Item>Instituições de ensino</Item>
                </List>
            </Lists>
        </Content>
    </Container>;
}

export default Footer;