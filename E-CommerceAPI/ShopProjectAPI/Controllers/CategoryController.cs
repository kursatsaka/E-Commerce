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
    public class CategoryController : ControllerBase
    {
        #region Fields
        private readonly ICategoryService _categoryService;
        #endregion

        #region CTOR
        public CategoryController(ICategoryService categoryService)
        {
            this._categoryService = categoryService;
        }
        #endregion


        #region Methods
        [HttpGet]
        public async Task<IActionResult> GetCategoryList()
        {
            ObjectResult objectResult = null;

            var res = await _categoryService.GetCategoryList();

            objectResult = new OkObjectResult(res);

            return objectResult;
        }
        #endregion

    }
}