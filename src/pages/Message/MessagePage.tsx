import { useState } from "react"
import Message from "../../components/Message"

export default function MessagePage() {

    const [listMessage, setListMessage] = useState<any>(JSON.parse(localStorage.getItem("messages") || "[]"))

    return (
        <>
            <h1 className="text-2xl">Message Page</h1>
            <section className="w-1/2 m-auto flex flex-col items-center justify-center md:flex-row gap-4 flex-wrap">
                {
                    listMessage.map((message: any, index: number) => (
                        <Message
                        key={index} // Ajout de la clé unique pour chaque message
                        category={message.category}
                        title={message.title}
                        content={message.content}
                        author={message.author}
                        index={index}
                        />
                    ))

                }
            </section>


        </>
    )
}