using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ImageDisplay.Controllers
{
    public class ImageController : Controller
    {
        //
        // GET: /Image/

        public ActionResult ImageInfo()
        {
            return View("ImageInfo");
        }

    }
}
