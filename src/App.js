import React from 'react';

const requirements = [
  { name: 'Company A', requirement : 'requires an apartment or house, and property insurance.' },
  { name: 'Company B', requirement : 'requires a 5 door car or 4 door car, and a driver\'s license and car insurance.' },
  { name: 'Company C', requirement : 'requires a social security number and a work permit.' },
  { name: 'Company D', requirement : 'requires an apartment or a flat or a house.' },
  { name: 'Company E', requirement : 'requires a driver\'s license and a 2 door car or a 3 door car or a 4 door car or a 5 door car.' },
  { name: 'Company F', requirement : 'requires a scooter or a bike, or a motorcycle and a driver\'s license and motorcycle insurance.' },
  { name: 'Company G', requirement : 'requires a massage qualification certificate and a liability insurance.' },
  { name: 'Company H', requirement : 'requires a storage place or a garage.' },
  { name: 'Company J', requirement : 'doesn\'t require anything, you can come and start working immediately.' },
  { name: 'Company K', requirement : 'requires a PayPal account.' }
];

function App() {
  return (
    <ul>
    {requirements.map((r, i) => {
      const { name, requirement } = r
      const res = requirement.includes('driving') || requirement.includes('license') || requirement.includes('bike') || requirement.includes('driver\'s license') || requirement.includes('driving license')
      return(
        res && <li key={i}>You can work in <b>{name}</b> - {requirement}</li>
      )
    })}
    </ul>
  );
}

export default App;
