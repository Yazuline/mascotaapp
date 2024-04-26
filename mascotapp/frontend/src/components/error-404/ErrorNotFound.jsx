import { Button } from "@mui/material"

export const ErrorNotFound = () => {
  return (
    <div className="mt-[10rem] flex flex-col justify-center items-center">
        <img  src="/error404.png" alt="error404"/>
        <Button onClick={() => window.history.back()}>Retornar</Button>
    </div>
  )
}
