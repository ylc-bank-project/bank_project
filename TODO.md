CURRENT
- Get BankHomePage to property toggle between sign-in and register.
- Update the Sign-in process. Adapt it to the shared component, and use the better InfoTip (in Shared/Stepper folder).
  - Next: how to update steps? Or is it all based on route?
- FUTURE: Get these two activities working, and then consider whether or not I want to adopt the old activities to any of the routing.


Notes
- All routes are in routes.jsx

Setting statefulness based on the route
- Realistically, all a location needs is the activity and step it is on. It can set state based on all of that. I don't think the application needs more data than that.
- Route-based statefulness allows for the user to use the "back" and forwards buttons to navigate the activities.
- Routing does not obviate having global state. In fact, it would make it make more sense, if I ever wanted to go that route.
- I could still have global/local statefulness as needed

