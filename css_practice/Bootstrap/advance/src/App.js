import './App.css';

function App() {
  return (
    <>
    <h1>Hello hey</h1>
    <button type="button" className="btn btn-danger">Danger</button>
    <button type="button" className="btn btn-warning">Warning</button><br />

    <div className="container text-center">
    <div class="row">
    <div class="col">
      <input className='btn btn-primary' value="Column1" />
    </div>
    <div class="col">
      <input className='btn btn-secondary' value="Column2" />
    </div>
    <div class="col">
      <input className='btn btn-info' value="Column3" />
    </div>
    </div>
    </div>
    </>
  )
}

export default App;
