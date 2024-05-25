import React, { Children } from 'react'
import { Link } from 'react-router-dom'
import "./RouteCard.scss"

function RouteCard({route, Icon, label, children}) {
    return (
        <Link to={route} className="card">
            <Icon className="icon" />
            <div className="label">{label}</div>
            <div className="content">{children}</div>
        </Link>
    )
}

export default RouteCard
