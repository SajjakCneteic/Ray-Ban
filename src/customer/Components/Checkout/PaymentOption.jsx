import React from 'react';

const PaymentOptions = () => {
  return (
    <div className=" flex flex-wrap justify-center">
      <div className="text-gray-600 font-bold mb-4">Payment Secured by CCV/Avenue</div>
      <hr className="text-black-600"/>
      <div className="flex flex-wrap justify-center">
        {['/visa.png', '/mastercard.png', '/maestro.png', '/discover.png', '/jcb.png',   '/amex.png', '/amazonpay.png', '/googlepay.png', '/applepay.png'].map((src, index) => (
          <div className="mx-2 mb-2" key={index}>
            <img src={src} alt="Payment Option" className="h-8 w-16 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentOptions;
