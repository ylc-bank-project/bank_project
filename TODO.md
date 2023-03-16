CURRENT
- Adapting log-in/homepage to routing so that it is useful for the sign-in activity as well.
  - Specifically updating the stepper and the `InfoTip` so that it can change routing as well.
  - Next need to update how the old activity sends in its "steps" if it even needs to.
    - If we are already in an activity, we could simply update the step number, it doesn't necessarily need to also update the 

Setting statefulness based on the route
- Realistically, all a location needs is the activity and step it is on. It can set state based on all of that. I don't think the application needs more data than that.
- Do I want the app to be useful otherwise? I mean, It would like to have routing, and it could simply have global state as well. Routing does not obviate having global state. In fact, it would make it make more sense, if I ever wanted to go that route.

NEW
- Add routing for new activity
  - Allowing use of back/forward buttons.
  - Statefulness can still be instantiated if necessary

