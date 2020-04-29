import React, { useState } from 'react';
import ActivityChooser from './ActivityChooser'

function App() {

  const [activitiesListVisible, setActivitiesListVisible] = useState(true);

  // const handleShowActivities = () => {

  // }

  return (
    <div>
      <button onClick={() => setActivitiesListVisible(true)}>Show Activities</button>
      <ActivityChooser closeModal={() => setActivitiesListVisible(false)} visible={activitiesListVisible} />
    </div>
  );
}

export default App;
