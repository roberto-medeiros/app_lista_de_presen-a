import './styles.css'

//Typescript, exportanto a tipagem colocando export na frente
export type CardProps = {
    name: string;
    time: string;
}

export function Card(props: CardProps) {
    return(
        <div className="card">
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
}