import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/about-us.jpeg";
const AboutPage = () => {
    return (
        <main>
            <PageHero title="about" />
            <Wrapper className="page section section-center">
                <img src={aboutImg} alt="Dining Hall" />
                <article>
                    <div className="title">
                        <h2>our story</h2>
                        <div className="underline"></div>
                    </div>
                    <p>
                        <span>
                            <b>HYPE</b>
                        </span>{" "}
                        was founded by a group of creative visionaries who have worked in
                        the Fashion Industry for over 3 Decades. Our beginnings are humble
                        and modest, but we have eventually grown to become one of the
                        Household Names when it comes to Bespoke Furniture.
                        <br /> <br />
                        We are inspired by the designers who had changed the industry and
                        challenged the expections from in-animate objects such as
                        furniture. Our design philosophy is based on 3 Principles.
                        <br /> <br />
                        <div className="list-container">
                            <ul>
                                <li>Minimalism</li>
                                <li>Deconstructivisim</li>
                                <li>Modernism</li>
                            </ul>
                        </div>
                    </p>
                </article>
            </Wrapper>
        </main>
    );
};
const Wrapper = styled.section`
    text-align: justify;
    display: grid;
    gap: 4rem;
    span {
        color: var(--clr-primary-5);
    }
    .list-container {
        text-align: right;
        font-weight: bold;
    }
    img {
        width: 100%;
        display: block;
        border-radius: var(--radius);
        height: 500px;
        object-fit: cover;
    }
    p {
        line-height: 2;
        max-width: 45em;
        margin: 0 auto;
        margin-top: 2rem;
        color: var(--clr-grey-5);
    }
    .title {
        text-align: left;
    }
    .underline {
        margin-left: 0;
    }
    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
    }
`;
export default AboutPage;
