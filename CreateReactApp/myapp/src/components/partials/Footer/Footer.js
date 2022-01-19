import './Footer.scss'


export const Footer = (props) => {
  return (
    <footer>
     <ul>
       {props.data.map((link,key) => {
         return(
           <li key={key}><a href="#">{link}</a></li>
         )
       })}
     </ul>
    </footer>

  )
}