import { Layout } from 'antd';
import React from 'react';
import styled from 'styled-components';

const LayoutStyled = styled(Layout)`
  height: 100vh
`;

const SiderStyled = styled(Layout.Sider)`
  min-width: 50px!important;
  max-width: 50px!important;
`;

const ContentBoxStyled = styled(Layout.Content)`
  overflow-y: auto;
`;

const FooterStyled = styled(Layout.Footer)`
  height: 20px;
`;

const AppLayout = (props) => {

  const {navbar, sidebar, content, footer } = props;

  return (
    <LayoutStyled>
      <Layout.Header>
        { navbar}
      </Layout.Header>
      <Layout>
        <SiderStyled>
          { sidebar}
        </SiderStyled>
        <ContentBoxStyled>
          { content }
        </ContentBoxStyled>
      </Layout>
      <FooterStyled>
        { footer}
      </FooterStyled>
    </LayoutStyled>
  )
};

export default AppLayout;