import React from 'react';
import styles from './Button.module.css'

type Props = {
    text: string,
    icon?: React.ReactNode,
    variant?: "primary" | "secondary"
    onClick: () => void;
    
}

const Button: React.FunctionComponent<Props> = ({text, icon, variant="primary", onClick}) => {

return (
        <button className={variant === 'primary'? styles.buttonPrimary : styles.buttonSecondary} onClick={onClick} >
            {text} {icon && icon}
        </button>
    );
};

export default Button;