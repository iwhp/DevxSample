#DEVX Sample
This project implements a sample application (based on an ERP system) using the following technologies:

* Server
  * Microsoft .Net Core (using C#)
  * Node.js (using TypeScript)

* Client
  * Browser
  * Mobile (Cordova)
  * Desktop (Windows, Mac, Linux - using Electron)

This project also contains a side project called **devxgen** (found in folder `.devxgen`). Sooner or later
we will extract this and put it into its one repository. This side project has the gool to provide a 
code generator for DEVX-based applications. 

##Our Plan

We use Microsoft Visual Studio Code as the development plattform.

The **server** side code is implemented twice, once with C# (.NET Core) and once with TypeScript (Node.js).
The reason for this is a proof of concept. We would like to proof:

* can we have the same principles for C# and Node.Js components?
* how about business logic, how about integration (databases, etc.)?
* how does this feel ;-) ?

We will use DDD (Domain Driven Design) principles.

As the data store we will use MS Sql, MySql, MonoDb.

The **client** side code is implemented with HTML, CSS and TypeScript.
We use different technologies to have the application running in the browser, on mobile devices 
(Android, IOS and Windows) and on desktops (Linux, Mac OSX and Windows).
The goal is to only implement the GUI once and deploy the 'same' source files to the different environments.

##Help needed

If you are intressted in helping out, please leave a message. Thank you!

#generall

* install Microsoft Visual Code
* install .Net Core (http://dotnet.github.io/getting-started/)
* install Node.js (https://nodejs.org/en/)

#dotnetcore

* compile 
  * `cd DevxSample\src\server\dotnetcore\ErpDomain`
  * `dotnet restore`
  * `dotnet build`
* test:
  * `dotnet run`

#nodejs

* prepare:
  * `cd DevxSample`
  * `npm install`
* test: 
  * `cd src\server\nodejs\ErpDomain\CustomerModule\CustomerAggregate`
  * `node Customer.js`
