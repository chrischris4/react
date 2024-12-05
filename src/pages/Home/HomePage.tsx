import { ReactNode } from "react";

export default function HomePage() {

    let username: string = 'Celine';
    let age: number = 20;
    let isAdult: boolean = true;
    let listNumber: number[] = [1, 65, 47]
    let listWord: string[] = ['car', '65', '47']
    let listMix: (number | string)[] = ['car', 'House', 47]
    let listMixFix: [string, number] = ['car', 47];

    interface identityCardInterface {
        firstname: string;
        age: number;
        isMale: boolean;
    }

    let identityCard: identityCardInterface = {
        firstname: 'Yves',
        age: 17,
        isMale: false
    }

    let listIdentityCard: identityCardInterface[] = [
        {
            firstname: 'Yves',
            age: 22,
            isMale: true
        },
        {
            firstname: 'Yves',
            age: 22,
            isMale: true
        }
    ]

    let title: ReactNode = <h1> LE TITRE </h1>
    let isDisabled: boolean = false;


    return (
        <>
            {title}

            {/* On concatène une variable + du texte */}
            <div className="content mt-5 bg-slate-200">
                {username} ipsum dolor sit amet consectetur adipisicing elit. Nobis, ex ea numquam veritatis labore debitis similique ullam consectetur tempore iusto?
            </div>

            {/* On active ou non le bouton de manière dynamique */}
            <button disabled={isDisabled} > Valider </button>

            {/* On itère sur le tableau et on affiche chaque valeur */}
            {
                listWord.map((word: string, index: number) => (
                    <p key={index}>  {word}  </p>
                ))
            }

            {/* Je veux afficher "Yves est un homme" sinon "Yves est une femme" */}
            {identityCard.isMale ? "Yves est un homme" : "Yves est une femme"}
            <br />

            {/* Je veux afficher "Yves est un adulte" si il a plus de 18 ans */}
            {identityCard.age >= 18 && "Yves est un adulte"}


        </>
    )
}