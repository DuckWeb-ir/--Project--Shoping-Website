import React from 'react'
import Button from '../../../../../Ui/‌Btn'

function ProductTabs({ tabs, activeTab, setActiveTab }) {
    return (
        <div className='sticky top-2 z-50'>
            <div className="flex gap-2 box-style p-3 ">
                {tabs.map((tab) => (
                    <Button
                        icon={tab.icon}
                        variant={activeTab == tab.id ? 'primary':'secondary'}
                        onClick={()=> setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default ProductTabs