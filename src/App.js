
import './App.css';
import { connect } from 'react-redux';
import {addRow,addCard,removeRow,removeCard} from './Redux/ActionCreators';
import Card from './components/Card';
import InputRowComponent from './components/InputRowComponent'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Nav from './components/Nav'
import Graph from './components/Graph'
const mapStateToProps = state => {
  return {
    rows: state.rows,
    cards:state.cards
  }
}
const mapDispatchToProps = dispatch => ({
  addRow: () => { dispatch(addRow())},
  addCard: () => { dispatch(addCard())},
  removeRow: () => { dispatch(removeRow())},
  removeCard: () => { dispatch(removeCard())},
  
});
const DashBoard=({rows,cards,addRow,addCard,removeRow,removeCard})=>{
  return(
        <div className="Dashboard">
          <div className="Dashboard__rows">
                {
                rows.map((m,index)=><InputRowComponent removeRow={removeRow} key={index}/>)
              }
              
          </div>
          <button className="Dashboard__add_rows" onClick={addRow}>Add Row</button>
          <button className="Dashboard__add_card" onClick={addCard}>Create Card</button>
        <div className="Dashboard__cards">
              {
                cards.map((card,index)=><Card removeCard={removeCard} key={index}/>)
              }
        </div>
        
        
      </div>
  )
}
function App({rows,cards,addRow,addCard,removeRow,removeCard}) {
 
  return (
       <BrowserRouter>
          <Nav/>
           <Switch>
               <Route path='/' exact component={()=><DashBoard
              rows={rows} cards={cards} addRow={addRow}
              addCard={addCard} removeRow={removeRow}
              removeCard={removeCard}/>}/>
           </Switch>
           <Route path='/graph' component={Graph}/>
       </BrowserRouter>
    
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(App)