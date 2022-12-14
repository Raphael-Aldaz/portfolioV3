import { useEffect, useRef, useState } from 'react'
import gitLogo from '../../assets/pictures/Git_icon.svg.png'
import linkedinLogo from '../../assets/pictures/174857.png'
import cvDownload from '../../assets/pictures/Download-Icon.png'
import cvPDF from '../../assets/cv/Cv-Web-Aldaz.pdf'

import './Links.scss'
const Links = () => {
  const links = useRef(null)
  const [openLinks, setOpenLinks] = useState(false)
  const handleClick = () => {
    setOpenLinks(!openLinks)
  }
  useEffect(()=> {
    if(openLinks){
      links.current.classList.add('open')
    }else {
      links.current.classList.remove('open')
    }
},[openLinks])
  return (
    <div className='links__wrapper' ref={links}>
    <div className='link'  onClick={handleClick}>Links</div>
      <div className='link__list'  >
         <a className='link__3' href='https://github.com/Raphael-Aldaz' rel='noreferrer' target="_blank"><img src={gitLogo} alt="" /></a>
        <a className='link__2' href='https://www.linkedin.com/in/raphael-aldaz-a2a2b0a3/' rel='noreferrer'  target="_blank"><img src={linkedinLogo} alt="" /></a>
        <a className='link__1' href={cvPDF} rel='noreferrer'  target="_blank" ><img src={cvDownload} alt="" /></a>
      </div>
    </div>
  )
}
export default Links