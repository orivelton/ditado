const speakText = (text) => {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = localStorage.getItem('lang') || 'pt-PT';
  msg.voiceURI = "native";
  msg.rate = 0.7;
  window.speechSynthesis.speak(msg);
}

export { speakText };
