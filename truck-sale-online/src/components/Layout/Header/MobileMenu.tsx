import React from 'react';
import { css } from '@emotion/core';
import { useTransition, animated, config } from 'react-spring';
import styled from '@/styled';

type Props = {
  show: boolean;
};

const Container = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  z-index: 1001;
`;

const MobileMenu: React.FC<Props> = ({ show }) => {
  const transitions = useTransition(show, null, {
    from: { opacity: 0.8, height: 0 },
    enter: { opacity: 1, height: globalThis.document?.body?.clientHeight || 0 },
    leave: { opacity: 0, height: 0 },
    config: config.slow,
  });

  return (
    <div
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      `}
    >
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <Container></Container>
            </animated.div>
          ),
      )}
    </div>
  );
};

export default MobileMenu;
