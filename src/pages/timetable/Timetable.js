import Table from 'components/table/Table';
import { Link } from 'react-router-dom';
import './timetable.css';



const Timetable = () => {

  return (
    <div className='timetable'>
        <section className="top">
          <div>
            <h1> Timetable</h1>
            <Link to="/">Home &gt;</Link>
            <span> timetable </span>
          </div>
        </section>
        <section className='time my-5 py-5 w-100'>
          <div className="container">
              <div className="btn-group mb-5">
                <button type="button" className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  Levels &nbsp;
                </button>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">Kg1</li>
                  <li className="dropdown-item">Kg2</li>
                  <li className="dropdown-item">Kg3</li>
                  <li className="dropdown-item">Kg4</li>
                </ul>
              </div>

              <div className="tables">

                <div className="table active">
                   <Table/>
                </div>
              </div>

                      
          </div>       
        </section>
      
    </div>
  );
}

export default Timetable;
