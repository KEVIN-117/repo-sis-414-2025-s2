import React from 'react'

function ProfilePage(props: any) {
    return (
        <div>
            {JSON.stringify(props, null, 2)}
        </div>
    )
}

export default ProfilePage