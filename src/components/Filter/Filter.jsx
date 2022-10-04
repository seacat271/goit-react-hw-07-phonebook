import { Label, Input } from '../Form/Form';
import { changeFilter } from 'redux/filter/slice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter)
  
  const dispatchFilter = event => {
    dispatch(changeFilter(event.currentTarget.value))
  };
  
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={dispatchFilter} />
    </Label>
  );
};

export default Filter;


