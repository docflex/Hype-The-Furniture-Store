import React from "react";
import styled from "styled-components";
const Contact = () => {
    return (
        <Wrapper>
            <div className="section-center">
                <h3>Join our Newsletter and Get 20% Off</h3>
                <div className="content">
                    <p>
                        Subscribe to our Newsletter to always be updated about new
                        additions to our product lineup. You would also recieve our semi-annual
                        LookBook that will feature the <b>{new Date().getFullYear()} Fall-Winter 
                        Collection.</b>
                    </p>
                    <form className="contact-form">
                        <input
                            type="email"
                            className="form-input"
                            placeholder="enter email"
                        />
                        <button type="submit" className="submit-btn">
                            subscribe
                        </button>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.section`
    padding: 5rem 0;
    h3 {
        text-transform: none;
    }
    p {
        text-align: justify;
        line-height: 2;
        max-width: 45em;
        color: var(--clr-grey-5);
    }
    .contact-form {
        width: 90vw;
        max-width: 500px;
        display: grid;
        grid-template-columns: 1fr auto;
    }

    .form-input,
    .submit-btn {
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border: 2px solid var(--clr-black);
    }
    .form-input {
        border-right: none;
        color: var(--clr-grey-3);
        border-top-left-radius: var(--radius);
        border-bottom-left-radius: var(--radius);
    }
    .submit-btn {
        border-top-right-radius: var(--radius);
        border-bottom-right-radius: var(--radius);
    }
    .form-input::placeholder {
        color: var(--clr-black);
        text-transform: capitalize;
    }
    .submit-btn {
        background: var(--clr-primary-5);
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        cursor: pointer;
        transition: var(--transition);
        color: var(--clr-black);
    }
    .submit-btn:hover {
        color: var(--clr-white);
    }
    @media (min-width: 992px) {
        .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 8rem;
            margin-top: 2rem;
        }
        p {
            margin-bottom: 0;
        }
    }
    @media (min-width: 1280px) {
        padding: 15rem 0;
    }
`;

export default Contact;
