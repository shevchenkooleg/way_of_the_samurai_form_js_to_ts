import {useFormik} from "formik";
import React from "react";
import style from "./NewPostForm.module.css";
import {postValidator} from "../../../../utils/validators/validators";

type NewPostsFormikPropsType = {
    addNewPost: (newPostText: string) => void
}
export type FormValuesType = {
    newPostText: string
}

const NewPostForm = (props: NewPostsFormikPropsType) => {

    const formik = useFormik({
            initialValues: {
                newPostText: '',
            },
            validate: postValidator,
            onSubmit: (values, actions) => {
                props.addNewPost(values.newPostText)
                actions.resetForm({values: {newPostText: ''}})
            },
        })
    ;

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={style.newPosts}>
                <div>Add new post</div>
                <textarea className={style.textArea}
                          id="newPostText"
                          name="newPostText"
                          onChange={formik.handleChange}
                          value={formik.values.newPostText}/>
                {formik.errors.newPostText ? <div>{formik.errors.newPostText}</div> : null}
                <button type="submit" className={style.button}>Add</button>
            </div>
        </form>

    )
}

export default NewPostForm;
