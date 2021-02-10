# Lesson 1: Installation and setup

## Table of Contents

- [Lesson 1: Installation and setup](#lesson-1-installation-and-setup)
  - [Table of Contents](#table-of-contents)
  - [Learning objectives](#learning-objectives)
  - [Essential questions](#essential-questions)
  - [Activities in this lesson](#activities-in-this-lesson)
  - [Before the lesson begins](#before-the-lesson-begins)
    - [Teams and operations](#teams-and-operations)
  - [Boarding the Fog Owl](#boarding-the-fog-owl)
  - [Beginning the Mission](#beginning-the-mission)
  - [Objective 1: Set up your Node.js environment](#objective-1-set-up-your-nodejs-environment)
    - [Completing the objective](#completing-the-objective)
    - [Linked resources](#linked-resources)
  - [Objective 2: Create a workspace](#objective-2-create-a-workspace)
    - [Completing the objective](#completing-the-objective-1)
  - [Objective 3: You didn't say please](#objective-3-you-didnt-say-please)
    - [Completing the objective](#completing-the-objective-2)
  - [Wrapping up the lesson](#wrapping-up-the-lesson)

## Learning objectives

By the end of this lesson, students will:

| Objective 1 | Objective 2 | Objective 3 |
|-------------|-------------|-------------|
| Install Node.js in order to be able to execute Node.js programs during future mission objectives.| Create a workspace in the terminal to store Node.js files throughout the Mission. | Write and execute their first Node.js programs. |

## Essential questions

- What is the difference between Node.js and Javascript?
- Where is Node.js installed on a computer?
- What version of Node.js are you currently using?
- What is the terminal?
- How do you change directory in a terminal?
- How do you create a file for a Javascript program?
- How do you run a program written in Javascript with Node.js?

## Activities in this lesson

During this lesson, students will complete 3 mission objectives. You can find more detail about each objective later in the lesson plan. 

- [Set up your Node.js environment](#objective-1-set-up-your-nodejs-environment)
- [Create a workspace](#objective-2-create-a-workspace)
- [You didn't say please](#objective-3-you-didnt-say-please)

## Before the lesson begins

It's recommended that TwilioQuest be installed before the start of the lesson. TwilioQuest is available for MacOS, Windows and Linux [here](https://www.twilio.com/quest/download). See the [IT guide]() for more information on installing TwilioQuest on both personal, and school lab machines.

On first starting TwilioQuest, students will be prompted to create an avatar (a character). If students are using their own machines and installing before the class, you could encourage them to share their avatars ahead of the lesson to create anticipation for the upcoming class.

Throughout the mission, students will create and edit Javascript files. To do this, they will need a text editor. Most operating systems come with a basic text editor ready installed, but there are many more powerful tools that are freely available, and widely used in industry. One such tool is [VSCode](https://code.visualstudio.com/), by Microsoft. It is available for all major operating systems. It is recommended that students install a text editor like VSCode before the beginning of the class.

This lesson provides ample time for the downloading and installation of software during the lesson activities, namely Node.js. If students are not able to download and install software themselves in your school environment, or you would rather complete the installation in advance, you may want to continue to objectives in [Lesson 2](lesson-2.md) after completing objective 3 below.

### Teams and operations

## Boarding the Fog Owl

When student's start TwilioQuest, they will find themselves in a ship, the Fog Owl. The Fog Owl is the hub of TwilioQuest: from here, students can access all of the Missions available in the game.

Students can learn more about TwilioQuest by speaking to Cedric. When they are ready, they can end the conversation and climb into the virtual reality pod to select the mission.

The virtual reality pods can be found in the right-most room of the Fog Owl. Students can open the mission select by standing on the green and black diagonal stripes, in front of the pod with the green light, and pressing <kbd>Space</kbd>.

From the mission select screen, select JavaScript Test Lab. 

## Beginning the Mission

When students enter the mission, they will be greeted again by Cedric. Cedric can tell them more about what to expect from the mission, both in terms of what they will learn about Javascript, and also what work is being done in the Test Lab. Once they are ready, the first objective is on the right of the screen. It can be accessed by walking up to the console next to the laser field and pressing <kbd>Space</kbd>.

## Objective 1: Set up your Node.js environment

During this objective, students will download and install Node.js onto their machines. After the installation is complete, they will use some simple terminal commands to find the location of the installed software, and enter that into TwilioQuest to complete the objective.

This objective does not require any code, but there may be lengthy downtime whilst the software downloads, particularly as a large class all performing the download at once may result in reduced speeds. Whilst the download is happening, you could give the class an introduction to the terminal and the command line interface.

### Completing the objective

To complete the objective, students must download the Node.js installer, complete the installation, and then paste the path (that is, the location on the file system) of the Node.js executable into the text box on TwilioQuest.

Once the download is completed, the student will have the Node.js installer on their machine. Double clicking the installer will start the installation wizard. At the end of the installation, Node.js will be installed to a location on the student's machine. This location will vary by operating system:

- MacOS: `/usr/local/bin/node`
- Linux: `/usr/local/bin/node`
- Windows: `C:\Program Files\nodejs`

On MacOS or Linux it is recommended that students find the path using terminal commands, as an introduction to usage of the terminal. On MacOS and Linux, the `which` command takes as a parameter the name of another command and returns the path to that commands location in the file system. Students can then copy and paste that into TwilioQuest. On Windows PowerShell, the required command is a little more complicated. Windows users can run `Get-Command node.exe | Select-Object -ExpandProperty Definition` to achieve the same results.

### Linked resources

The following resources are linked to within the objective screens and will be visible to the student:

- [https://www.nodejs.org/](https://www.nodejs.org/)
  - This site is the official website of Node.js, and the recommended place to download Node.js from.

## Objective 2: Create a workspace

During this objective, students will create a space for the code they will write throughout the mission, whilst growing more familiar with the terminal. 

### Completing the objective

To complete the objective, students must create a directory on their computer to store the Javascript code they will create during the lesson. When they have created the directory, they enter the path to the directory into the text box on TwilioQuest to progress.

Whilst this objective could be completed with the graphical user interface on most systems, it's recommended that students complete the task using the command line interface to continue building their comfort with the terminal. On MacOS, Linux, and Windows PowerShell, the commands are the same:

- `cd ~` to change to the student's home directory.
- `mkdir quest` to make a directory named "quest".
- `cd quest` to change to the new directory.
- `pwd` to print the path to the current directory.

Once the path has been printed, students can copy and paste into TwilioQuest to complete the objective and progress.

## Objective 3: You didn't say please

During this objective, students will write their first Javascript program. The program will be a traditional "Hello, World!", outputting some text to the terminal. They will initially start in the terminal, navigating to their earlier  created project directory and then creating a file. After that, they will open the file in their text editor to write the required Javascript. They will return to the terminal to use Node.js to test the code and see the results.

### Completing the objective

To complete the objective, students must create a file called `sayPlease.js` and write a `console.log` statement that outputs `Glen, will you please open the barrier?` to the terminal. You can see the full code snippet in the [samples](/javascript/sample-solutions/code/sayPlease.js). Ensure the students save the file in the project directory they created earlier.

Students will be able to pass the objective immediately upon saving the file with the correct contents, however it is recommended that they also first run the file and see the output themselves. Aside from being an exciting moment in seeing code they have written work, this exercise will develop familiarity with executing `.js` files with Node.js, and introduce the concept of testing code.

To execute their code, in the terminal, they should navigate to the project directory they created earlier, and type `node sayPlease.js`.

## Wrapping up the lesson

That is the end of the recommended objectives for this lesson.

In the next lesson, students will be introduced to two key programming concepts:

- Providing parameters to programs.
- Storing data in variables.