# React Components

## Resources
- [Learning Objectives](#learning-objectives)
- [Requirements](#requirements)
- [Tasks](#tasks)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- How to create a basic React component using class syntax
- How to add event handlers
- How to add and use lifecycle hooks
- How to create higher-order components (HOC) to reuse component logic
- How to use propTypes to validate components' prop
- How to use memo to optimize component renders
- How to use pure components to optimize component renders

## Requirements
- Repo:
  - All of your files should end in `.js`
  - Your React components should have a default export
  - Your React components should be in the directory `src/`
  - Your test files should be in the directory `src/__tests__/`

## Tasks

### 0. Commence with class components
Start this project with files from the the last task of the `0x03. React Props` project: Convert the `App` function into a React Class.

### 1. Lifecycles
Add lifecycle methods to the `App` class component.

### 2. Handling Events
Create a new event handler in the `Notifications` component.

### 3. Reusable comments & specialization
Create a new component named `BodySection`. The component does not know its children. It should output the following:
```
<div className="body-section">
  {this.props.title}
  {this.props.children}
</div>
```

### 4. Specialization
Create a new component named `BodySectionWithMarginBottom`. The component does not know its children. It should output the following:
```
<div className="body-section" style={{marginBottom: '40px'}}>
  {this.props.title}
  {this.props.children}
</div>
```

### 5. Use the new components
Modify the `App` component to use the new `BodySection` and `BodySectionWithMarginBottom` components.

### 6. Test the new components
Write tests for the new `BodySection` and `BodySectionWithMarginBottom` components.

### 7. Create WithLogging HOC
Create a higher-order component (HOC) named `WithLogging` in `task_4/dashboard/src/HOC/WithLogging.js`.

### 8. Write a test for the HOC
Write some tests for the `WithLogging` HOC component.

### 9
