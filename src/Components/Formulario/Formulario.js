import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Formulario.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from "react";
import { removeTodo,  addTodo} from '../../reducers/todoSlice';

function Formulario() {
  const dispatch = useDispatch();
  const inputRefName = useRef();
//  const inputRefDescription = useRef();
//  const inputRefDueDate = useRef();

  const addItem = (e) => {
    e.preventDefault();
    dispatch(addTodo({
      'name': inputRefName.current.value,
    }))
  }

  return (
  <div className='space'>
       <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre de tarea</Form.Label>
        <Form.Control type="text" placeholder="" ref={inputRefName}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripcion de tarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Fecha Para realizar tarea</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
      <Button variant="info" onClick={addItem}>Agregar Tarea</Button>
    </Form>
  </div>
 
  );
}

export default Formulario;