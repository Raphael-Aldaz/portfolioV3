import { useState } from 'react'
import './Header.scss'
import useWindowSize from '../../Hooks/useWindowResize'
import { useEffect } from 'react'
const Header = () => {
  const [rotateIcon, setRotateIcon] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [mobile, setMobile] = useState(false)
  const {width, height} = useWindowSize()
  const handleRotate = () => {
    setRotateIcon(!rotateIcon)
    setOpenMenu(!openMenu)
  }
  useEffect(()=> {
    if(width < 650){
      setMobile(true)
    }else {
      setMobile(false)
    }
  },[width,height])
  let iconClassName = 'burger__icon'
  if(rotateIcon){
    iconClassName += ' burger__icon__rotate'
  }
  let menuMobile = 'navBar__mobile'
  if(openMenu){
    menuMobile += ' navBar__mobile__open'
  }
  return (
    <header className='header'>
    {mobile && <>
      <div onClick={handleRotate} className='burger__icon__wrapper'>
        <span className={iconClassName} />
      </div>
      <div className={menuMobile}>    
        <p className='navbarmobile__item'>
          <a href="#home"> Home</a>
        </p>
        <p className='navbarmobile__item'>
          <a href="#about_me"> About Me</a>
        </p>
        <p className='navbarmobile__item'>
          <a href="#skills">  Skills</a>
        </p>
        <p className='navbarmobile__item'>
          <a href="#contact"> Contact</a>
        </p>
    </div>
    </> }
    {!mobile && 
    <div className='navbardesktop'>
        <p className="navbardesktop__item">
          <a href="#home" className="navbardesktop__item__text">Home</a>
        </p>
        <p className="navbardesktop__item">
          <a href="#about_me" className="navbardesktop__item__text">About Me</a>
        </p>
        <p className="navbardesktop__item">
          <a href="#skills" className="navbardesktop__item__text">Skills</a>
        </p>
        <p className="navbardesktop__item">
          <a href="#contact" className="navbardesktop__item__text">Contact</a>
        </p>
      
    </div> }
    </header>
  )
}
export default Header