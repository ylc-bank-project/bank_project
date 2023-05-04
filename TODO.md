CURRENT
- CreateAccount working
- Then after that would be to look at which activities (more than one?) use the same components, so I can begin separating them into shared BankPages.


- Question: What is the simplest thing to do to ensure that the other activities also use routing? I don't necessarily need to move their components around if they aren't shared.
  - Routing-based components are different, and there will need to be a reorganization of the component structure.
  - For this it's worth understanding URL parameters a bit better.

MOVING FORWARDS
- FUTURE: Get these two activities working, and then consider whether or not I want to adopt the old activities to any of the routing.

DONE
- Continue bringing the SignIn.jsx components up-to-date to use the new InfoTip Component.
  - This involves transferring everyting from TipSteps.jsx into InfoTip components: better!
  - Examples: MakingPayments/index.jsx


QUESTIONS/THOUGHTS
- I may want to change my URL param ordering, since it makes more sense to have the activity/stepIndex at the end of the URL

Notes
- Initial routes are set in ActivityListing.jsx
- All routes are in routes.jsx

Setting statefulness based on the route
- Realistically, all a location needs is the activity and step it is on. It can set state based on all of that. I don't think the application needs more data than that.
- Route-based statefulness allows for the user to use the "back" and forwards buttons to navigate the activities.
- Routing does not obviate having global state. In fact, it would make it make more sense, if I ever wanted to go that route.
- I could still have global/local statefulness as needed

