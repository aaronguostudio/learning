using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace OdeToFood.Controllers
{
    public class CuisineController : Controller
    {
        // GET: Cuisine
        public ActionResult Index(string name)
        {
            //var message = Server.HtmlEncode(name);
            //return Content(message);

            //return View();

            //this param will be passed to home as parameter
            return RedirectToAction("Index", "Home", new { name = name } );
        }
    }
}