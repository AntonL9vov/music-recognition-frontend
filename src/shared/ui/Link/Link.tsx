import {NavLink} from "react-router-dom";
import {ReactNode} from "react";
import './link.css'

export const Link = ({to, children}: { to: string, children: ReactNode }) => {
    return (
        <NavLink to={to} className={'link'}>
            {children}
        </NavLink>
    )
}