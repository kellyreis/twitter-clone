import React from 'react';

import {
  Container,
  Retweeted,
  RocktseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Descricao,
  ImageContent,
  Icons,
  Status,
  ComentIcon,
  RetweetIcon,
  LikeIcon,
  Dot,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocktseatIcon />
        Você retweetou
</Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Lady Gaga</strong>
            <span>@ladygaga</span>
            <Dot />
            <time>27 de Jun</time>
          </Header>

          <Descricao>
            Cromatica é um sucesso
           <ImageContent />
            <Icons>
              <Status>
                <ComentIcon />
               18
             </Status>
              <Status>
                <RetweetIcon />
               18
             </Status>
              <Status>
                <LikeIcon />
               999
             </Status>
            </Icons>
          </Descricao>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;