Sales Agent Dashboard
This is the development guide for the Sales Agent Dashboard application, built with Angular CLI version 17.3.7.

Getting Started

This guide will help you run the application locally, understand the development workflow, and learn about testing procedures.

Running the Application

Start the development server:
Open your terminal and navigate to the project directory.
Run the command ng serve. This will start a local development server accessible at http://localhost:4200/.
Any changes you make to the source code will be automatically reflected in the browser.
Code Development

The Angular CLI provides commands to generate new components, directives, services, and other building blocks for your application. Here are some commonly used commands:

ng generate component component-name: Creates a new component named "component-name".
For other functionalities like directives, pipes, services etc., refer to the full list with ng help generate.
Building the Application

To create an optimized production-ready build of your application, run the command ng build. This will generate all necessary files and store them in the dist directory.

Testing

The application utilizes two main testing approaches:

Unit Tests: These tests focus on individual components and services in isolation. You can run unit tests using the command ng test. This leverages the Karma test runner.
End-to-End Tests: These tests simulate user interactions and verify the overall functionality of the application. To run end-to-end tests, you'll need to set up a separate testing framework. The command ng e2e will initiate the process, but you'll need to install the specific framework first.
Further Resources

Angular CLI Help: Use the command ng help in your terminal for detailed information on specific commands.
Angular CLI Documentation: For a comprehensive reference guide, visit the official Angular CLI Overview and Command Reference: https://angular.io/cli
