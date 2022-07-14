# diego-s-food-app
Just practicing react with a order food app


## What I've learned and refreshed my knowledge on React:

- Scoping components with either styled components or CSS modules (helps avoid UI styles bugs or unwanted behavior by scoping the CSS styles of a component and not letting it be applied globally)
- React Fragments (Improves accessibility by avoid unnecessary html nodes)
- React Portal (Also improves accessibility by being able to move elements in the DOM where  it’s most suitable for accessibility, i.e: moving a modal and backdrop to top of DOM instead of being nested on the  DOM)
- React ref (it actually does  a lot of things for example helps with unnecessary states when you only need to read a value for some input field for example)
- Avoid unnecessary calls to useEffect by passing properties from an object not the whole object as dependencies.
- Forward Refs ( a special case when you need to use the ref from a custom component, not from standard HTML  elements by using the useRef and useImperativeHandler hooks, wrapping the custom component with React.forwardRef helper function.
