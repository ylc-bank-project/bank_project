import React, { useState } from 'react';
import ActivityChooser from './ActivityChooser'
import ActivityIntro from './ActivityIntro'

function App() {
  const [activitiesListVisible, setActivitiesListVisible] = useState(true);
  const [activityIntroVisible, setActivityIntroVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setActivitiesListVisible(true)}>Show Activities</button>
      <ActivityChooser closeModal={() => setActivitiesListVisible(false)} visible={activitiesListVisible} />
      <ActivityIntro closeModal={() => setActivityIntroVisible(false)} visible={activityIntroVisible}/>
    </div>
  );
}

export default App;
