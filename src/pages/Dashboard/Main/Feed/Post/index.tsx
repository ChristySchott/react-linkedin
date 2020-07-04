import React from 'react';

import Wrapper from 'components/Wrapper';
import Container from './styles';
import Header from './Header';
import Content from './Content';
import Actions from './Actions';

interface Props {
    name: string;
    job: string;
    date: string;
    userPhoto: any;
    active?: boolean;
    image: string;
    alt: string;
}

const Post: React.FC<Props> = ({
    name, job, date, userPhoto, active = false, image, alt,
}) => (
        <Wrapper>
            <Container>
                <Header
                    name={name}
                    job={job}
                    date={date}
                    image={userPhoto}
                    active={active}
                />
                <Content><img src={image} alt={alt} /></Content>
                <Actions />
            </Container>
        </Wrapper>
    );

export default Post;
