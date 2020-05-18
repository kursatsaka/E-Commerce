using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessLayer.Contracts;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShopProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SideBarController : ControllerBase
    {
        #region Fields
        private readonly ISideBarService _sideBarService;
        #endregion

        #region CTOR
        public SideBarController(ISideBarService sideBarService)
        {
            this._sideBarService = sideBarService;
        }
        #endregion

        #region Methods
        [HttpGet]
        public async Task<IActionResult> GetSideBarMenuList()
        {
            ObjectResult objectResult = null;

            var res = await _sideBarService.GetSideBarMenuList();

            objectResult = new OkObjectResult(res);

            return objectResult;
        }
        #endregion

    }
}