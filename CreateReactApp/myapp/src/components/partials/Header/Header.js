import './Header.scss'
import logo from '../../../assets/images/icons8-react-native-100.png'

export const Header = (props) => {
  return (
    <header>
      <img src={logo}></img>
      <h1>{props.title}</h1>
    </header>

  )
}