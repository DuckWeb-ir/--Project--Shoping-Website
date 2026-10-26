import React from 'react'
import SectionTitle from '../../../../../Common/SectionTitle'

function TabContent({ tabs, activeTab }) {

    const selectedTab = tabs.find(
        (tab) => tab.id === activeTab
    );

    const ActiveComponent = selectedTab.component;

    return (
        <div className='box-style  mt-2 pb-200'>
            <SectionTitle text={selectedTab.label} icon={selectedTab.icon} />

            <ActiveComponent />

        </div>
    )
}

export default TabContent