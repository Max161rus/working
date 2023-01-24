//import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction} from './store/customerReducers';

function App() {
  const dispach = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customer.customer)
  const count = useSelector(state => state.countReducer.count)


  console.log(count)

  const addCash = (cash) => {
    dispach({ type: 'ADD_CASH', payload: cash })
  }

  const getCash = (cash) => {
    dispach({ type: 'GET_CASH', payload: cash })
  }

  const addCustomer = (name) => {
    const customer = {
      name: name,
      id: Date.now(),
    }
    dispach(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispach(removeCustomerAction(customer.id))
  }

  const incCount = () => {
    dispach({type: 'ADD_COUNT', payload: ''})
  }

  const decCount = () => {
    dispach({type: 'DEC_COUNT', payload: ''})
  }


  return (
    <div className="App">
      <div>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить</button>
        <h1>{cash}</h1>
        <button onClick={() => getCash(Number(prompt()))}>Снять</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => removeCustomer()}>Удалить клиента</button>
      </div>
      <div>
        {customers.length > 0 ?
          <div>
            {customers.map(customer => 
             <div onClick={() => removeCustomer(customer)} key={customer.id}>{customer.name}</div>
            )}
          </div>
          :
          <div>
            Клиенты отсутствуют
          </div>
        }
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => incCount()}>INC</button>
        <button onClick={() => decCount()}>DEC</button>
      </div>
    </div>
  );
}

export default App;
