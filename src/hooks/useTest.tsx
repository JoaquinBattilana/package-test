import { useEffect, useState } from "react"

interface UseTestReturn {
  state: number
}

type UseTest = () => UseTestReturn

const useTest : UseTest = () => {
  const [state, setState] = useState<number>(0);

  useEffect(() => {
    if(state === 0)
      setState(1)
    }
  , [])

  return { state }
};

export default useTest;
