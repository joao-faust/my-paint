import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../app/store';
import { changeColor } from '../../../slices/canvasSlice';

const PincelColorInput = (): JSX.Element => {
  const canvas = useSelector((state: RootState) => state.canvas);
  const dispatch = useDispatch();

  const handleColor = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeColor(e.currentTarget.value));
  };

  return (
    <div className="form-group">
      <label htmlFor="pincel-color">Color</label>
      <input
        type="color"
        id="pincel-color"
        value={canvas.color}
        onChange={handleColor}
      />
    </div>
  );
};

export default PincelColorInput;
