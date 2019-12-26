import React, { Fragment } from 'react'
import Username from './Username/Username';
import UserInfo from './UserInfo/UserInfo';
import Avatar from './Avatar/Avatar'
import followers from '../../../../assets/icons/followers-icon.png'
import location from '../../../../assets/icons/location -con.png'
import star from '../../../../assets/icons/star-icon.png'
import organization from '../../../../assets/icons/organization-icon.png'
import repositorie from '../../../../assets/icons/repositorie-icon.png'

import './User.css'

function User (props) {
    const {profile, name, login, textOrganization, mapLocation, numStar, numRepositories, numFollowers } = props
    return(       
        <div className= 'container__user' >
            <Avatar  
            profile = {profile} />
            <Username  
            description_title='user__name'
            description_P= 'user__login'
            name={name} 
            login={login}/>
            
                <UserInfo
                icon = {organization}
                alt = 'Organization icon'
                class_icon='icon'
                children  = {textOrganization}
                />
                <UserInfo
                icon = {location}
                alt= 'location icon'
                class_icon='icon'
                children= {mapLocation}
                />
                <UserInfo
                icon = {star}
                alt= 'star icon'
                class_icon='icon'
                children= {numStar}
                />
                <UserInfo
                icon = {repositorie}
                alt= 'repositories icon'
                class_icon='icon'
                children= {numRepositories}
                />
                <UserInfo
                icon = {followers}
                alt= 'star icon'
                class_icon='icon'
                children= {numFollowers}
                />
        </div>
    )
}

export default User