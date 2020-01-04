# Controller

## Pass data to view
- Viewbag
- Model

## How is the process running
- In Global.asax.cs
    - Application_Start()
    - When new request comes in, Application_Start() will be triggered
    - RouteConfig.RegisterRoutes() will define the routing strategy
    - In App_Start, RouteConfig.cs is configuring the route rules