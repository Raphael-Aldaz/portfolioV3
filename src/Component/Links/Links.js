import { useEffect, useRef, useState } from 'react'
import gitLogo from '../../assets/pictures/Git_icon.svg.png'
import linkedinLogo from '../../assets/pictures/174857.png'

import './Links.scss'
const Links = () => {
  const links = useRef(null)
  const [openLinks, setOpenLinks] = useState(false)
  const handleClick = () => {
    setOpenLinks(!openLinks)
  }
  useEffect(()=> {
    if(openLinks){
      links.current.classList.add('openTaMere')
    }else {
      links.current.classList.remove('openTaMere')
    }
},[openLinks])
  return (
    <div className='links__wrapper' ref={links}>
    <span className='link'  onClick={handleClick}>Links</span>
      <div className='test'  >
        <span className='link__3'><a href='https://github.com/Raphael-Aldaz' rel='noreferrer' target="_blank"><img src={gitLogo} alt="" /></a></span>
        <span className='link__2'><a href='https://www.linkedin.com/in/raphael-aldaz-a2a2b0a3/' rel='noreferrer'  target="_blank"><img src={linkedinLogo} alt="" /></a></span>
      </div>
    </div>
  )
}
export default Links