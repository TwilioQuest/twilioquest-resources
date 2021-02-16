# Lesson 2: Variables and program input

## Table of Contents

- [Lesson 2: Variables and program input](#lesson-2-variables-and-program-input)
  - [Table of Contents](#table-of-contents)
  - [Learning objectives](#learning-objectives)
  - [Essential questions](#essential-questions)
  - [Activities in this lesson](#activities-in-this-lesson)
  - [Before the lesson begins](#before-the-lesson-begins)
  - [Objective 1: Variable results](#objective-1-variable-results)
    - [Completing the objective](#completing-the-objective)
    - [Linked resources](#linked-resources)
  - [Objective 2: Multi variable](#objective-2-multi-variable)
    - [Completing the objective](#completing-the-objective-1)
    - [Linked resources](#linked-resources-1)
  - [Objective 3: Script arguments](#objective-3-script-arguments)
    - [Completing the objective](#completing-the-objective-2)
    - [Linked resources](#linked-resources-2)
  - [Objective 4: Begin the big test](#objective-4-begin-the-big-test)
    - [Completing the objective](#completing-the-objective-3)
    - [Linked resources](#linked-resources-3)
## Learning objectives

By the end of this lesson, students will:

| Objective 1 | Objective 2 | Objective 3 |
|-------------|-------------|-------------|
| Learn about different types of data that can be represented in code.  | Use variables to store data. | Use `process.argv` to take data into their programs from the user. |

## Essential questions

- What is the difference between 2 and "2" in Javascript?
- How do you declare a variable in Javascript?
- How should you declare a variable whose value you don't want to change?
- How do we access arguments passed to our program at execution?

## Activities in this lesson

During this lesson, students will complete 4 mission objectives. You can find more detail about each objective later in the lesson plan.

- [Set up your Node.js environment](#objective-1-variable-results)
- [Create a workspace](#objective-2-multi-variable)
- [You didn't say please](#objective-3-script-arguments)
- [Begin the big test](#objective-4-begin-the-big-test)

## Before the lesson begins

When students return to TwilioQuest between lessons, they will find themselves aboard the Fog Owl again. Their progress in the missions will have been saved. To pick up where they left off, they just need to go to the virtual reality pod with the green light on the right side of the Fog Owl, and select the Javascript Test Lab mission again.

When re-entering the mission, they will be at the start of the level, but will not have to recomplete any previously completed objectives. Direct students to walk through the level to the last opened barrier to start the lesson.

In this lesson, students will be writing and executing several Javascript files. Last lesson, they created a workspace for their Javascript files and set the workspace location in TwilioQuest. It is recommended that you spend some time at the start of the lesson getting students back to their workspace, and opening it in a text editor.

- Navigate to their workspace in the terminal using `cd ~/quest`.
- Check that Node.js is reachable and ready to be used: `node --version`.
- Open this location in a text editor.
  - If using Visual Studio Code, they can enter `code .` in their terminal once in the correct location to open it in the editor.

## Objective 1: Variable results

During this objective, students will learn to declare variables in Javascript.
They will declare a single variable in order to deactivate the barrier ahead of them.

This lesson is a good opportunity to address several topics:

- Data types: the students will be instructed to set the variable to a value of type `String`. Consider exploring some other common data types, such as numbers and booleans. These can be further explored in the next objective, "Multi variable".
- Types of variables: the included example code uses `const` to declare the variable. This is not required, and in fact there are many ways to declare variables in Javascript, that each have differences.

### Completing the objective

To complete the objective, students must create a file named `laserConfiguration.js`. In this file, they must declare a variable `laserStatus` whose value is `"OFF"`. Once the file is saved, they will be able to complete the objective immediately with the `HACK` button. But as before, it is recommended that the students are directed to explore and experiment with what they have learned.

To start, they can use what they learned at the end of the previous lesson with `console.log` to output the value of the variable to console. This continues to reinforce the notion that code should be tested, whilst exploring a new way of using `console.log`. Here is a suggested exercise:

- Define a variable `name`.
- Set the variable to the students name.
- Greet the user: `console.log("Hello, " + name);`.

To execute their code in the terminal, they should navigate to the project directory they created earlier, and type `node laserConfiguration.js`. 

### Linked resources

The following resources are linked to within the Objective screen and will be visible to the student:

- [Variables on Wikipedia](https://en.wikipedia.org/wiki/Variable_(computer_science))
  - This resource explores variables as a fundamental computer science concept, and may be interesting further reading for students interested in how computers represent data in memory. 
- [Strings on the Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
  - This resource explains the usage of the string data type, and the available operations on it, including string concatenation via `+`. As such, it may be good further reading following the above suggested extension exercise.

The following resources are linked to within the Help screen and will be visible to the student:

- [Variables on Javascript.info](https://javascript.info/variables)

## Objective 2: Multi variable

After passing through the "Variable results" barrier, this objective is available as a chest in the top left corner of the walkway. Care should be taken to direct students to it, as it is possible for them to progress straight past the chest to the next visible barrier for the objective "Script arguments".

This objective continues to build upon the understanding of variables as introduced in the previous objective, by having students create several variables of different types. The previous objective opened the door to the discussion of types of data and their differences by introducing strings. This objective introduces numbers, and booleans.

It may be interseting to discuss these data types in light of the previous objective. The previous objective had the students create a variable to turn off the barrier, via the string "OFF". With the introduction of booleans, `true` and `false`, we could imagine this solution differently, with a variable such as `laserOn` set to `false`. Onward from this, you could also introduce the idea of "truthiness", that values other than booleans can be considered `true` or `false` by Javascript. For example, `0` is false, whilst `1` is true. 

### Completing the objective

To complete the objective, students must create a file named `chestConfiguration.js`, and create three variables:

- `verifiedUser`, assigned to the boolean `true`.
- `accessLevel`, assigned to the number `7`.
- `favoriteRobot`, assigned to the string "Cedric".

Once students have created the file and declared the above variables, they will be able to progress with the `HACK` button. As before, it is recommended you encourage students to test their code first using `node chestConfiguration.js`, and using `console.log` to output various combinations of the variables to the terminal.

With multiple variables being declared, this is also a good opportunity to explore variable reassignment, particularly in light of the types of variables such as `const` and `let`. You could begin by having students declare the above 3 variables with the same name, and observing the output, or by declaring them with `const` and observing that they get an error on reassignment. 

### Linked resources

The following resources are linked to within the Objective screen and will be visible to the student:

- [Booleans on the Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [Numbes on the Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [Strings on the Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

The following resources are linked to within the Help screen and will be visible to the student:

- [Variables on Javascript.info](https://javascript.info/variables)
- [Data structures on the Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

## Objective 3: Script arguments

### Completing the objective

### Linked resources

## Objective 4: Begin the big test

### Completing the objective

### Linked resources