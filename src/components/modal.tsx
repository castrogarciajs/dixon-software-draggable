import { XCircle } from 'lucide-react'
import type { OperationConceptProps } from 'types/concepts'
import { useModal } from '../stores/modal'

export default function Modal({ concept }: OperationConceptProps) {
  const onClose = useModal(state => state.close)

  return (
    <dialog position="~ fixed top-1/2" bg="blue" shadow="md" p="y-2" w="96" style={{ transform: 'translateY(-50%)' }} rounded="md" id="modal">
      <nav p="x-2" flex="~ justify-end items-center">
        <XCircle color="white" size="36" className="cursor-pointer" onClick={onClose} />
      </nav>
      <article p="x-12 b-5">
        <h2 className="text-2xl font-bold py-6">{concept.title}</h2>
        <p>{concept.description}</p>
      </article>
    </dialog>
  )
}
