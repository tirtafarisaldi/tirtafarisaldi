/* eslint-disable react/no-unescaped-entities */
import { isDesktop } from 'react-device-detect'
import LinkedIn from '@material-ui/icons/LinkedIn'
import Email from '@material-ui/icons/Email'
import ProfileImg from '../../images/profile.jpeg'
import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Ask Something? Let's Connect! </h2>
      <div style={{
        display: 'flex',
        flexDirection: isDesktop ?'row' : 'column',
        alignItems: 'center',
        gap: '32px'
      }}>
        <img width="150px" height="150px" alt="profile-img" src={ProfileImg} style={{
          objectFit: 'cover',
          borderRadius: '100%',
        }} />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <a href={`mailto:${contact.email}`} style={{
            color: 'white',
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Email/>
            tirtafarisaldi@gmail.com
          </a>
          <a href="https://linkedin.com/in/tirtafarisaldi" style={{
            color: 'white',
            fontSize: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <LinkedIn/>
            tirtafarisaldi
          </a>
        </div>
      </div>
     
    </section>
  )
}

export default Contact
