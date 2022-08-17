type Props = {
    children: string
    size? : 'small' | 'medium' | 'large'
}




export function Button({ children, size='medium' , ...props }: Props) {

    let style = {padding : '1rem'}
    
    if (size === 'small') {
        style = {...style, padding : '0.5rem'}
    } 
    if (size === 'large') {
        style = {...style, padding : '3rem'}
    }

    return (
        <button className="button" style={style} {...props} >
            {children}
        </button>
    )
}