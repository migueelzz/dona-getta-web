interface TitleProps {
    children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({children}) => {
    return ( 
        <div className="w-full my-6 flex flex-col items-center">
            <h1 className="text-2xl text-zinc-700 font-semibold uppercase">
                {children}
            </h1>
            <div className="h-1 w-12 m-2 bg-colors-gold-dark"></div>
        </div>
    );
}
 
export default Title;