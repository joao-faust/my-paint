import { BsFillEraserFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../app/store';
import { activateEraser } from '../../../slices/canvasSlice';

const EraserBtn = (): JSX.Element => {
  const canvas = useSelector((state: RootState) => state.canvas);
  const dispatch = useDispatch();

  const handleEraser = (): void => {
    dispatch(activateEraser());
  };

  return (
    <div className="form-group">
      <span className="span-block">
        Eraser({canvas.eraser.on ? 'on' : 'off'})
      </span>
      <button className="eraser" onClick={handleEraser}>
        <BsFillEraserFill />
      </button>
    </div>
  );
};

export default EraserBtn;
