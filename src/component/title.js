export default function Title(props) {
    return(
        <div className="title">
            <h1 className="mainTitle">{props.mainTitle}</h1>
            <p className="subTitle">{props.subTitle}</p>
        </div>
    )
}