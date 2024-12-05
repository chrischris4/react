export default function Message(props:any) {

    const {category, title, content, author} = props;



    return(
        <div className="bg-slate-400 p-4 border rounded-md ">
                            <h2 className="text-2xl"> {title}</h2>
                            <p> {category} </p>
                            <p> {content} </p>
                            <p> {author} </p>
                        </div>
    )
}