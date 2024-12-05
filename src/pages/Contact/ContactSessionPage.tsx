// import { useState } from "react";
// import Button from "../../components/ui/Button";

// export default function ContactSessionPage() {

//    /*  const form2 = {
//         title : "Pierre",
//         category : "",
//         content : ""
//     }  */

//     interface Message {
//         title: string;
//         category: string;
//         content: string;
//     }
    
//     // REGLE 1 --> on ne peut pas modifier directement form, nous devons utiliser la fonction setForm()
//     const [form, setForm] = useState<Message>({
//         title : "Loris",
//         category : "",
//         content : ""
//     });

//     /* const [listNumber, setListNumber] = useState<any>([]);
//     const [user, setUser] = useState<string>('Issa');
//     const [age, setAge] = useState<number>(18);
//     const [isAdult, setIsAdult] = useState<boolean>(true); */

//     function handleSubmit(evt:React.FormEvent<HTMLFormElement>) {
//         // ENVOI MON FORMULAIRE AU BACK / STOCKE DANS LE LOCAL STORAGE
//         evt.preventDefault();

//         const messageList = JSON.parse(localStorage.getItem("messages") || "[]");
//         messageList.push(form);
//         localStorage.setItem("messages", JSON.stringify(messageList))

//        /*  let newUser = ...user;
//         newUser="Diane"; */
//         /*
//         setUser("Diane");

//         const newListNumber = [...listNumber]
//         newListNumber.push(5);
//         setListNumber(newListNumber)
//         // .push()
//         setListNumber([...listNumber, 5])
//         // .unshift()
//         setListNumber([5, ...listNumber]) */
//     }

//     function handleChange(evt:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>):void {

//         const name:string = evt.target.name ;
//         const value = evt.target.value;

//         const newForm:Message = {...form};
//         newForm[name] = value;
//         setForm(newForm);

//         //const {name, value} = evt.target;
//         //setForm({...form, [name] : value})
//     }

//     return (
//         <>
//             <h1 className="text-2xl">Contact Page</h1>
//             {form.title} <br />
//             {form.category} <br />
//             {form.content}

//             <form onSubmit={ (evt) => handleSubmit(evt) } className="flex flex-col w-1/2 m-auto gap-3 mt-4">

//                 <label htmlFor="title">Titre</label>
//                 <input onChange={ (evt) => handleChange(evt) } type="text" name="title" id="title" className='border-2 border-grey' />

//                 <label htmlFor="category">Catégorie</label>
//                 <select onChange={ (evt) => handleChange(evt) } name="category" id="category" className='border-0 py-1.5 pl-2 rounded-md shadow-sm'>
//                     <option value="">Selectionne une categorie</option>
//                     <option value="front">front</option>
//                     <option value="back">back</option>
//                     <option value="fullstack">fullstack</option>
//                     <option value="other">Autres</option>
//                 </select>

//                 <label htmlFor="content">Votre message</label>
//                 <textarea onChange={ (evt) => handleChange(evt) } className='border-2 border-grey resize rounded-md' name="content" id="content"></textarea>

//                 <Button
//                     className={"text-white bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600"} 
//                     text={"Envoyer votre message"}
//                     type={"submit"}
//                     getInfo={getInfo}
//                 />

//                 <Button
//                     className={"text-blue bg-red-600 hover:bg-red-500 focus-visible:outline-red-600"} 
//                     text={"Envoyer votre message"}
//                     type={"submit"}
//                 />
//             </form>
//         </>
//     )
// }