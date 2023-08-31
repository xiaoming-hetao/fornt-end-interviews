function useThrottle(fn,delay) {
  const {current} = useRef({fn,timer:null})

  useEffect(() => {
    current.fn = fn
  },fn)

  return useCallback(function(...args){
    if (!current.timer) {
      current.timer = setTimeout(() => {
        current.fn.apply(this,args)
        current.timer = null
      },delay)
    }
  },[])
}