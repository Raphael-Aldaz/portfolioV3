import { useEffect, useRef, useState} from 'react';
import useWindowSize from '../../../Hooks/useWindowResize'
import './ProgressBar.scss';

const ProgressBar = ({color, name, percent}) => {
  const progress = useRef();
  const circle = {
    filter: `drop-shadow(0 0 4px ${color})`
  }
  const text = {
    color: `${color}`,
    filter: `drop-shadow(0 0 3px ${color})`
  }
  const barBox =  {
    border: `solid 3px ${color}`,
    borderRadius: '20px'
  }
  const {width, height} = useWindowSize();
  const [radius, setRadius] = useState(0);
  const [rayon, setRayon] = useState(0);
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);
  useEffect(()=> {
    if(width < 650) {
      setRadius(60)
      setRayon(50)
      setStrokeDashoffset(314 - (314 * `${percent}`) / 100)

    } else {
      setRadius(150)
      setRayon(130)
      setStrokeDashoffset(815 - (815 * `${percent}`) / 100)
    }
  
  }, [width, height, percent])

  useEffect(() => {
    if (!progress.current) {
      return;
    }

    const onScroll = () => {
      const { scrollTop, clientHeight } = document.documentElement;
      const topElementToTopViewport = progress.current.getBoundingClientRect().top;
      if (
        scrollTop
        > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.9
      ) {
        progress.current.classList.add('isActif');
      }
    };

    window.addEventListener('scroll', onScroll);

     
  }, []);
  return (
    <div className='card' >
      <div style={barBox} className='percent' >
        <svg>
          <circle ref={progress} style={circle} stroke={color}  cy={radius} cx={radius} r={rayon} strokeDashoffset={strokeDashoffset} />
        </svg>
      </div>
      <div style={text} className='card__name'>
        <h1>{name} </h1>
        <h1>{percent}%</h1> 
      </div>
      
      </div>
  )
}
export default ProgressBar
