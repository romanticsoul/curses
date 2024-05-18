import Link from 'next/link'

import { Button } from '@/shared/UI/button'

const MyEducationButton = () => {
  return (
    <Link href="#">
      <Button size="sm" variant="outlined">
        Мое обучение
      </Button>
    </Link>
  )
}

export default MyEducationButton
