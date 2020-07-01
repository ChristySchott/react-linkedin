import React from 'react';

import { ReactComponent as More } from 'assets/messages/more.svg'
import { ReactComponent as Logo } from 'assets/jobs/linkedin.svg'

import { Container, Header, Image, Box, BoxRelation, Promoted, Icon, Infos, Title, Company, Place, Relation, Footer, Date, Candidates, Linkedin, Mid } from './styles';
import Wrapper from 'components/Wrapper';
import Connections from './Connections';
import Recruiting from './Recruiting';
import Students from './Students';

interface Props {
    image?: string;
    alt?: string;
    title: string;
    promoted?: boolean;
    company?: string;
    place?: string;
    date: string;
    candidates?: string;
    relation?: boolean;
    recruiting?: boolean;
    students?: boolean;
    simplified?: boolean;
}

const Item: React.FC<Props> = ({ image = "https://media-exp1.licdn.com/dms/image/C4E0BAQGfKOtAsJ7gOQ/company-logo_100_100/0?e=1601510400&v=beta&t=x5cTboH0SFqYd83HmnEx9HnmTZQh3kLJdfgM4A1wQJc", alt = "IBM", title, promoted = false, company = "IBM", place = "Porto Alegre, BR", relation = false, date, candidates, recruiting = false, students = false, simplified }) =>
    <Wrapper margin top>
        <Container>
            <Header>
                <Image><img src={image} alt={alt} /></Image>
                <Box>
                    {promoted && <Promoted>Promovido</Promoted>}
                    <Icon><More /></Icon>
                </Box>
            </Header>
            <Infos>
                <Title>{title}</Title>
                <Company>{company}</Company>
                <Place>{place}</Place>
            </Infos>
            <BoxRelation>
                {relation && <Relation><Connections /></Relation>}
                {recruiting && <Relation><Recruiting /></Relation>}
                {students && <Relation><Students /></Relation>}
            </BoxRelation>
            <Footer>
                <Date>{date}</Date>
                {simplified && <Linkedin> <Mid>&middot;</Mid> <Logo /> Candidatura simplificada</Linkedin>}
                <Candidates>&middot;{candidates}</Candidates>
            </Footer>
        </Container>
    </Wrapper>

export default Item;