import PincelColorInput from './inputs/PincelColorInput';
import SizeInput from './inputs/SizeInput';
import EraserBtn from './buttons/EraserBtn';

const Tools = (): JSX.Element => {
  return (
    <aside className="toolbar">
      <PincelColorInput />
      <SizeInput />
      <EraserBtn />
    </aside>
  );
};

export default Tools;
