// function Navbar(){
//      return(
//         <div className="title" style={{backgroundColor:"Blue",color:"#ffffff",width:'100%',height:"5rem",display:"flex",alignItems:"center",justifyContent:"center",position:'fixed',top:'0',zIndex:'1'}}>
//             <h1>Student Management System</h1>
//         </div>
//      )
// }
// export default Navbar;

import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

const colors = [
  
  'purple'
]

class ExampleMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { color } = this.props
    const { activeItem } = this.state

    return (
      <Menu color={color} inverted widths={3} style = {{height:'5rem'}}>
        <Menu.Item header as ='h2'>Student Management System</Menu.Item>
      </Menu>

    )
  }
}

const Navbar = () => {
  const menus = colors.map((color) => <ExampleMenu color={color} key={color} />)

  return <div>{menus}</div>
}

export default Navbar
