import React from 'react'
import Username from '../User/Username/Username'
import UserInfo from '../User/UserInfo/UserInfo'
import Star from '../../../../assets/icons/star-icon.png'

import './Repositories.css'

const Repositories = props => {
    const {repoName, repoDescription, repoStargazersCount }  = props

        return(
            <main className='container_repos'>
                
                    <Username
                        name= {repoName}
                        login= {repoDescription}
                        description_title='repos_title'
                        description_p='repos_p'/>
                
                <div className= 'star'>
                    <UserInfo
                    icon = {Star}
                    alt = 'organization icon'
                    class_icon= 'icon__repositories'>
                    {repoStargazersCount} </UserInfo>
                </div>
            </main>
        )
    
}

export default Repositories
