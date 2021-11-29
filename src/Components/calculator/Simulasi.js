import React, { useState } from 'react';

function Simulasi() {
  // state to storage the values given by the user when filling the input fields
  const [userValues, setUserValues] = useState({
    amount: '',
    interest: '',
    years: '',
  });

  // state to storage the results of the calculation
  const [results, setResults] = useState({
    monthlyPayment: '',
    totalPayment: '',
    totalInterest: '',
    isResult: false,
  });

  // Error message 
  const [error, setError] = useState('');

  // Event Handling

  const handleInputChange = (event) =>
    setUserValues({ ...userValues, [event.target.name]: event.target.value });

  // Validasi
  const isValid = () => {
    const { amount, interest, years } = userValues;
    let actualError = '';
    // Validasi Input
    if (!amount || !interest || !years) {
      actualError = 'Inputan ga boleh kosong';
    }
    // Validasi Angka
    if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
      actualError = 'Inputan harus berupa angka';
    }
    // Tidak boleh angka negatif
    if (Number(amount) <= 0 || Number(interest) <= 0 || Number(years) <= 0) {
      actualError = 'Inputan angka tidak boleh negatif';
    }
    if (actualError) {
      setError(actualError);
      return false;
    }
    return true;
  };

  
  const handleSubmitValues = (e) => {
    e.preventDefault();
    if (isValid()) {
      setError('');
      calculateResults(userValues);
    }
  };

  // Calculation
  const calculateResults = ({ amount, interest, years }) => {
    const userAmount = Number(amount);
    const calculatedInterest = Number(interest) / 100 / 12;
    const calculatedPayments = Number(years) * 12;
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (userAmount * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = monthly.toFixed(2);
      const totalPaymentCalculated = (monthly * calculatedPayments).toFixed(2);
      const totalInterestCalculated = (
        monthly * calculatedPayments -
        userAmount
      ).toFixed(2);

      // Tampilan hasil simulasi
      setResults({
        monthlyPayment: monthlyPaymentCalculated,
        totalPayment: totalPaymentCalculated,
        totalInterest: totalInterestCalculated,
        isResult: true,
      });
    }
    return;
  };

  // Clear input 
  const clearFields = () => {
    setUserValues({
      amount: '',
      interest: '',
      years: '',
    });

    setResults({
      monthlyPayment: '',
      totalPayment: '',
      totalInterest: '',
      isResult: false,
    });
  };

  return (
    <div className='calculator'>
      <div className='form'>
        <h1>Simulasi KPR</h1>
        <p className='error'>{error}</p>
        <form onSubmit={handleSubmitValues}>
          {!results.isResult ? (
            <div className='form-items'>
              <div>
                <label id='label'>Harga Rumah :</label>
                <input 
                  type='text'
                  name='amount'
                  placeholder='Harga Rumah (Rp)'
                  value={userValues.amount}
                    onChange={handleInputChange}
                />
              </div>
              <div>
                <label id='label'>Bunga Pinjaman (%) :</label>
                <input
                  type='text'
                  name='interest'
                  placeholder='Bunga (%)'
                  value={userValues.interest}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label id='label'>Lama Pinjaman (Tahun):</label>
                <input
                  type='text'
                  name='years'
                  placeholder='5-15 Tahun'
                  value={userValues.years}
                  onChange={handleInputChange}
                />
              </div>
              <input type='submit' className='button' />
            </div>
          ) : (
          
            <div className='form-items'>
              <h1 align="justify">
                Harga Rumah  Rp.{userValues.amount} <br /> Bunga Pinjaman {' '} 
                {userValues.interest}% <br/> Lama Pinjaman {userValues.years} Tahun
              </h1>
              <div>
                <label id='label'>Angsuran Perbulan :</label>
                <input type='text' value={results.monthlyPayment} disabled />
              </div>
              <div>
                <label id='label'>Total Pembayaran : </label>
                <input type='text' value={results.totalPayment} disabled />
              </div>
              <div>
                <label id='label'>Total Bunga :</label>
                <input type='text' value={results.totalInterest} disabled />
              </div>
                <input className='button' value='Simulasi Ulang' type='button' onClick={clearFields}/>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Simulasi;
