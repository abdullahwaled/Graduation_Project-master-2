import './box.css';

const Box = (props) => {
  return (
    <div>
      <div className="box py-3">
              {props.children}
              
        </div>
    </div>
  );
}

export default Box;
