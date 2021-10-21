import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
  onAdd: (item: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {

  const handleAddEvent = () => {}

  return (
    <C.Container>
      <div>
        <label>Data</label>
        <input type="text" />
      </div>

      <div>
        <label>Categoria</label>
        <select>
          <option>Teste</option>
        </select>
      </div>

      <div>
        <label>Título</label>
        <input type="text" />
      </div>

      <div>
        <label>Valor</label>
        <input type="number" />
      </div>
      
      <button onClick={handleAddEvent}>Adicionar</button>
    </C.Container>
  )
}