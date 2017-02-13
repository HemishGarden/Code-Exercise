using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using PictureDisplay.BLC;

namespace PictureDisplay.Controllers
{
    public class PictureDetailsController : ApiController
    {
        public Photo GetPicture(int ID)
        {
            using (PictureDataBaseEntities entites = new PictureDataBaseEntities())
            {
                return entites.Photos.FirstOrDefault(e => e.ID == ID);
            }
        }


        public IEnumerable<Photo> GetAllPicture()
        {
            using (PictureDataBaseEntities entites = new PictureDataBaseEntities())
            {

                return entites.Photos.ToList();
            }
        }

        public List<Photo> GetPictureByOption(bool option)
        {
            using (PictureDataBaseEntities entites = new PictureDataBaseEntities())
            {
                return entites.Photos.Where(e => e.opinion == option).ToList();
            }
        }

        public bool Edit(int ID, bool suggestion)
        {
            using (PictureDataBaseEntities entites = new PictureDataBaseEntities())
            {
                Photo photo = entites.Photos.Find(ID);

                photo.opinion = suggestion;

                entites.SaveChanges();
            }
            return true;
        }

       
    }
}
