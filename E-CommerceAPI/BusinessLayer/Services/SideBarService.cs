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
    public class SideBarService : ISideBarService
    {
        public async Task<List<SideBarMenuDTO>> GetSideBarMenuList()
        {
            var menuList = new List<SideBarMenuDTO>();
            using (StreamReader dataReader = new StreamReader("../DataLayer/Data/sidebarmenu.json"))
            {
                string json = dataReader.ReadToEnd();
                menuList = JsonConvert.DeserializeObject<List<SideBarMenuDTO>>(json);
            }


            return menuList;
        }
    }
}
