import React from "react";
import style from './NewMessageForm.module.css'
import {useFormik} from "formik";
import {messageValidator} from "../../../utils/validators/validators";

type TextAreaFramePropsType = {
    addNewMessage: (newMessageText:string) => void
}
export type NewMessageFormType = {
    newMessageText: string
}


const NewMessageForm = (props: TextAreaFramePropsType) => {

    const formik = useFormik({
        initialValues: {
            newMessageText: ''
        },
        validate: messageValidator,
        onSubmit: (value, action) => {
            props.addNewMessage(value.newMessageText)
            action.resetForm({values: {newMessageText: ''}})
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={style.content}>
                <textarea className={style.textArea}
                          id="newMessageText"
                          name="newMessageText"
                          value={formik.values.newMessageText}
                          onChange={formik.handleChange}/>
                {formik.errors.newMessageText ? <div>{formik.errors.newMessageText}</div> : null}
                <button className={style.btn} type="submit">Send</button>
            </div>
        </form>

    )
}

export default NewMessageForm;
