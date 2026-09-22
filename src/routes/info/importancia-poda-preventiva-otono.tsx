import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/info/importancia-poda-preventiva-otono')({
  beforeLoad: () => {
    throw redirect({
      to: '/info/importancia-poda-preventiva-invierno',
      statusCode: 301,
    })
  },
})
