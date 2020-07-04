/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, MouseEvent } from 'react';

import { Link } from 'react-router-dom';

import { ReactComponent as ReactHome } from 'assets/home.svg';
import { ReactComponent as ReactNetwork } from 'assets/network.svg';
import { ReactComponent as ReactJobs } from 'assets/jobs.svg';
import { ReactComponent as ReactMessages } from 'assets/messages.svg';
import { ReactComponent as ReactNotifications } from 'assets/notifications.svg';
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
    const [notification, setNotification] = useState<any[]>([]);

    const [active, setActive] = useState<number>(1);

    function toggleModal(event: MouseEvent) {
        event.preventDefault();
        setIsOpen(!isOpen);
        setActive(6)
    }

    function toggleModalSolution(event: MouseEvent) {
        event.preventDefault();
        setIsOpenSolution(!isOpenSolution);
    }

    return (
        <Container>
            <ModalProvider backgroundComponent={ModalBackground}>
                <NavMain active={active} notification={notification}>
                    <Item path="/dashboard" icon={<ReactHome />} text="Início" onClick={() => setActive(1)} />
                    <Item notification path="/network" icon={<ReactNetwork />} text="Minha rede" onClick={() => { setActive(2); setNotification([...notification, 2]); }} />
                    <Item path="/jobs" icon={<ReactJobs />} text="Vagas" onClick={() => setActive(3)} />
                    <Item path="/messages" icon={<ReactMessages />} text="Mensagens" onClick={() => setActive(4)} />
                    <Item notification path="/notifications" icon={<ReactNotifications />} text="Notificações" onClick={() => { setActive(5); setNotification([...notification, 5]); }} />
                    <Item icon={<img src="https://media-exp1.licdn.com/dms/image/C4E03AQGArBZoTlAL5Q/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=8TgATuNtdQS00Pg0e5Ci1l7QOrwLHp1y0UlaOYPlq5I" alt="" />} text="Eu" drop onClick={toggleModal} />
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
