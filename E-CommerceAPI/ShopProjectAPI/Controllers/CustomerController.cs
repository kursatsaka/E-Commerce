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
    public class CustomerController : ControllerBase
    {
        #region Fields
        private readonly ICustomerService _customerService;
        #endregion

        #region CTOR
        public CustomerController(ICustomerService customerService)
        {
            this._customerService = customerService;
        }
        #endregion


        #region Methods
        [HttpGet]
        public async Task<IActionResult> GetCustomerList()
        {
            ObjectResult objectResult = null;

            var res = await _customerService.GetCustomerList();

            objectResult = new OkObjectResult(res);

            return objectResult;
        }
        #endregion

    }
}