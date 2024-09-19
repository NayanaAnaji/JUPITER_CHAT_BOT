export const maskEmail = (email: string, visibleChars: number = 6) => {
    const atIndex = email.indexOf("@");
  
    if (atIndex > visibleChars) {
      const visiblePart = email.substring(0, atIndex - (visibleChars - 1));
      const maskedPart = "*".repeat(email.length - visiblePart.length - 6);
      return visiblePart + maskedPart + email.substring(atIndex);
    } else {
      return email;
    }
  };