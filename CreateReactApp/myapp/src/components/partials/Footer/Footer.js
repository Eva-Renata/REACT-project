import './Footer.scss'

export const footernavigation = ['Forside','Produkter','Om os','Ledige stillinger','Kontakt os']

export const Footer = (props) => {
  return (
    <footer>
     <ul>
       {props.data.map((link,key) => {
         return(
           <li key={key}>{link}</li>
         )
       })}
     </ul>
    </footer>

  )
}