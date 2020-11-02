const stateNames = [
  'Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'
];

const stateAbbreviations = [
  'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
  'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
  'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
  'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
  'VT','VI','VA','WA','WV','WI','WY'
 ];

const separateCityAndState = (locString) => {
  const commaIndex = locString.indexOf(',');
  const city = locString.slice(0, commaIndex).trim();
  const state = locString.slice(commaIndex + 1).trim();
  return [city, state];
}

const hasAValidState = (locString) => {
  const [city, state] = separateCityAndState(locString);
  return stateNames.includes(state) || stateAbbreviations.includes(state);
}

const convertLocationStringToQuery = (locString) => {
  const [city, state] = separateCityAndState(locString);
  return `${city.replace(/ /g, '%20')}%2C%20${state.replace(/ /g, '%20')}`;
}

const formatDateMMDDYY = (dateTime) => {
  const date = dateTime.slice(0, dateTime.indexOf('T'));
  const [year, month, day] = date.split('-');
  return `${month}/${day}/${year}`;
}

export {
  hasAValidState,
  convertLocationStringToQuery,
  formatDateMMDDYY
}