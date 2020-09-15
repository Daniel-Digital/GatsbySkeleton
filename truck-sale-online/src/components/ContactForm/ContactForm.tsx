import React from 'react';
import { css } from '@emotion/core';
import styled from '@/styled';
import { useTheme } from 'emotion-theming';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

import TextField from '@/components/Inputs/TextField';
import TextArea from '@/components/Inputs/TextArea';
import Button from '@/components/Button';
import { Theme } from '@/styled/theme';
import { mediaQueries } from '@/styled/media';

const Line = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  ::after {
    margin: 0 auto;
    content: ' ';
    width: 60px;
    height: 6px;
    background-color: #03a9f4;
    display: block;
  }
`;

const Form = styled.form`
  display: flex;
  flex-flow: nowrap column;
  padding-left: 20px;
  padding-right: 20px;

  ${mediaQueries.isTablet} {
    width: 50%;
    flex-flow: wrap row;

    > *:nth-child(1) {
      flex: calc(50% - 15px);
      margin-right: 15px;
    }
    > *:nth-child(2) {
      flex: calc(50% - 15px);
      margin-left: 15px;
    }

    /* TextArea */
    > *:nth-child(3) {
      flex: 100%;
    }

    > * {
      margin-bottom: 19px;
    }
  }
`;

const ContactItem = styled.div`
  > *:first-child {
    margin-bottom: 10px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQueries.isNotTablet} {
    &:first-child {
      margin-bottom: 40px;
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* Size of the submit button */
  padding-bottom: calc(1rem + 50px);
`;

const formLayout = css`
  display: flex;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  > * {
    flex: 1;
  }

  ${mediaQueries.isNotTablet} {
    flex-direction: column-reverse;
  }
`;

const ContactForm = () => {
  const theme = useTheme<Theme>();

  return (
    <section
      css={css`
        margin-top: 80px;
        margin-bottom: 60px;
      `}
    >
      <h2
        css={css`
          text-align: center;
          font-size: 60px;
          line-height: 80px;
        `}
      >
        GET IN TOUCH
      </h2>
      <Line />
      <p
        css={css`
          text-align: center;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 50px;
        `}
      >
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit enean commodo
        eget dolor aenean massa eget dolor aenean massa
      </p>
      <div css={formLayout}>
        <Form>
          <TextField placeholder="Name" />
          <TextField placeholder="Email" />
          <TextArea placeholder="Message" rows={6} />
          <Button>SEND MESSAGE</Button>
        </Form>
        <ContactInfo>
          <ContactItem>
            <AiOutlineMail size={38} color={theme.colors.primary} />
            <a href="mailto:martilukas7@gmail.com">martilukas7@gmail.com</a>
          </ContactItem>
          <ContactItem>
            <AiOutlinePhone size={38} color={theme.colors.primary} />
            <a href="tel:+4838938232">+48 389 382 32</a>
          </ContactItem>
        </ContactInfo>
      </div>
    </section>
  );
};

export default ContactForm;
