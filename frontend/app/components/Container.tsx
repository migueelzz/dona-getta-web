interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return ( 
        <div className="md:max-w-[1280px] mx-auto x1:px-20 md:px-2 px-4 overflow-x-hidden">
            {children}
        </div>
     );
}
 
export default Container;