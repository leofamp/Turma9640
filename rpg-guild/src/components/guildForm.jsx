import { useParams } from "react-router-dom"

export default function GuildForm(props){
    const { guildId } = useParams()
    return(
        <form className="flex flex-col gap-4 p-5 text-orange-500">
            Guilda {guildId}
        </form>
    )

}