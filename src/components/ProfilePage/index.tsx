import React from 'react';

import { EditButton, Container, Followage, Banner, Avatar, ProfileData, LocationIcon, CakeIcon } from './styles';
import Feed from '../Feed'; 
const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Kelly Reis</h1>
        <h2>dev.kellyreis</h2>
        <p>Developer at <a href="http://kreis.com.br/">KR Solutions Techs</a></p>
        <ul>
          <li>
            <LocationIcon />
              Rio Claro, Brasil
            </li>
          <li>
            <CakeIcon />
             Nascido(a) em 05 de Julho de 1994
            </li>
        </ul>
        <Followage>
          <span>
            Seguindo <strong>94</strong>
          </span>
          <span>
            <strong>150 </strong> Seguidores
            </span>
        </Followage>
      </ProfileData>
      <Feed/>

  
    </Container>
  );
}

export default ProfilePage;