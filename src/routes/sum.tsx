import { Plus } from 'lucide-react'
import { useDragAndDrop } from '@formkit/drag-and-drop/react'
import Info from '../components/info'
import { concepts, results } from '../lib/const'
import Modal from '../components/modal'
import Box from '../components/box'
import Image from '../components/image'

const boxMocksFirst = ['dungeon_master.exe', 'map_1.dat', 'map_2.dat', 'character1.txt', 'character2.txt', 'shell32.dll', 'README.txt']

const boxMocksSecond = ['map_2.dat', 'character5.txt', 'character8.txt', 'shell324.dll', 'README1.txt']

export default function Sum() {
  const [boardFirst, rocketsFirst] = useDragAndDrop<HTMLDivElement, string>(boxMocksFirst, {
    group: 'A',
  })

  const [boardSecond, rocketsSecond] = useDragAndDrop<HTMLDivElement, string>(boxMocksSecond, {
    group: 'A',
  })
  return (
    <>
      <Modal concept={{ ...concepts.sum }} />
      <Info operator={{ isSum: true }} operation={{ ...results.sum.lvlOne }}>
        <Plus />
      </Info>
      <section mt="10" className="container flex items-center justify-center" shadow="md" bg="gray" w="full">
        <article flex="1">
          <div ref={boardFirst} className="size-96 shadow-md bg-blue">
            {rocketsFirst.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/rocket.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
        <article flex="1">
          <div ref={boardSecond} className="size-96 shadow-md bg-blue">
            {rocketsSecond.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/rocket.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
      </section>
    </>
  )
}
