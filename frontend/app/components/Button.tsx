'use client'

import { IconType } from "react-icons";

import './Button.css'

interface ButtonProps {
    label: string,
    disabled?: boolean,
    outline?: boolean,
    small?: boolean,
    custom?: string,
    icon?: IconType,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({
    label,
    disabled,
    outline,
    small,
    custom,
    icon: Icon,
    onClick
}) => {
    return ( 
        <button
            disabled={disabled}
            className={`
                btn-efeito
                disabled:opacity-70 
                cursor:cursor-not-allowed 
                hover:opacity-80 
                transition 
                w-full
                text-xl
                uppercase
                flex 
                items-center 
                justify-center 
                gap-2
                ${outline ? "bg-white" : "bg-rose-400"}
                ${outline ? "text-zinc-950" : "text-white"}
                ${small ? "text-sm font-light" : "text-md font-semibold"}
                ${small ? "py-1 px-2 border-1" : "py-3 px-4 border-2"}
                ${custom ? custom : ""}
            `}
        >
            {Icon && <Icon size={24} />}
            {label}
        </button>
     );
}
 
export default Button;