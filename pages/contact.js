import {Title} from "../styles/indexStyles";
import {FormWrapper, FormContainer, Form} from "../styles/contactStyles";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import {motion as m} from "framer-motion";

export default function Contact() {
    const router = useRouter();

    //Formik logics
    const formik = useFormik({
        initialValues: {
            name: "",
            prenom: "",
            email: "",
            message: "",
        },
        validationSChema: Yup.object({
            name: Yup.string().required('Le nom doit être renseigné'),
            prenom: Yup.string().required('Le prénom doit être renseigné'),
            email: Yup.string().email("Email erroné").required("L'email doit être renseigné"),
            message: Yup.string().required("Vous n'avez renseigné aucun message"),

        }),
        onSubmit: (values) => {
            console.log("form submitted");
            console.log(values);
            router.push({pathname: '/success', query: values});
        },
    });

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
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="name">{formik.touched.name && formik.errors.name ? formik.errors.name : "Nom"}</label>
                            <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="Entrez votre nom" />
                            <label htmlFor="name">Prénom</label>
                            <input type="name" name="prenom" value={formik.values.prenom} onChange={formik.handleChange} placeholder="Entrez votre prénom" />
                            <label htmlFor="email">{formik.errors.email ? formik.errors.email : "Email"}</label>
                            <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} placeholder="Entrez votre email" />
                            <label htmlFor="message">Message</label>
                            <input type="text" name="message" value={formik.values.message} onChange={formik.handleChange} placeholder="Message" />
                            <button type="submit">Envoyer</button>
                        </form>
                    </Form>
                </div>
            </FormContainer>
        </m.FormWrapper>
    )
}