import React, {ChangeEvent} from "react";
import style from './ProfileStatus.module.css'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}
type ProfileStatusStateType = {
    editMode: boolean
    status: string
}


export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state:ProfileStatusStateType = {
        editMode: false,
        status: this.props.status
    }

    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        this.setState({status: e.currentTarget.value});
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }

    }

    render = () => {
        return (
            <div className={style.content}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>

        )
    }


}