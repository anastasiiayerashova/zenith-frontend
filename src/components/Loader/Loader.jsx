import s from './Loader.module.css'

const Loader = () => {
    return (
        <div className={s.loader_wrap}>
            <span className={s.loader}></span>
        </div>
    )
}

export default Loader