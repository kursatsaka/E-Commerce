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
    public class CustomerService : ICustomerService
    {
        public async Task<List<CustomerDTO>> GetCustomerList()
        {
            var customerList = new List<CustomerDTO>();
            using (StreamReader dataReader = new StreamReader("../DataLayer/Data/customer.json"))
            {
                string json = dataReader.ReadToEnd();
                customerList = JsonConvert.DeserializeObject<List<CustomerDTO>>(json);
            }


            return customerList;
        }
    }
}
