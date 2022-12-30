import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../app/store';
import { changeLineWidth } from '../../../slices/canvasSlice';

const SizeInput = (): JSX.Element => {
  const canvas = useSelector((state: RootState) => state.canvas);
  const dispatch = useDispatch();

  const handleSize = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeLineWidth(parseInt(e.currentTarget.value)));
  };

  return (
    <div className="form-group">
      <label htmlFor="size">Size({canvas.lineWidth})</label>
      <input
        type="range"
        id="size"
        min="1"
        max="50"
        value={canvas.lineWidth}
        onChange={handleSize}
      />
    </div>
  );
};

export default SizeInput;
