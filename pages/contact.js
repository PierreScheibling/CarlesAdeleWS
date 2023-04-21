import {ContactWrapper, Title, Content, LeftSide, Icons, RightSide, FormContainer, Form} from "../styles/contactStyles";
import Image from "next/image";
import { env } from 'process';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { useRouter } from "next/router";
import { motion } from 'framer-motion';
import {pageAnimation, drBackAnim} from "../styles/animations";

export default function Contact() {
    const router = useRouter();

    //EmailJS
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAILJS_KEY).then((result) => {
            console.log(result.text);
            router.push({pathname: "/success"})
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <motion.div
        variants={pageAnimation}
        exit="exit"
        initial="hidden"
        animate="show"
        >
            <ContactWrapper>
                <Title variants={drBackAnim}>
                    <h1>CONTACT</h1>
                </Title>
                <Content variants={drBackAnim}>
                    <LeftSide>
                        <Icons>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#535D6B" d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
                            <div>
                                <h3>ADRESSE</h3>
                                <a href="https://goo.gl/maps/wfnwW37DVYsRBKqCA" target="_blank">
                                <p>52 rue des Remparts</p>
                                <p>33000 BORDEAUX</p>
                                </a>
                            </div>
                        </Icons>
                        <Icons>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#535D6B" d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
                            <div>
                                <h3>MAIL</h3>
                                <a
                                href="mailto:contact@ac-avocat.fr"
                                target="_blank"
                                rel="contact@ac-avocat.fr"
                                ><p>contact@ac-avocat.fr</p></a>
                            </div>
                        </Icons>
                        <Icons>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#535D6B" d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z"/></svg>
                            <div>
                                <h3>TELEPHONE</h3>
                                <p>06 60 67 95 95</p>
                            </div>
                        </Icons>
                        <Icons>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#535D6B" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            <div>
                                <h3>LINKEDIN</h3>
                                <a href="https://www.linkedin.com/in/ad%C3%A8le-carles-carles-avocat/" target="_blank"><p>Adèle CARLES</p></a>
                            </div>
                        </Icons>
                    </LeftSide>
                    <RightSide>
                        <FormContainer>
                            <div>
                                <h2>Une question ? Prenons rendez-vous</h2>
                                <Form >
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div>
                                            <label>Nom</label>
                                            <input type="text" name="user_name" placeholder="Entrez votre nom" />
                                        </div>
                                        <div>
                                            <label>Téléphone</label>
                                            <input type="tel" name="user_phone" placeholder="Entrez votre numéro de téléphone" />
                                        </div>
                                        <div>
                                            <label>Email</label>
                                            <input type="email" name="user_email" placeholder="Entrez votre email" />
                                        </div>
                                        <div className="message">
                                            <label>Message</label>
                                            <textarea name="message" placeholder="Rédigez votre message" />
                                        </div>
                                        <button type="submit" value="Send">Envoyer</button>
                                        <p>En cliquant sur le bouton envoyer, j’accepte la collecte et le traitement des données personnelles afin d’être recontacté par le Cabinet</p>
                                    </form>
                                </Form>
                            </div>
                        </FormContainer>
                    </RightSide>
                </Content>
            </ContactWrapper>
        </motion.div>
    )
}