import React from 'react';

import { ReactComponent as Pencil } from 'assets/profile/pencilBig.svg';

import {
  Container, First, Name, Surname, Label, Input,
  Template, Select, Option, Asterisk, Box, Icon, Text,
} from './styles';

const Fields: React.FC = () => (
  <Container>
    <First>
      <Name>
        <Label htmlFor="name">
          Nome
          <Asterisk>*</Asterisk>
        </Label>
        <Input name="name" type="text" placeholder="Christy" />
      </Name>
      <Surname>
        <Label htmlFor="surname">
          Sobrenome
          <Asterisk>*</Asterisk>
        </Label>
        <Input name="surname" type="text" placeholder="Hauschild" />
      </Surname>
    </First>

    <Template>
      <Label htmlFor="title">
        Título
        <Asterisk>*</Asterisk>
      </Label>
      <Input name="title" type="text" placeholder="Intern Developer | React | TypeScript | Redux" />
    </Template>

    <Template>
      <Label htmlFor="job">
        Cargo atual
        <Asterisk>*</Asterisk>
      </Label>
      <Select name="job">
        <Option value="0">Intern Developer at Kobe - Creative Software House</Option>
      </Select>
    </Template>

    <Template>
      <Label htmlFor="school">
        Formação acadêmica
        <Asterisk>*</Asterisk>
      </Label>
      <Select name="school">
        <Option value="0">IGTI</Option>
      </Select>
    </Template>

    <Template>
      <Label htmlFor="country">
        País/Região
        <Asterisk>*</Asterisk>
      </Label>
      <Input name="country" type="text" placeholder="Intern Developer | React | TypeScript | Redux" />
    </Template>

    <Template>
      <Label htmlFor="region">
        Localidades neste país/região
        <Asterisk>*</Asterisk>
      </Label>
      <Input name="region" type="text" placeholder="Venâncio Aires, Rio Grande do Sul" />
    </Template>

    <Template>
      <Label htmlFor="sector">
        Setor
        <Asterisk>*</Asterisk>
      </Label>
      <Select name="sector">
        <Option value="0">Desenvolvimento de programas</Option>
      </Select>
    </Template>

    <Template>
      <Label>Informações de contato</Label>
      <Box>
        <Text>URL do perfil, Sites, Telefone, E-mail, Aniversário</Text>
        <Icon><Pencil /></Icon>
      </Box>
    </Template>
  </Container>
);

export default Fields;
