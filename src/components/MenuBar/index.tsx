import React from 'react';

import {
  Container,
  TopSide,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon,
  
} from './styles';
import Button from '../Button/index';
const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />
        <MenuButton>
          <HomeIcon />
          <span>Pagina Inicial</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>
        <MenuButton>
          <ProfileIcon className="active" />
          <span>Perfil</span>
        </MenuButton>
        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>
      <BotSide>
        <Avatar/>
        <ProfileData>
          <strong>Kelly Reis</strong>
          <span>@dev.kellyreis</span>
        </ProfileData>
        <ExitIcon/>
      </BotSide>
    </Container>

  );
}

export default MenuBar;