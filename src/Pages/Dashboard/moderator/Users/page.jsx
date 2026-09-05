import React from 'react'
import ModeratorUsersTable from '../../../../Components/Templates/Dashboard/templates/moderator/Users/ModeratorUsersTable'
import PageLabel from '../../../../Components/Templates/Dashboard/ui/PageLabel'

function ModeratorUsers() {
    return (
        <div className="space-y-10">
            <PageLabel label="مدیریت کاربران فروشگاه" />
            <ModeratorUsersTable />
        </div>
    )
}

export default ModeratorUsers