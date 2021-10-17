using Kindergarten.Interfaces;
using Kindergarten.Models;
using Microsoft.AspNetCore.Mvc;
using Nancy.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebPush;

namespace Kindergarten.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class WebPushController : ControllerBase
    {
        private readonly IDeviceRepository _deviceRepository;

        public WebPushController(IDeviceRepository deviceRepository) { _deviceRepository = deviceRepository; }

        [HttpPost("AddDevice")]
        public async Task<IActionResult> AddDevice(Device device)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _deviceRepository.Add(device));
            }
            return BadRequest();
        }

        [HttpPost("SendPush")]
        public async Task<IActionResult> SendPush(PushMessage message)
        {
            // Parse PushMessage object to Json string
            var messageJson = new JavaScriptSerializer().Serialize(message);

            // Get Vapid keys
            string vapidPublicKey = "BJKLduCtOVVbeZ3hnjF1mc1ouCj8fCmugHyWgZpiXcMWGvBBsZm2LLhAaBDLej12EekPRA0j62xPa2rP2tkCIts";
            string vapidPrivateKey = "Kv5a06Lg5p_5pg5yqKfN1P7SeO6adDXT5yE7TPBLZrE";
            var vapidDetails = new VapidDetails("mailto:mate369@o2.pl", vapidPublicKey, vapidPrivateKey);

            // Send push to all devices
            var webPushClient = new WebPushClient();

            foreach (Device device in await _deviceRepository.GetAll())
            {
                var pushSubscription = new PushSubscription(device.PushEndpoint, device.PushP256DH, device.PushAuth);
                try
                {
                    await webPushClient.SendNotificationAsync(pushSubscription, messageJson, vapidDetails);
                }
                catch (Exception ex)
                {
                    // Catch Exception when subscription is not valid or expired                   
                }
            }
            return Ok("ok");
        }
    }
}
