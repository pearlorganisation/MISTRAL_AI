"use client";

import React from "react";
import styled from "styled-components";
import logo from "/public/Light_Logo.png";
import footer from "../utils/footer";
import Image from "next/image";

import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

function Footer() {
  return (
    <FooterStyled>
      <nav>
        <div className="logo-con">
          <div className="logo">
            <Image src={logo} width={36} alt="logo" />
            <h2>Logo</h2>
          </div>
          <div className="input">
            <input type="text" placeholder="Subscribe here..." />
            <button>&#8594;</button>
          </div>
          <p>
          Frontier AI
in your hands.
          </p>
          <div className="socials">
            <AiFillGithub />
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <BsDiscord />
            <AiFillLinkedin />
          </div>
        </div>
        <div className="links">
          {footer.map((item: any, index: number) => {
            return (
              <div key={index}>
                <h4>{item.title}</h4>
                <ul>
                  {item.links.map((text: any, index: number) => {
                    return (
                      <li key={index}>
                        <a href="">{text.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </nav>
      <p className="rights">
        <a href="">© 2024 Mistral AI, All rights reserved - Legal notice</a>
        <a href="">Privacy policy | Terms of service</a>
      </p>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  position: relative;
  z-index: 10;
  padding: 5rem 10rem 0 10rem;
  background-color: var(--color-bg);
  border-top: 1px solid var(--color-border);

  nav {
    display: flex;
    justify-content: space-between;
    gap: 3rem;

    .logo-con {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 50%;

      .input {
        position: relative;
      }

      .input input {
        width: 100%;
        padding: 1rem 0.8rem;
        border-radius: 8px;
        background-color: transparent;
        border: 1px solid var(--color-border);
        &::placeholder {
          color: var(--color-border);
          font-weight: 500;
        }
      }

      .input button {
        position: absolute;
        right: 2rem;
        top: 50%;
        transform: translateY(-50%);
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          color: orange;
          transform: translateY(-50%) translateX(0.5rem);
        }
      }

      .socials {
        display: flex;
        gap: 1rem;
        font-size: 1.6rem;
        svg {
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          &:hover {
            color: orange;
          }
        }
      }
    }

    .logo-con .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .links {
      flex: 1;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      h4 {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
      }

      li:not(:last-child) {
        margin-bottom: 1rem;
      }

      a {
        transition: all 0.3s ease-in-out;
        &:hover {
          color: orange;
        }
      }
    }
  }

  .rights {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    padding: 2rem 0;
    border-top: 1px solid var(--color-border);
  }
`;

export default Footer;
