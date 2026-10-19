import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import requester from "./axios"

export default function MemberForm(props) {
  const { memberId } = useParams()
  const [member, setMember] = useState()
  const [guilds, setGuilds] = useState([])

  useEffect(() => {
    const getGuilds = async () => {
      try {
        const response = await requester.get("/guilds")
        setGuilds(response.data)
      } catch (error) {
        console.error("Erro ao buscar as guildas", error)
      }
    }
    getGuilds()
  }, [])

  useEffect(() => {
    const getMember = async () => {
      try {
        const response = await requester.get(`/members/${memberId}`)
        setMember(response.data)
      } catch (error) {
        console.error("Erro ao buscar o membro:", error)
      }
    }
    if (memberId) getMember()
  }, [memberId])

  const addMember = async ({ name, guildId }) => {
    const created = { name, guildId }
    try {
      const response = await requester.post("/members", created)
      setMember(response?.data)
      props.updateMembers?.(response.data)
    } catch (error) {
      console.error("Erro ao adicionar membro", error)
    }
  }

  const editMember = async ({ id, name, guildId }) => { // <-- novo, a partir daqui
    const updated = { name, guildId }
    try {
      const response = await requester.patch(`/members/${id}`, updated)
      setMember(response.data)
    } catch (error) {
      console.error("Erro ao editar o membro:", error)
    }
  }

  const handleSubmit = memberId ? editMember : addMember // <-- novo, até aqui

  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(member) // <-- alterado (antes chamava addMember direto)
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 p-5 text-orange-500">
      <div className="flex flex-col gap-1">
        <label>Membro</label>
        <input
          type="text"
          name="name"
          role="input"
          defaultValue={member?.name}
          onChange={(e) =>
            setMember((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>
      <div className="flex flex-col gap-1">
        <label>Guilda</label>
        <select
          role="select"
          value={member?.guildId ?? ""}
          name="guild"
          onChange={(e) =>
            setMember((prev) => ({ ...prev, guildId: e.target.value }))
          }
        >
          <option value="" />
          {guilds.map((guild) => (
            <option key={guild.id} value={guild.id}>
              {guild.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="w-fit">
        Confirmar
      </button>
    </form>
  )
}