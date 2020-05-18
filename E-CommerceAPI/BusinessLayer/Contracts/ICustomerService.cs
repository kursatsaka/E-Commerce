using DataLayer.DTO;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer.Contracts
{
    public interface ICustomerService
    {
        Task<List<CustomerDTO>> GetCustomerList();
    }
}
