import React, { useState, MouseEvent } from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as ReactHome } from 'assets/home.svg';
import { ReactComponent as ReactNetwork } from 'assets/network.svg';
import { ReactComponent as ReactJobs } from 'assets/jobs.svg';
import { ReactComponent as ReactMessages } from 'assets/messages.svg';
import { ReactComponent as ReactNotifications } from 'assets/notifications.svg';
import { ReactComponent as ReactUser } from 'assets/user.svg';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { ModalProvider } from 'styled-react-modal';
import User from 'components/Modals/User';
import Solutions from 'components/Modals/Solutions';
import Item from './Item';

import {
    Container, NavMain, ModalUser, ModalBackground, ModalSolution, Premium,
} from './styles';

const Nav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSolution, setIsOpenSolution] = useState(false);

    const [active, setActive] = useState(1);

    function toggleModal(event: MouseEvent) {
        event.preventDefault();
        setIsOpen(!isOpen);
    }

    function toggleModalSolution(event: MouseEvent) {
        event.preventDefault();
        setIsOpenSolution(!isOpenSolution);
    }

    return (
        <Container>
            <ModalProvider backgroundComponent={ModalBackground}>
                <NavMain active={active}>
                    <Item path="/" icon={<ReactHome />} text="Início" onClick={() => setActive(1)} />
                    <Item path="/network" icon={<ReactNetwork />} text="Minha rede" onClick={() => setActive(2)} />
                    <Item path="/jobs" icon={<ReactJobs />} text="Vagas" onClick={() => setActive(3)} />
                    <Item path="/messages" icon={<ReactMessages />} text="Mensagens" onClick={() => setActive(4)} />
                    <Item path="/notifications" icon={<ReactNotifications />} text="Notificações" onClick={() => setActive(5)} />
                    <Item icon={<ReactUser />} text="Eu" drop onClick={toggleModal} />
                    <Item icon={<BsFillGrid3X3GapFill size={18} />} text="Soluções" drop onClick={toggleModalSolution} />
                    <Premium><Link to="/">Reative Premium</Link></Premium>
                </NavMain>
                <ModalUser isOpen={isOpen} onBackgroundClick={toggleModal}>
                    <User />
                </ModalUser>
                <ModalProvider>
                    <ModalSolution isOpen={isOpenSolution} onBackgroundClick={toggleModalSolution}>
                        <Solutions toggleModal={() => setIsOpenSolution(false)} />
                    </ModalSolution>
                </ModalProvider>
            </ModalProvider>
        </Container>
    );
};

export default Nav;
