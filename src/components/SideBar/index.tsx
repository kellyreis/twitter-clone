import React from 'react';
import List from '../List'
import News from '../News'
import StickBox from 'react-sticky-box'
import FollowSugestion from '../FollowSugestion'
import {
  Container,
  SeachWrapper,
  SearchInput,
  SearchIncon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SeachWrapper>
        <SearchInput placeholder="Buscar No Twitter" />
        <SearchIncon />
      </SeachWrapper>

      <StickBox>
        <Body>
          <List

            title="Talvez você curta"
            elements={[

              <FollowSugestion

                name="Luiz Batanero"
                nickname="@luizbatanero"
              />
            ]}
          />
          <List

            title="Talvez você curta"
            elements={[
              <News />, <News />, <News />
            ]}
          />
          <List

            title="Talvez você curta"
            elements={[
              <News />, <News />, <News />
            ]}
          />
          <List

            title="Talvez você curta"
            elements={[
              <News />, <News />, <News />
            ]}
          />
          <List

            title="Talvez você curta"
            elements={[
              <News />, <News />, <News />
            ]}
          />

        </Body>
      </StickBox>
    </Container>
  );
}

export default SideBar;