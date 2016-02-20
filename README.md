#DEVX Sample
This project implements a sample application (based on an ERP system) using the following technologies:

* Server
  * Microsoft .Net Core (using C#)
  * Node.js (using TypeScript)

* Client
  * Browser
  * Mobile (Cordova)
  * Desktop (Windows, Mac, Linux - using Electron)

We will use DevxBase to generate the code. We will have extention points where we implement logic
not covered by the generator.

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
