export const navigation = ['Forside','Produkter','Om os','Ledige stillinger','Kontakt os']

export const Nav = (props) => {
  
  return (
    <nav>
     <ul>
       {props.data.map((link,key) => {
         return(
           <li key={key}>{link}</li>
         )
       })}
     </ul>
    </nav>

  )
}