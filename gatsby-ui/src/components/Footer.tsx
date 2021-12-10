import styled from '@emotion/styled';
import { forwardRef, ReactElement } from 'react';
import ContactForm from './ui-components/ContactForm';

const FooterStyles = styled.footer`
  background-color: var(--dpm-black, black);
  min-height: 100vh;
  display: grid;
  align-content: center;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);

  h3 {
    max-width: 600px;
    width: 100%;
    grid-column: 2/ 6;
    /* margin: auto; */
    justify-self: center;
  }
  form {
    grid-column: 2/6;

    input,
    textarea,
    label {
      background-color: var(--dpm-black, black);
    }
  }

  .social-links {
    width: 100%;
    grid-column: 2/6;
    margin: var(--spacing-lg) auto;
    display: flex;
    justify-content: end;

    a {
      color: var(--white);
      text-decoration: none;
      position: relative;
      &::after {
        background-color: var(--white);
        content: '';
        display: block;
        left: 0;
        right: 0;
        position: absolute;
        height: 2px;
        background-color: white;
        transform: scaleX(0);
        transition: transform 250ms ease-out;
      }
      &:hover {
        ::after {
          transform: scaleX(1);
          transform-origin: top left;
        }
      }
      &:not(:last-child) {
        margin-right: var(--spacing-xs);
      }
    }
  }
`;

const Footer = forwardRef((props, ref) => (
  <FooterStyles ref={ref} id="contact">
    <h3>Get In Touch</h3>
    <ContactForm />
    <div className="social-links">
      <a
        href="https://www.twitter.com/lqm_19"
        rel="noopener noreferrer"
        target="_BLANK"
      >
        Twitter
      </a>
      <a
        href="https://www.linkedin.com/in/luke-miller-b4951b145/"
        rel="noopener noreferrer"
        target="_BLANK"
      >
        LinkedIn
      </a>
      <a
        href="https://www.github.com/lukemiller93"
        rel="noopener noreferrer"
        target="_BLANK"
      >
        Github
      </a>
    </div>
  </FooterStyles>
));

export default Footer;
