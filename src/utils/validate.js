export const validate=(email,password) =>  {

   const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
   const isPassWordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if(!isEmailValid) return "The email provided is inValid Please Check Once AGain"
  if(!isPassWordValid) return "The Password is  provided is inValid Please Check Once AGain"
  
  return null;
};