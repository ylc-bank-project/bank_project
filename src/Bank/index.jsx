import React, { useState } from 'react';
import ActivityChooser from './ActivityChooser'

function App() {

  const [activitiesVisible, setActivitiesVisible] = useState(false);

  const handleShowActivities = () => {

  }

  return (
    <div>
      <button onClick={() => setActivitiesVisible(true)}>Show Activities</button>
      <ActivityChooser closeModal={() => setActivitiesVisible(false)} visible={activitiesVisible} />
    </div>
  );
}

export default App;
