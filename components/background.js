import { useEffect, useState } from 'react'

export default function Background(props) {
  const [translate, setTranslate] = useState(0)
  const [visibility, setVisibility] = useState(true)
  
  useEffect(() => {
    setTranslate(props.translate/props.translateScale)
    let currPos = props.initialPos - translate
    let invisiblePos = -window.innerHeight / props.translateScale
    if(currPos < invisiblePos * 1.15 && visibility) {
      setVisibility(false)
    } else if (currPos > invisiblePos * 1.15 && !visibility) {
      setVisibility(true)
    }
  }, [props.translate])
  return (
    <>
    <div 
      className="background" 
      style={{
        transform: `translateY(${props.initialPos - translate}px)`,
        zIndex: props.zIndex - 1,
        display: visibility ? 'block' : 'none'
      }}></div>
    <style jsx>{`
        .background {
          position: fixed;
          top: 0;
          z-index: -1;
          background-image: url(${props.imgSrc});
          background-size: cover;
          background-position: center;
          height: 100vh;
          width: 100vw;
          perspective: 100px;
        }
      `}</style>
    </>
  );
}