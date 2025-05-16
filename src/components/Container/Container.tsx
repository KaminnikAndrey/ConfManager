interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    maxWidth?: string | number;
}

export const Container = ({ children, maxWidth = '1170px', ...props }: ContainerProps) => {
    return (
        <div
            style={{ maxWidth, margin: '0 auto', padding: '0 15px'}}
            {...props}
        >
            {children}
        </div>
    );
};