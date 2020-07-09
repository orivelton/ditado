const sortByProperty = array => array.sort((a,b) => (a.voiceURI > b.voiceURI) ? 1 : ((b.voiceURI > a.voiceURI) ? -1 : 0));

export { sortByProperty }