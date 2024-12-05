import Button from "./ui/Button"
import { useState } from "react";

export default function Form() {

    
    interface Message {
        title: string;
        category: string;
        content: string;
        author: string;
    }

    // REGLE 1 --> on ne peut pas modifier directement form, nous devons utiliser la fonction setForm()
    const [form, setForm] = useState<Message>({
        title: "",
        category: "",
        content: "",
        author: ""
    });

    function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        // ENVOI MON FORMULAIRE AU BACK / STOCKE DANS LE LOCAL STORAGE
        evt.preventDefault();
        const messageList = JSON.parse(localStorage.getItem("messages") || "[]");
        messageList.push(form);
        localStorage.setItem("messages", JSON.stringify(messageList))
    }

    function handleChange(evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void {
        const { name, value } = evt.target;
        setForm({ ...form, [name]: value })
    }

    const [listAuthor, setListAuthor] = useState<any>(JSON.parse(localStorage.getItem("authors") || "[]"))


    return(
        <form onSubmit={(evt) => handleSubmit(evt)} className="flex flex-col w-1/2 m-auto gap-3 mt-4">

                <label htmlFor="title">Titre</label>
                <input onChange={(evt) => handleChange(evt)} type="text" name="title" id="title" className='border-2 border-grey' />

                <label htmlFor="category">Catégorie</label>
                <select onChange={(evt) => handleChange(evt)} name="category" id="category" className='border-0 py-1.5 pl-2 rounded-md shadow-sm'>
                    <option value="">Selectionne une categorie</option>
                    <option value="front">front</option>
                    <option value="back">back</option>
                    <option value="fullstack">fullstack</option>
                    <option value="other">Autres</option>
                </select>

                <label htmlFor="author">Auteur</label>
                <select onChange={(evt) => handleChange(evt)} name="author" id="author" className='border-0 py-1.5 pl-2 rounded-md shadow-sm'>
                <option value="">Sélectionnez un auteur</option>
                {listAuthor.map((author: any, index: number) => (
                    <option key={index} value={`${author.firstName} ${author.lastName}`}>
                        {author.firstName} {author.lastName}
                    </option>
                ))}
                </select>

                <label htmlFor="content">Votre message</label>
                <textarea onChange={(evt) => handleChange(evt)} className='border-2 border-grey resize rounded-md' name="content" id="content"></textarea>

                {/* Utilisation du composant Button avec des props */}
                <Button
                    className={"text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"}
                    text={"Envoyer votre message"}
                    type={"submit"}
                />

            </form>
    )
}