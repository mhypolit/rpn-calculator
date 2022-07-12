# rpn-calculator
CLI RPN Calculator:  A standard way to calculate a stack of number using 4 arithmetic operators and more.

**RPN Calculator**
V1.0.0 Copyright 2022 
Written by Mark Hypolite

**Description**:
RPN Calculator is designed to make longer complex equations easier to calculate.
This program allows you to add numbers to a stack and run operations such as addition, subtraction, multiplication, and division 
on a pair of numbers at a time from the stack.

**How to run the application:** 

Step 1: Clone or Fork repository to your local computer.

Step 2: Navigate to the project git directory on your local computer in console, bash, or powershell.
- ex. C:\Users\markh\source\repos\rpn-calculator

Step 3: Run `npm install`
- This step requires an installation of NodeJs and NPM.

Step 4: Type `npm run calc` in the command line. 

**How to run unit test:**

Step 1: Clone or Fork repository to your local computer.

Step 2: Navigate to the project git directory on your local computer in console, bash, or powershell.
- ex. C:\Users\markh\source\repos\rpn-calculator

Step 3: Run `npm install`
- Unit test require ts-jest, and newer version of typescript.

Step 4: Type `npm test` or `npx jest` in the command line. 

**Tech Dependencies:**

TypeScript 2.5.3

TS-Node 3.3.0

NodeJs 16.13.2

Chalk: 2.3.0

Clear: 0.1.0

Core-js: 2.5.1

Figlet: 1.5.2


**Reason Behind Tech Stack, Architecture:** 

TypeScript with NodeJs was chosen for many reasons, one of the many reasons that I choose type script was because of it type strict nature.  This allowed me to develop faster and easier while avoiding runtime and compilation issues. I am also very familiar with TypeScript due to my work with Angular and React projects. Node Js's popularity allows for many people to work on this project with little time wasted learning architecture. Node Js also provided an easy way to interact with the console with Node js "Readline" library. A few of the minor choices to use Chalk, Clear, and Figlet were all chosen for their ability to format the console text in a visually user-friendly way. When looking at the folder structure you can see that "app" is the main folder containing only main.ts and polyfills.ts. The reason for this is that main.ts is the top entry point to the applications.  As you navigate further into the project you will see a modules folder containing a separate folder for each important module (commands, formatter, number stack, shared) of the application, this is done to help the project be organized by separation of concern. In each module's folders, you will find the same type of folders to organize the different types of abstractions (Services, Enums, const lookups, models). This allow for quick navigation to the type of abstraction that you are looking for in that module.

**Trade-Offs and Future additions:**

One trade-off that stands out most to me is having a stylized GUI for the calculator. I know the requirement was to have a CLI-type interface, but if I had more time, I would at the very least style the CLI to be much more entertaining and usuasble. At the most, I would have loved to design a full GUI with buttons, displays, and pop-up messages. Another trade-off I had to make for time is the exclusion of unit testing and CI/CD. In my past project, I would have CI/CD automated, along with running the unit tests on all the methods, it was on my sprint plan for this V1.0.0 but had to get cut because of lack of time. I would include them in the next sprint as top priorities. I would have also liked to set up the service for the TCP, Socket, and File inputs. There is always improvement that could be made on every project, this one is no different. Any extra time would be used to implement the above features and refactor the project to be cleaner and more efficient. 
