// Ici le props est un objet qui contient les props de notre bouton
// Voir la page ContactPage

export default function Button(props: string | any) {
    const {className, text, type} = props;

    return (
    <>
        <button type={type}
            className={`py-1.5 px-3 rounded-md ${className}`}>
            { text }
        </button>
    </>
    )
}