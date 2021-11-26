import React from 'react'

;<>
  <style dangerouslySetInnerHTML={{ __html: "th, td {text-align:right;}" }} />
  <a name="top" />
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <div className="well">
          <h1> Simulasi KPR Anuitas</h1>
          <label htmlFor="pv">Harga Rumah</label>
          <i>
            <input type="text" id="pv" className="text-right" />
          </i>
          <br />
          <br />
          <label htmlFor="dp">Uang Muka </label>
          <i>
            <input type="text" id="dp" className="text-right" /> %<br />
            (Persentase dari harga)
          </i>
          <br />
          <br />
          <label htmlFor="bunga">Bunga </label>
          <i>
            <input type="text" id="bunga" className="text-right" /> %<br />
            <br />
            <button id="hitung"> Hitung</button>
          </i>
        </div>
        <i></i>
      </div>
      <i>
        <div className="col-md-9">
          <h3>Angsuran Per Bulan : </h3>
          <table className="table">
            <thead>
              <tr>
                <th>DP</th>
                <th>KPR</th>
                <th>Bunga</th>
                <th>5 th</th>
                <th>10 th</th>
                <th>15 th</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="dpr" />
                <td id="kpr" />
                <td id="rate" />
                <td id="anu5" />
                <td id="anu10" />
                <td id="anu15" />
              </tr>
            </tbody>
          </table>
          {/* Rincian Angsuran Perbulan */}
          <a name="d5th" />
          <div>
            <a href="#top">Back to Top</a> |<a href="#d5th">Detail 5 th</a> |
            <a href="#d10th">Detail 10 th</a> |<a href="#d15th">Detail 15 th</a>
          </div>
          <h3>Detail 5 th: </h3>
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Bunga</th>
                <th>Pokok</th>
                <th>Angsuran</th>
                <th>Sisa</th>
              </tr>
            </thead>
            <tbody id="list5"></tbody>
          </table>
          <a name="d10th" />
          <div>
            <a href="#top">Back to Top</a> |<a href="#d5th">Detail 5 th</a> |
            <a href="#d10th">Detail 10 th</a> |<a href="#d15th">Detail 15 th</a>
          </div>
          <h3>Detail 10 th: </h3>
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Bunga</th>
                <th>Pokok</th>
                <th>Angsuran</th>
                <th>Sisa</th>
              </tr>
            </thead>
            <tbody id="list10"></tbody>
          </table>
          <a name="d15th" />
          <div>
            <a href="#top">Back to Top</a> |<a href="#d5th">Detail 5 th</a> |
            <a href="#d10th">Detail 10 th</a> |<a href="#d15th">Detail 15 th</a>
          </div>
          <h3>Detail 15 th: </h3>
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Bunga</th>
                <th>Pokok</th>
                <th>Angsuran</th>
                <th>Sisa</th>
              </tr>
            </thead>
            <tbody id="list15"></tbody>
          </table>
        </div>
      </i>
    </div>
    <i></i>
  </div>
  <i></i>
</>
