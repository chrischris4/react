import Button from "../../components/ui/Button";
import { useState } from "react";

export default function AuthorPage() {

    interface Author {
        firstName: string;
        lastName: string;
    }

    const [form, setForm] = useState<Author>({
        firstName: "",
        lastName: "",
    });

    function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
        // ENVOI MON FORMULAIRE AU BACK / STOCKE DANS LE LOCAL STORAGE
        evt.preventDefault();
        const authorList = JSON.parse(localStorage.getItem("authors") || "[]");
        authorList.push(form);
        localStorage.setItem("authors", JSON.stringify(authorList))
    }

    function handleChange(evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void {
        const { name, value } = evt.target;
        setForm({ ...form, [name]: value })
    }


    const [listAuthor, setListAuthor] = useState<any>(JSON.parse(localStorage.getItem("authors") || "[]"))

    return(
<div>
        <section className="w-1/2 m-auto flex flex-col items-center justify-center md:flex-row gap-4 flex-wrap">
        {listAuthor.map((author: any, index: number) => (
                    <div key={index} className="p-4 border rounded-md bg-gray-100">
                        <h2 className="text-lg font-bold">{author.firstName}</h2>
                        <p className="text-sm">{author.lastName}</p>
                    </div>
                ))}
            </section>
        <form onSubmit={(evt) => handleSubmit(evt)} className="flex flex-col w-1/2 m-auto gap-3 mt-4">
                <input onChange={(evt) => handleChange(evt)} type="text" name="firstName" id="firstName" className='border-2 border-grey' />
                <input onChange={(evt) => handleChange(evt)} type="text" name="lastName" id="lastName" className='border-2 border-grey' />

                <Button
            className={"text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"}
            text={"Ajouter un auteur"}
            type={"submit"}
            />
        </form>
        </div>
    )
}