interface FooterTitleProps {
    children: React.ReactNode;
}

const FooterTitle: React.FC<FooterTitleProps> = ({children}) => {
    return ( 
        <div className="w-full flex flex-col gap-2">
            <h3 className="uppercase font-medium">
                {children}
            </h3>
            <div className="h-1 w-12 bg-colors-gold-dark"></div>
        </div>
    );
}
 
export default FooterTitle;