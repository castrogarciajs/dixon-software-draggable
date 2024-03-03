import { BadgeInfo, Equal } from 'lucide-react'
import confetti from 'canvas-confetti'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import type { ResultProps } from 'types/operator'
import { useModal } from '../stores/modal'

export default function Info({ children, operation }: ResultProps) {
  const [won, setWon] = useState(false)
  const onOpen = useModal(state => state.open)

  const onResultKid = async (event: ChangeEvent<HTMLInputElement>) => {
    if (operation.result === Number.parseInt(event.target.value)) {
      setWon(true)
      await confetti()
    }
  }
  return (

    <aside flex="~ justify-between items-center" p="x-8 y-6">
      <div flex="~ items-center gap-3">
        <h3 border="~ 2 blue" outline="none" className="size-16 text-2xl" rounded="full" flex="~ justify-center items-center">
          {operation.numberOne}
        </h3>
        {children}
        <h3 border="~ 2 blue" outline="none" className="size-16 text-2xl" rounded="full" flex="~ justify-center items-center">
          {operation.numberTwo}
        </h3>
        <Equal />
        <input type="text" border="~ 2 blue" outline="none" className="size-16 text-2xl text-center" rounded="full" disabled={won} onChange={onResultKid} />
      </div>

      <BadgeInfo size="44" onClick={onOpen} className="cursor-pointer" />

    </aside>

  )
}
