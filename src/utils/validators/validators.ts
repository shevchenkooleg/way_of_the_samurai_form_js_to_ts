import {FormikErrors} from "formik";
import { FormValuesType } from "../../components/Profile/Posts/NewPostForm/NewPostForm";
import {NewMessageFormType} from "../../components/Dialogs/NewMessageForm/NewMessageForm";



export const postValidator = (values: FormValuesType) => {
    let errors: FormikErrors<FormValuesType> = {};
    if (values.newPostText.length > 100) {
        errors.newPostText = 'Too long message';
    }
    return errors;
}


export const messageValidator = (values: NewMessageFormType) => {
    let errors: FormikErrors<NewMessageFormType> = {};
    if (values.newMessageText.length > 100) {
        errors.newMessageText = 'Too long message';
    }
    return errors;
}