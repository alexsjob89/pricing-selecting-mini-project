import React from 'react';



const PricingRadioButtons = () => {
 const [selectedOption, setSelectedOption] = React.useState("option1")

 const handleOptionChange =(e) => {
   setSelectedOption(e.target.value)
 }


 return (
  <div className='PricingButtons'>
   <form className='inputs'>
    <label>
     <input
     type="radio"
     value="option1"
     checked={selectedOption === 'option1'}
     onChange={handleOptionChange}
     />
    <span className='personal'>Personal use</span>
$11.00 <br /> Personal prints, cards and gifts, or reference for artists. Non-commercial
use only, not for resale.  (£9.99)
    </label>

    <label>
     <input
     type="radio"
     value="option2"
     checked={selectedOption === 'option2'}
     onChange={handleOptionChange}
     />
     Oresentation or
newsletter
    </label>

    <label>
     <input
     type="radio"
     value="option3"
     checked={selectedOption === 'option3'}
     onChange={handleOptionChange}
     />
     Magazines and books
    </label>

    <label>
     <input
     type="radio"
     value="option4"
     checked={selectedOption === 'option4'}
     onChange={handleOptionChange}
     />
     Marketing package
    </label>
   </form>

   <div className='price-changing'>
    select option: {selectedOption} <br />
    Price:
    {selectedOption === 'option1' && '£9.99'}
    {selectedOption === 'option2' && '£19.99'}
    {selectedOption === 'option3' && '£29.99'}
     {selectedOption === 'option4' && '£39.99'}

   </div>
  </div>
 );
}

export default PricingRadioButtons;
