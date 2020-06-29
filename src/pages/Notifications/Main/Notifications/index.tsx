/* eslint-disable max-len */
import React from 'react';

import { ReactComponent as UserOne } from 'assets/main/one.svg';
import { ReactComponent as UserTwo } from 'assets/main/two.svg';
import { ReactComponent as UserThree } from 'assets/main/three.svg';
import { ReactComponent as UserFour } from 'assets/main/four.svg';
import check from 'assets/notifications/check.png';
import diary from 'assets/notifications/diary.png';

import Author from 'components/Author';
import Container from './styles';
import Box from './Box';
import Item from './Item';
import Template from './Template';

const Notifications: React.FC = () => (
    <Container>
        <Box title="Recentes">
            <Item
                image={
                    <Author image={<UserOne />} />
                }
                activity={(
                    <span>
                        Ada Lovelace
                        <strong> compartilhou uma publicação:</strong>
                        A dedicação sempre nos rende frutos. É satisfatório receber este certificado! Que continuemos a ser melhores a cada oportunidade.
                    </span>
                )}
                time="1 d"
            />
            <Item
                image={
                    <img src="https://media-exp1.licdn.com/dms/image/C560BAQGh1ApyCVz_cQ/company-logo_100_100/0?e=1601510400&v=beta&t=enUj1hS9OlzqYxpUDW9zhTiD_Ods5B_Tr2mQiRsUMq0" alt="Job" />
                }
                activity={(
                    <Template
                        title="Seu alerta de vaga"
                        info={(
                            <span>
                                1 vaga nova de
                                <strong> estágio+front </strong>
                                em:
                                <strong> Brasil</strong>
                            </span>
                        )}
                        action="Visualize novas vagas"
                    />
                )}
                time="1 d"
            />
            <Item
                image={
                    <img src={check} alt="Check" />
                }
                activity={(
                    <Template
                        info="2 pessoas viram seu perfil"
                        action="Reativar Premium"
                    />
                )}
                time="1 d"
            />
            <Item
                image={
                    <Author image={<UserTwo />} />
                }
                activity={(
                    <span>
                        Fulano de Tal
                        <strong> recompartilhou uma atualição: </strong>
                                Sempre digo isso...
                    </span>
                )}
                time="1 d"
            />
            <Item
                image={
                    <img src={diary} alt="Check" />
                }
                activity={(
                    <Template
                        title="Boletim Diário: DOMINGO"
                        info="BOAS NOVAS - Vacina começa a ser testada em SP;
                        USP cria sistema de descontaminação de ar e outras notícias"
                        action="Reativar Premium"
                    />
                )}
                time="1 d"
            />
            <Item
                image={
                    <Author image={<UserThree />} />
                }
                activity={(
                    <Template
                        info={(
                            <p>
                                Parabenize Alan Turing
                                <strong> por concluir os estudos </strong>
                                na Escola
                            </p>
                        )}
                        action="Parabenizar"
                    />
                )}
                time="1 d"
            />
            <Item
                image={
                    <Author image={<UserFour />} />
                }
                activity={(
                    <Template
                        info={(
                            <p>
                                Parabenize Sherlock Holmes pelo
                                <strong> novo cargo </strong>
                                de auxiliar de desenvolvimento na empresa Agência Example
                            </p>
                        )}
                        action="Parabenizar"
                    />
                )}
                time="1 d"
            />
        </Box>
        <Box title="Anteriores">
            <Item
                image={
                    <img src="https://media-exp1.licdn.com/dms/image/C560BAQGh1ApyCVz_cQ/company-logo_100_100/0?e=1601510400&v=beta&t=enUj1hS9OlzqYxpUDW9zhTiD_Ods5B_Tr2mQiRsUMq0" alt="Job" />
                }
                activity={(
                    <Template
                        title="Seu alerta de vaga"
                        info={(
                            <span>
                                1 vaga nova de
                                <strong> estágio+front </strong>
                                em:
                                <strong> Brasil</strong>
                            </span>
                        )}
                        action="Visualize novas vagas"
                    />
                )}
                time="1 d"
            />
            <Item
                image={
                    <Author image={<UserTwo />} />
                }
                activity={(
                    <span>
                        Fulano de Tal
                        <strong> recompartilhou uma atualição: </strong>
                                Sempre digo isso...
                    </span>
                )}
                time="13 h"
            />
            <Item
                image={
                    <img src={check} alt="Check" />
                }
                activity={(
                    <Template
                        info="2 pessoas viram seu perfil"
                        action="Reativar Premium"
                    />
                )}
                time="1 d"
            />
            <Item
                image={
                    <Author image={<UserOne />} />
                }
                activity={(
                    <span>
                        Ada Lovelace
                        <strong> compartilhou uma publicação:</strong>
                        A dedicação sempre nos rende frutos. É satisfatório receber este certificado! Que continuemos a ser melhores a cada oportunidade.
                    </span>
                )}
                time="1 d"
            />
            <Item
                image={
                    <Author image={<UserThree />} />
                }
                activity={(
                    <Template
                        info={(
                            <p>
                                Parabenize Alan Turing
                                <strong> por concluir os estudos </strong>
                                na Escola
                            </p>
                        )}
                        action="Parabenizar"
                    />
                )}
                time="1 d"
            />
            <Item
                image={
                    <img src={diary} alt="Check" />
                }
                activity={(
                    <Template
                        title="Boletim Diário: Sábado"
                        info="Como iniciar em um novo trabalho remotamente; expressões que indicam burnout e outras notíciasComo iniciar em um novo trabalho remotamente; expressões que indicam burnout e outras notícias"
                        action="Reativar Premium"
                    />
                )}
                time="1 d"
            />
            <Item
                image={
                    <Author image={<UserFour />} />
                }
                activity={(
                    <Template
                        info={(
                            <p>
                                Parabenize Sherlock Holmes pelo
                                <strong> novo cargo </strong>
                                de auxiliar de desenvolvimento na empresa Agência Example
                            </p>
                        )}
                        action="Parabenizar"
                    />
                )}
                time="2 d"
            />
        </Box>
    </Container>
);

export default Notifications;
