The router needs to be placed inside the `Bank/index.jsx` file with the activitySelector modal outside of it.
This will be the simplest way to use it, since that is the "exterior" of this project.
```
const router = createBrowserRouter([
  {
    path: "/",
    element: <Bank />,
  },
]);
<RouterProvider router={router} />
```

NEW
- Build pages that are reactive to the url.
  - This simplifies everything in terms of steps and website behavior.
  - I can simply build tooltips and interactivity based on the current routing state into the page. There is no reason to use statefulness.
  - I think this is worth trying with the new activities. And if it does help and simplify things, then I could refactor old code.
  - It allows full interactivity with the browser, as you'd expect it to be used.

TODO
- Separate visual components from the activity logic.
	- As needed (no premature optimization)
	- AllAccounts page is used by transfers, so it needs to be separated out.
		- And there are a couple others.

