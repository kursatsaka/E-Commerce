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
    public class ProductController : ControllerBase
    {

        #region Fields
        private readonly IProductService _productService;
        #endregion

        #region CTOR
        public ProductController(IProductService productService)
        {
            this._productService = productService;
        }
        #endregion

        #region Methods
        [HttpGet]
        public async Task<IActionResult> GetProductList()
        {
            ObjectResult objectResult = null;

            var res = await _productService.GetProductList();

            objectResult = new OkObjectResult(res);

            return objectResult;
        }
        #endregion

    }
}