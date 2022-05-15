import * as Yup from 'yup';


export const postValidatorSchema = Yup.object().shape({
    newPostText: Yup.string()
        .max(10, 'Too long post')
});

export const messageValidatorSchema = Yup.object().shape({
    newMessageText: Yup.string()

        .max(10, 'Too long message')
});

export const LoginValidationSchema = Yup.object().shape({
    login: Yup.string()
        .email('Incorrect email')
        .required('Must be filled'),
    password: Yup.string()
        .min(2, 'More than 2 char')
        .required('Must be filled')
});


