#CODING EXERCISE - JavaScript/SPA

## Table of Contents
1. Evaluation guidelines
2. Task
    1. User Stories
    2. Technical Tasks and NFRs
3. Sample Data and expected result
4. Detailed instructions

##Evaluation Guidelines 

We want you to demonstrate your ability to write [clean code][uncle bob] which is well [covered][code coverage] by unit tests using Angular and Jasmine. In other words, as much as the correctness of the solution (e.g. providing validation), we are looking for proper usage of AngularJS concepts (e.g. directive) or whatever you deem pertinent to make your code easy to read and to maintain.

Twitter Bootstrap CSS is present in the Plunk, use it or change it to your favorite UI library. Additionally there are some example components to help you get started. 

This exercise can be done in a few hours, but please don’t rush and take the time you need. Just remember that we are looking for quality of code over quantity. Refactor and clean your code. The final deadline for the exercise is **11:59 pm on Sunday the 9th of August**.

Don’t forget to have a last look at the Readme before submitting your code. If you have any questions, please send us an email at [AppsDevInterviewProcess@teksystems.com][AppsDev].

Using this plunker project as a seed, Build a Temperature Monitor Single Page Application (SPA) using Angular.

## User Stories 

### User Story #1
As an anonymous end user, I want to be able to enter a number of temperature records by entering a value and then clicking on the "Add" button.

### User Story #2
As an anonymous end user,  When I click on the "Get Median Temperature" button, I want to be able to see the median of the entered temperature records that I have entered.

### User Story #3
As an anonymous end user, I want to be prevented from entering and invalid value such as strings in the "Temperature" field.

### User Story #4
As an anonymous end user, I want the UI to inform me when an invalid action occured.

### User Story #5
As an anonymous end user, I want a progress bar to see how full my collection of temperatures is.


## Acceptance Criteria and Definition of Done
- For user story #1 and #2. Create a javascript object (or an Angular service) named "TemperatureMonitor". 
- This object MUST have a method named "recordTemperature" that will accept a number value.
- This object MUST have a method called "getCurrentMedian" that will return the median of the recorded values.
- This object MUST be easily reusable and have no coupling with the UI
- The Code that calculates the median MUST be your own (no libraries allowed)
- Enforce a MAXIMIUM of 8 temperatures with appropriate userfeedback.
- You MUST unit test all the use cases that you feel is appropriate.
- Twitter Bootstrap CSS is already included in the index file, use it at will

##Sample Data and expected result
```[5, 1, -7, 7, 8, 3] --> [-7, 1, 3, 5, 7, 8] = (3+5)/2 = 4```

```[5, 1, -7, 7, 8, 3, 9] --> [-7, 1, 3, 5, 7, 8, 9] = 5```


##Detailed instructions

- Download and complete the skill self assessment https://goo.gl/bV1uBU
- **Fork** this Plunker Project
- Put your name in the "--your name here--" placeholder in the index.html file
- Code
    - Run the tests using the "Run Unit Tests" link. Please run your tests as often as you like
    - Create as many JavaScript, HTML, and CSS files as you feel is appropriate
    - The example components are there to help you get started and can be deleted if you think it appropriate
- Make sure you unit test your code
- Document your thought processes in this readme under the heading "Thought Process" i.e. 
    - Why you chose Object vs. service vs. factory? 
    - Why you chose a directive?
    - Why did you test something or why did you NOT test something?
- Note any resources that you needed to search for during the exercise 
- **Save** + **Freeze** and Send us the link to your forked Plunker

Jasmine documentation can be found [here][Jasmine]

You can find a definition of what a Median is on [wikipedia][Median]

##Thought Process
I decided to use the controller object because much of the functionality of this app is dependent upon the input of the user. 
I did not feel that it was necessary to add a service because there is no need to place static business logic since 
much of the data is dependent on the user's input.

I used the ng-repeat directive to display the temperatures that the user has added once 
they click the 'Add' button. I also used the ng-value directive to have the value of my <progress> tag equal the length of the array that the user has inputed. Therefore, this shows
how "full" their array is. I used the ng-click directives on the 'Add' and 'Get Median Temperature'
button to initiate their corresponding functions. Lastly, I used the ng-show directive to 
display the median of the user's temperatures once they've clicked the respective button.

Since I have multiple functions and 'if,else' statements in my controller, I decided to test each component
as thoroughly as I could to ensure 'no stone was left unturned' so to speak. I wanted
to have full confidence that the logic of each component to my controller was working properly.

During the exercise, I did need to search for resources on how to input a progress bar to the UI, proper Jasmine testing syntax, and an example of what a median formula would look like for an even numbered array and an odd numbered array.

##Resources

- [Apps Dev Email][AppsDev]
- [Jasmin Documentation][Jasmine]
- [Median][Median]
- [Clean Code][uncle bob]
- [Code Coverage][code coverage]

[AppsDev]: mailto:AppsDevInterviewProcess@teksystems.com
[Jasmine]: http://jasmine.github.io/2.4/introduction.html
[Median]: http://en.wikipedia.org/wiki/Median
[uncle bob]: https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882
[code coverage]: https://en.wikipedia.org/wiki/Code_coverage
# TempMonitor
