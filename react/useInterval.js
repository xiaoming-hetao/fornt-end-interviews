function useInterval(callback,delay) {
  const ref = useRef()

  useEffect(() => {
    ref.current = callback
  },[callback])

  useEffect(() => {
    if (delay !== null) {
      let interval = setInterval(() => {
        ref.current()
      },delay)

      return () => clearInterval(interval)
    }
  },[delay])
}