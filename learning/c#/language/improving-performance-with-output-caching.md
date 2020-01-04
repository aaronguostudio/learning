# Caching

## Enabling Output Caching

```csharp

using System.Web.Mvc;
namespace MvcApplication.Controllers
{
    [HandleError]
    public class HomeController : Controller
    {
        // The ouput is cached for 10 seconds
        // There is no guarantee that content will be cached for the amount of time that you specify. When memory resources become low, the cache starts evicting content automatically.

        // Where content is cached
        // - web server
        // - any proxy server
        // - web browser
        // other possible locations: Any, Client, Downstream, Server, None, ServerAndClient

        [OutputCache(Duration=10, VaryByParam="none")]
        {
            return View();
        }

        
        // Any is default, but:
        // if the info is user specific, cache it on the client
        // NoStore informs proxy servers and browser should not store a permanent copy of the cached content
        [OutputCache(Duration=3600, VaryByParam="none", Location=OutputCacheLocation.Client, NoStroe=true)]
        public string GetName()
        {
            // The name will be cached on client
            return "Hi " + User.Identity.Name;
        }
    }
}

```

## Varying the output cache
```csharp
using System.Linq;
using System.Web.Mvc;
using MvcApplication.Models;

namespace MvcApplication.Controllers
{
    public class MoviesController  : Controller
    {
        private MovieDataContext _dataContext;

        public MoviesController ()
        {
            _dataContext = new MovieDataContext();
        }

        // No need define VaryByParam
        [OutputCache(Duration=int.MaxValue, VaryByParam="none")]
        public ActionResult Master()
        {
            ViewData.Model = (from m in _dataContext.Movies select m).ToList();
            return View();
        }

        [OutputCache(Duration = int.MaxValue, VaryByParam="id")]
        public ActionResult Details(int id)
        {
            ViewData.Model = _dataContext.Movies.SingleOrDefault(m => m.Id == id);
            return View();
        }
    }
}

```

## Creating a Cache Profile
- Create cache profile in web.config
- Advantages:
    - Centralized config
    - Don't need to recomplie the code

<!-- in web.config -->
```xml
<catching>
<outputCacheSettings>
    <outputCacheProfiles>
        <add name="Cache1Hour" duration="3600" varyByParam="none">
    </outputCacheProfiles>
</outputCacheSettings>
</catching>
```

<!-- in controller -->
```csharp
public class ProfileController : Controller
{
    [OutputCache(CacheProfile="Cache1Hour")]
    public string Index()
    {
        ...
    }
}
```

