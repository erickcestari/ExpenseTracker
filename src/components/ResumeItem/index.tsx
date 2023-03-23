import * as C from './styles'

type Props = {
    title: string;
    value: number;
    color?: string;
}

export const ResumeItem = ({title,value, color}:Props) =>{
    return(
        <C.Container>
            <C.Title>{title}</C.Title>
            <C.Info color={title === 'Balance'? value <= 0? 'red' : 'green' : undefined}>$ {value}</C.Info>
        </C.Container>
    )

}