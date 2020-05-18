using BusinessLayer.Contracts;
using DataLayer.DTO;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Services
{
    public class ProductService : IProductService
    {
        public async Task<List<ProductDTO>> GetProductList()
        {
            var productList = new List<ProductDTO>();
            using (StreamReader dataReader = new StreamReader("../DataLayer/Data/product.json"))
            {
                string json = dataReader.ReadToEnd();
                productList = JsonConvert.DeserializeObject<List<ProductDTO>>(json);
            }

            return productList;

        }
    }
}
