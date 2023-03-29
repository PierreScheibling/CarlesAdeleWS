import {Title} from "../styles/indexStyles";
import {FormWrapper, FormContainer, Form} from "../styles/contactStyles";
import Image from "next/image";
import { env } from 'process';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { useRouter } from "next/router";
import {motion as m} from "framer-motion";

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
        <m.FormWrapper initial={{opacity:0}} animate={{opacity:1}} exit={{opacity: 0}}>
            <Title>
                <h1>Contact</h1>
            </Title>
            <FormContainer>
                <div>
                    <h1>Lets get started</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi hic enim unde sunt porro quidem culpa nulla ratione ut neque!</p>
                    <Form >
                        <form ref={form} onSubmit={sendEmail}>
                            <label>Nom</label>
                            <input type="text" name="user_name" placeholder="Entrez votre nom" />
                            <label>Email</label>
                            <input type="email" name="user_email" placeholder="Entrez votre email" />
                            <label>Message</label>
                            <textarea name="message" placeholder="Rédigez votre message" />
                            <button type="submit" value="Send">Envoyer</button>
                        </form>
                    </Form>
                </div>
            </FormContainer>
        </m.FormWrapper>
    )
}