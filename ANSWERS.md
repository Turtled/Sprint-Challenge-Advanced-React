- [ ] Why would you use class component over function components (removing hooks from the question)?

	In some cases it's smarter to use class components depending on which other tools you're working with, for example. When using Formik, it's much easier to use class components since you can avoid a host of scope issues and potential bugs.

- [ ] Name three lifecycle methods and their purposes.

	componentDidMount - called immediately after the component is built by React, after the render method is invoked.
	shouldComponentUpdate - called every time a componenent is going to re-render. This can be used to prevent a re-render if needed.
	componentWillUnmount - called when the component is removed from the screen. This can be used for "clean up"

- [ ] What is the purpose of a custom hook?

	The purpose of a custom hook is to create reusable functionality across react components.

- [ ] Why is it important to test our apps?

	It's important to test our apps to avoid bugs that we can end up spending a long time debugging later, or maybe they could even get into the production build since it seemed like the app was working correctly, but we just hadn't checked a certain edge case.