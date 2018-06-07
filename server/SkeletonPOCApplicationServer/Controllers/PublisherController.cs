using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SkeletonPOCApplicationServer.Controllers
{
    public class PublisherController : ApiController
    {
        [HttpGet]
        public JArray GetApplication()
        {
            JArray arrAppFiles = new JArray();

            string AppJs = System.Configuration.ConfigurationManager.AppSettings.Get("app.js");
            string AppCss = System.Configuration.ConfigurationManager.AppSettings.Get("app.css");         

            arrAppFiles.Add(new JValue(AppJs));
            arrAppFiles.Add(new JValue(AppCss));

            return arrAppFiles;
        }
    }
}
