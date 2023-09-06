import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErroPage() {
    const error=useRouteError();
    console.error(error);

  return (
    <div>Opss!</div>
  )
}
