function useDebounce(fn,delay) {
  const {current} = useRef({fn,timer: null}) 

  useEffect(() => {
    current.fn = fn
  },[fn])

  return useCallback(function(...args) {
    if (current.timer) {
      clearTimeout(current.timer)
    }

    current.timer = setTimeout(() => {
      current.fn.apply(this,args)
    },delay)
  },[])
}