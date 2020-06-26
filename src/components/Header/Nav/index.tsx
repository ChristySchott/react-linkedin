import React, { useState, MouseEvent } from 'react';

import { ReactComponent as ReactHome } from 'assets/home.svg';
import { ReactComponent as ReactNetwork } from 'assets/network.svg';
import { ReactComponent as ReactJobs } from 'assets/jobs.svg';
import { ReactComponent as ReactMessages } from 'assets/messages.svg';
import { ReactComponent as ReactNotifications } from 'assets/notifications.svg';
import { ReactComponent as ReactUser } from 'assets/user.svg';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { ModalProvider } from 'styled-react-modal';
import Item from './Item';

import {
    Container, NavMain, ModalUser, ModalBackground, ModalSolution,
} from './styles';

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSolution, setIsOpenSolution] = useState(false);

    function toggleModal(event: MouseEvent) {
        event.preventDefault();
        setIsOpen(!isOpen);
    }

    function toggleModalSolution(event: MouseEvent) {
        event.preventDefault();
        setIsOpenSolution(!isOpenSolution);
    }

    return (
        <ModalProvider backgroundComponent={ModalBackground}>
            <Container>
                <NavMain>
                    <Item icon={<ReactHome />} text="Início" />
                    <Item icon={<ReactNetwork />} text="Minha rede" />
                    <Item icon={<ReactJobs />} text="Vagas" />
                    <Item icon={<ReactMessages />} text="Mensagens" />
                    <Item icon={<ReactNotifications />} text="Notificações" />
                    <Item icon={<ReactUser />} text="Eu" drop onClick={toggleModal} />
                    <Item icon={<BsFillGrid3X3GapFill size={18} />} text="Soluções" drop onClick={toggleModalSolution} />
                </NavMain>
                <ModalUser isOpen={isOpen} onBackgroundClick={toggleModal}>
                    <select>
                        <option value="0">Selecione um fornecedor</option>
                        <option value="CEEE">CEEE</option>
                        <option value="Gandalf">Gandalf</option>
                        <option value="Cadê o chinelo">Cadê o chinelo</option>
                    </select>
                    <button type="button" onClick={toggleModal}>Fechar</button>
                </ModalUser>
                <ModalProvider>
                    <ModalSolution isOpen={isOpenSolution} onBackgroundClick={toggleModalSolution}>
                        <select>
                            <option value="0">Selecione um fornecedor</option>
                            <option value="CEEE">CEEE</option>
                            <option value="Gandalf">Gandalf</option>
                            <option value="Cadê o chinelo">Cadê o chinelo</option>
                        </select>
                        <button type="button" onClick={toggleModal}>Fechar</button>
                    </ModalSolution>
                </ModalProvider>
            </Container>
        </ModalProvider>
    );
};

export default Nav;
