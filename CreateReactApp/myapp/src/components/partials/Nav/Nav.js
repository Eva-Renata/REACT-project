import './Nav.scss'

export const navigation = ['Forside','Produkter','Om os','Ledige stillinger','Kontakt os']

export const Nav = (props) => {
  
  return (
    <nav>
     <ul>
       {props.data.map((link,id) => {
         return(
           <li key={id}>{link}</li>
         )
       })}
     </ul>
    </nav>

  )
}