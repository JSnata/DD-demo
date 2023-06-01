import s from './MainNav.module.css';
import List from './../List/List';
import Item from './../Item/Item';

function MainNav() {
  return (
    <nav>
        <List>
            <Item><a href="/">Home</a></Item>
            <Item><a href="/user">User</a></Item>
        </List>
    </nav>
  )
}

export default MainNav