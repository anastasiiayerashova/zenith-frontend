import s from './Popover.module.css'

const Popover = () => {
    
      return (
           <div className={s.content}>
              <div className={s.desc}>
                 <h3 className={s.desc_title}>Thank you for your order!</h3>
                 <p className={s.desc_text}>You will be contacted shortly with delivery time. Please stay touch.</p>
              </div>
           </div>
  );
};

export default Popover