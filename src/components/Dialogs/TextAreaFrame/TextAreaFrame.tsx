import React from "react";
import style from './TextAreaFrame.module.css'
import {useFormik} from "formik";

type TextAreaFramePropsType = {
    addNewMessage: (newMessageText:string) => void
}


const TextAreaFrame = (props: TextAreaFramePropsType) => {

    const formik = useFormik({
        initialValues: {
            newMessageText: ''
        },
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
                <button className={style.btn} type="submit">Send</button>
            </div>
        </form>

    )
}

export default TextAreaFrame;
