import { useFormik } from "formik";
import React from "react";
import style from "./NewPostsFormik.module.css";

type NewPostsFormikPropsType = {
    addNewPost: (newPostText:string) => void
}


const NewPostsFormik = (props: NewPostsFormikPropsType) => {

    const formik = useFormik({
        initialValues: {
            newPostText: '',
        },
        onSubmit: (values, actions) => {
            props.addNewPost(values.newPostText)
            actions.resetForm({values: {newPostText: ''}})
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={style.newPosts}>
                <div>Add new post</div>
                <textarea className={style.textArea}
                          id="newPostText"
                          name="newPostText"
                          onChange={formik.handleChange}
                          value={formik.values.newPostText}/>
                <button type="submit" className={style.button}>Add</button>
            </div>
        </form>

    )
}

export default NewPostsFormik;
