import sendEmail from "./emailService.js";

const sendEmailFun = async(options) => {
  // Debug log to see what's coming in
  console.log('Sending email to:', options.sendTo);
  
  // Validate recipient
  if (!options.sendTo) {
    console.error('No recipient provided to sendEmailFun');
    return false;
  }
  
  const result = await sendEmail(
    options.sendTo, 
    options.subject, 
    options.text || "", 
    options.html || ""
  );
  
  if (result.success) {
    return true;
  } else {
    console.error('Email send failed:', result.error);
    return false;
  }
}

export default sendEmailFun;