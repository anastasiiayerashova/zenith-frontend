import s from './BackLink.module.css'
import { SlArrowLeft } from "react-icons/sl";
import { Link } from 'react-router-dom';

export default function BackLink({to}) {
    return (
        <Link to={to} className={s.link}>
                <SlArrowLeft size={38} className={s.icon} />
        </Link>    
    )
}