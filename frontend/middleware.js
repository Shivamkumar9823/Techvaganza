import { z } from "zod";
const emailValidate= (email) => {
  const emailSchema = z.string().email();
  if(emailSchema.safeParse(email)){
    return true;
  }else{
    return false;

  } 
}

const phoneValidate= (phone) => {
  const phoneSchema = z.number.psitive().length(10);
  if(phoneSchema.safeParse(phone)){
    return true;
  }else {
    return false;
  }
}
const nameValidate= (name) => {
  const nameSchema = z.string().length(30);
  if(nameSchema.parse(name)){
    return true;
  }else{
    return false;
    
  }
  
}