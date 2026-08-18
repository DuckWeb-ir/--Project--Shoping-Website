import React from "react";

function HeroBenefitItem({ icon: Icon, value, title }) {
    return (
        <div className="flex flex-col items-center justify-center gap-1">
            <Icon className="size-12 text-primary-500" />
            <h3 className="font-bold text-lg mt-1.5">{value}</h3>
            <p className="text-center text-sm">{title}</p>
        </div>
    );
}

export default HeroBenefitItem;