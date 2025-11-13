import { RED } from './App';

export const Light = ({ currentLight, identifier, lightState }) => {
  return (
    <>
      <div
        id={identifier}
        className={currentLight === lightState ? 'box active' : 'box'}
      >
        <div className="overlay">
          <div className="glare"></div>
        </div>
      </div>
    </>
  );
};
