import './Contact.scss'
import emailjs from '@emailjs/browser';
const Contact = () => {
  return(
    <div className='contact__wrapper'>
    <h1>Contact</h1>
    <div className='contact'>
    <div className='contact__form'>
      <form>
        <input type="email" required placeholder='Votre E-mail' />
        <input type="text" required placeholder='Objet de votre message' />
        <textarea required placeholder='Votre message' />
        <button type='submit'>Envoyer</button>
      </form>
    </div>
    <div className='contact__map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8213.627907027378!2d-0.37699703683156954!3d43.29424320844125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc81cfbb58c44f686!2sPromenade%20du%20Boulevard%20des%20Pyr%C3%A9n%C3%A9es!5e0!3m2!1sfr!2sfr!4v1658493359314!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map' />
    </div>
    </div>
   

    </div>
  )
}
export default Contact