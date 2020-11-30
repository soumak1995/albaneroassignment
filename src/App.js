
import './App.css';
import { connect } from 'react-redux';
import {addRow,addCard,removeRow,removeCard} from './Redux/ActionCreators';
import Card from './components/Card';
import InputRowComponent from './components/InputRowComponent'

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
function App({rows,cards,addRow,addCard,removeRow,removeCard}) {
 
  return (
    <div className="App">
      {
        rows.map((m,index)=><InputRowComponent removeRow={removeRow} key={index}/>)
      }
      <button onClick={addRow}>Add button</button>
      {
        cards.map((card,index)=><Card removeCard={removeCard} key={index}/>)
      }
      <button onClick={addCard}>Add Card</button>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(App)