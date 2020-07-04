import React from 'react';

import { Link } from 'react-router-dom';

import Content from './styles';

const CTA: React.FC = () => <Link to="/profile"><Content>Visualizar Perfil</Content></Link>;

export default CTA;
