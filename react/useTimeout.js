function useTimeout(callback,delay) {
  const cacheCallback = useRef()

  useEffect(() => {
    cacheCallback.current = callback
  },[callback])

  useEffect(() => {
    if (delay !== null) {
      const timer = setTimeout(() => {
        cacheCallback.current()
      },delay)

      return () => clearTimeout(timer)
    }
  },[delay])
}