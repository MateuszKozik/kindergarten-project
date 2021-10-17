using Kindergarten.Interfaces;
using Kindergarten.Models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Kindergarten.Repositories
{
    public class JwtAutenticationManager : IJwtAutenticationManager
    {

        private readonly string key;
        public JwtAutenticationManager(string key)
        {
            this.key = key;
        }

        public string Authenticate(User user, Role rol)
        {

            string role = "none";

            if (rol != null)
                role = rol.Name;

            var enabled = "false";
            if (user.Enabled)
                enabled = "true";


            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenKey = Encoding.ASCII.GetBytes(key);
            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim("Id",user.Id.ToString()),
                    new Claim("email", user.Email),
                    new Claim("Enabled", enabled),
                    new Claim("role", role)
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(tokenKey),
                    SecurityAlgorithms.HmacSha256Signature)

            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);

        }
    }
}
