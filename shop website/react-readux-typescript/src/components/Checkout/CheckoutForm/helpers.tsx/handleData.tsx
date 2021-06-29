import { formValue } from './types';

export const handleData = (data: formValue): void => {
  console.log(data);
  alert(
    `This is the extent of this website for now, more pages are yet to be available. Thank you for checking out my work. 
      
    
      Email: ${data.email},
      isBuyerAcceptingMarketing: ${data.buyerAcceptMarketing},
      FirstName: ${data.FirstName},
      LastName: ${data.LastName},
      Address: ${data.Address},
      Address2: ${data.Address2},
      City: ${data.City},
      PhoneNumber: ${data.PhoneNumber},
      Country: ${data.Country},
      `,
  );
};
