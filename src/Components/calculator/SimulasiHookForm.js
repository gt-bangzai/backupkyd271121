import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function SimulasiHookForm() {


  const { register, handleSubmit, errors } = useForm();

   const [results, setResults] = useState({
    monthlyPaymentUI: '',
    totalPaymentUI: '',
    totalInterestUI: '',
    isResult: false,
    userInitialData: '',
  });

  const onSubmit = (data, e) => {
    calculateResults(data);
    e.target.reset();
  };

  // Simulasi Umum
  const calculateResults = ({ amount, interest, years }) => {
    const userAmount = parseFloat(amount),
      calculatedInterest = parseFloat(interest) / 100 / 12,
      calculatedPayments = parseFloat(years) * 12,
      x = Math.pow(1 + calculatedInterest, calculatedPayments),
      monthly = (userAmount * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
      const monthlyPayment = monthly.toFixed(2),
        totalPayment = (monthly * calculatedPayments).toFixed(2),
        totalInterest = (monthly * calculatedPayments - userAmount).toFixed(2);

      // Tampilan hasil simulasi
      const newResults = { ...results };
      newResults.monthlyPaymentUI = monthlyPayment;
      newResults.totalPaymentUI = totalPayment;
      newResults.totalInterestUI = totalInterest;
      newResults.isResult = true;
      newResults.userInitialData = (
        <h4>
          {' '}
          Loan amount: ${amount} <br /> Interest: {interest}% <br /> Years to
          repay: {years}{' '}
        </h4>
      );
      setResults(newResults);
    }
    return;
  };

  // Clear input 
  const clearFields = () => {
    const newResults = { ...results };
    newResults.monthlyPaymentUI = '';
    newResults.totalPaymentUI = '';
    newResults.totalInterestUI = '';
    newResults.isResult = false;
    setResults(newResults);
  };

//form 

  return (
    <div>
      <form className='myform' onSubmit={handleSubmit(onSubmit)}>
        {/* Form dari inputan user */}
        {!results.isResult && (
          <div className='form-items'>
            <div>
              <label id='mylabel'>Harga Rumah:</label>
              <input
                name='amount'
                placeholder='Loan amount'
               
                ref={register({
                  required: true,
                  validate: {
                    positive: (value) => parseFloat(value) > 0,
                  },
                })}
              />

              {errors.amount?.type === 'required' && (
                <p>Your input is required</p>
              )}

              {errors.amount?.type === 'positive' && (
                <p>Please give a valid positive number</p>
              )}
            </div>
            <div>
              <label id='mylabel'>Bunga Pinjaman (%):</label>
              <input
                name='interest'
                placeholder='Interest'
                ref={register({
                  required: true,
                  validate: {
                    positive: (value) => parseFloat(value) > 0,
                  },
                })}
              />
              {errors.interest?.type === 'required' && (
                <p>Your input is required</p>
              )}
              {errors.interest?.type === 'positive' && (
                <p>Please give a valid positive number</p>
              )}
            </div>
            <div>
              <label id='mylabel'>Lama Pinjaman (Tahun):</label>
              <input
                name='years'
                placeholder='Years to repay'
                ref={register({
                  required: true,
                  validate: {
                    positive: (value) => parseInt(value) > 0,
                  },
                })}
              />
              {errors.years?.type === 'required' && (
                <p>Your input is required</p>
              )}
              {errors.years?.type === 'positive' && (
                <p>Please give a valid positive number</p>
              )}
            </div>
            <input type='submit' className='button' />
          </div>
        )}

        {results.isResult && (
          <div className='form-items'>
            {results.userInitialData}
            <div>
              <label id='mylabel'>Angsuran Perbulan :</label>
              <input type='text' value={results.monthlyPaymentUI} disabled />
            </div>
            <div>
              <label id='mylabel'>Total Pembayaran : </label>
              <input type='text' value={results.totalPaymentUI} disabled />
            </div>
            <div>
              <label id='mylabel'>Total Bunga :</label>
              <input type='text' value={results.totalInterestUI} disabled />
            </div>

              <input className='button' value='Calculate again' type='button'onClick={() => clearFields()}/>
          </div>
        )}
      </form>
    </div>
  );
}

export default SimulasiHookForm;
