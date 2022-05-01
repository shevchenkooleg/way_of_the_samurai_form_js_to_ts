import React, {ChangeEvent, useEffect, useState} from "react";
import style from './ProfileStatus.module.css'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}
type ProfileStatusStateType = {
    editMode: boolean
    status: string
}


export const ProfileStatusFunc = (props: ProfileStatusPropsType) => {

    let [state, setState] = useState('')
    let [editMode, setEditMode] = useState(false)

    // state:ProfileStatusStateType = {
    //     editMode: false,
    //     status: this.props.status
    // }

    useEffect(()=>{
        if (state !== props.status) {
            console.log('effect')
            setState(props.status)
        }
    }, [])

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        setState(e.currentTarget.value);
    }

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(state)
    }

    return (
        <div className={style.content}>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                           value={state}/>
                </div>
            }
        </div>

    )


}