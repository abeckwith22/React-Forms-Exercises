# React Forms Exercise

#### Testing Requirements
- [x] **Every component needs a smoke + snapshot test**
- [x] **Critical Business Logic needs tests too.** Use your judgement for this, butmake sure you cover core functionality. Examples inlude: the ability to enter data, submit a form, and have the desired outcome appear in the DOM.

#### Part 1 - Color Box Maker
Create a new React application, which contains the following components:
- [x] ***App***
    - This component should render the ***BoxList*** component.
- [x] ***BoxList***
    - Place your state that contains all of the boxes here. This component should render all of the ***Box*** components along with the ***NewBoxForm*** component
- [x] ***Box***
    - This component should display a ***div*** with a background color, width, and height based on the props passed to it.
- [x] ***NewBoxForm***
    - This component should render a form that when submitted, creates a new ***Box***. You should be able to specify the ***Box's*** width, height, and background color. When the form is submitted, clear the input values.
    - When each ***Box*** component is displayed, add a button with the text `X` next to each ***Box***. When this button is clicked, remove that specific box. This will require you to pass a function down as props - the button **should not** be a separate component, it should be included in the ***Box*** component.

#### Part 2 - Todo App - List, Add, Remove Todos
Create a Todo App that allows users to see, add, edit, and remove todos. It should contain the following components.
- [x] ***App***
    - This component should render the ***TodoList*** component.
- [x] ***TodoList***
    - Place your state that contains all of the boxes here. This component should render all of the ***Todo*** components along with the ***NewTodoForm*** component
- [x] ***Todo***
    - This component should display a ***div*** with the task of todo. For each ***Todo*** component, there should also be a button with the text `X` that when clicked, removes the todo.
- [x] ***NewTodoForm***
    - This component should render a form that when submitted, creates a new ***Todo***. You should be able to specify the ***Todo's*** message. When the form is submitted, clear the input values.



