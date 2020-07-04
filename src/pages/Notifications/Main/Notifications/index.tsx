/* eslint-disable max-len */
import React from 'react';

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
                    <Author image="https://media-exp1.licdn.com/dms/image/C4D03AQE0wdDwf9OjRg/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=AwPyqnkwSGX9hPl5rbgtT11o17btCDjJv3AE73GirIw" />
                }
                activity={(
                    <span>
                        Ada Lovelace
                        <strong> compartilhou uma publicação:</strong>
                        A dedicação sempre nos rende frutos. É satisfatório receber este certificado! Que continuemos a melhorar em cada oportunidade.
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
                    <Author image="https://media-exp1.licdn.com/dms/image/C4E03AQGAY1AOKuMXWQ/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=Z9-S_JtSgNaa2Dll0_54mh7UT6cM2RowRiul_cR5igE" />
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
                    <Author image="https://media-exp1.licdn.com/dms/image/C4E03AQHlmk-8x3UX5g/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=NH92CwaNibDegoAiaS1W8NzvbbTcA_uOSrnPNG0-k3c" />
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
                    <Author image="https://media-exp1.licdn.com/dms/image/C4E03AQHG3UhKtUcsgg/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=8WmUj_tLCa4dHeVUXKeF0b7jRH68MLY9zrhVzpS5TdY" />
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
                    <Author image="https://media-exp1.licdn.com/dms/image/C4E03AQFdewlbvEN9TQ/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=HklGHdNRFWgxnvlCsZbfSYJrbLedX1l_35snon6HTPw" />
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
                    <Author image="https://media-exp1.licdn.com/dms/image/C4D03AQGCU5VVwWe9XA/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=37wXRd1I9xv7VZfjPn_MhPaplCqtHF_wgTqE8RcXvXQ" />
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
                    <Author image="https://media-exp1.licdn.com/dms/image/C4D03AQGe06a45Wa0tQ/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=134rkB1saZkiXdhC4bjjbxDGyWPZtZvcWCphgl26Ot8" />
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
                    <Author image="https://media-exp1.licdn.com/dms/image/C4E03AQHd9gtJ0rAiFA/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=hPpMioakGvLl5RGJW8mdxxSImC3gbJJrWsSJBV2xqRw" />
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
