using BusinessLayer.Contracts;
using DataLayer.DTO;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Services
{

    public class CategoryService : ICategoryService
    {
        public async Task<List<CategoryDTO>> GetCategoryList()
        {

            var categoryList = new List<CategoryDTO>();
            using (StreamReader dataReader = new StreamReader("../DataLayer/Data/category.json"))
            {
                string json = dataReader.ReadToEnd();
                categoryList = JsonConvert.DeserializeObject<List<CategoryDTO>>(json);
            }


            return categoryList;


        }
    }
}
