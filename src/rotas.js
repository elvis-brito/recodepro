import { Switch, Route } from 'react-router-dom';
import  Produtos from './Pages/Produtos'
import  Pedidos from './Pages/Pedidos'
import  Lojas from './Pages/Lojas'

function Rotas () {
    return (
        <Switch>
            <Route exact path="/pedidos" component={ Pedidos } />
            <Route exact path="/produtos" component={ Produtos } />
            <Route exact path="/lojas" component={ Lojas } />
        </Switch>
    )
}

export default Rotas;