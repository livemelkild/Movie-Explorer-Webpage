import * as React from "react"

type Props = {
  saveCharacter: (article: ICharacter | any) => void
}

export const AddCharacter: React.FC<Props> = ({ saveCharacter }) => {
  const [character, setCharacter] = React.useState<ICharacter | {}>()

  const handleCharacterData = (e: React.FormEvent<HTMLInputElement>) => {
    setCharacter({
      ...character,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewCharacter = (e: React.FormEvent) => {
    e.preventDefault()
    saveCharacter(character)
  }

  return (
    <form onSubmit={addNewCharacter} className="Add-character">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleCharacterData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleCharacterData}
      />
      <button disabled={character === undefined ? true : false}>
        Add character
      </button>
    </form>
  )
}
