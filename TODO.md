CURRENT
- I think for simplicity/clarity, I should create an enum array of steps for the sign-in exercise, I think this adds more clarity than simply adding comments. See how this works in previous exercises.
- Question: Should I put the IntroOutro modal togggling in the parent component? Probably yes. This might be a good use of context. And it may actually want to sit in the exercise component. Allowing me to have an exercise-specific state component might be simpler.
  - Get this working

MOVING FORWARDS
- I may be forced into updating the other activities to the new system. This may not be the worst thing, but it will take a bit of work
- FUTURE: Get these two activities working, and then consider whether or not I want to adopt the old activities to any of the routing.

DONE
- Continue bringing the SignIn.jsx components up-to-date to use the new InfoTip Component.
  - This involves transferring everyting from TipSteps.jsx into InfoTip components: better!
  - Examples: MakingPayments/index.jsx


Thoughts
- It might be useful to create an Enum of activity steps, like in the previous incarnations, just as a way to keep track of which step we are currently on. Naming them, rather than trying to understand the index makes a lot more sense.

Notes
- Initial routes are set in ActivityListing.jsx
- All routes are in routes.jsx

Setting statefulness based on the route
- Realistically, all a location needs is the activity and step it is on. It can set state based on all of that. I don't think the application needs more data than that.
- Route-based statefulness allows for the user to use the "back" and forwards buttons to navigate the activities.
- Routing does not obviate having global state. In fact, it would make it make more sense, if I ever wanted to go that route.
- I could still have global/local statefulness as needed

