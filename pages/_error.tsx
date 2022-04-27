import { LenderPageError } from "lib/types"

function Error({ statusCode }: LenderPageError) {
  return (
    <>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </>
  )
}

export default Error