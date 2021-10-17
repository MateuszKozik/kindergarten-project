using KindergartenService.Utility;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.ServiceProcess;
using System.Text;
using System.Threading.Tasks;
using System.Timers;


namespace KindergartenService
{
    public partial class KindergartenService : ServiceBase
    {
        Logger logger;
        static string ApiUrl;

        public KindergartenService()
        {
            InitializeComponent();
            ApiUrl = ConfigurationManager.AppSettings["ApiUrl"];
            logger = Logger.GetInstance();

        }

        protected override void OnStart(string[] args)
        {
            logger.LogMessage("Kindergarten service started!");

            // Set up a timer that triggers every minute.
            Timer timer = new Timer();
            timer.Interval = 60000; // 60 seconds
            timer.Elapsed += new ElapsedEventHandler(this.OnTimer);
            timer.Start();

        }

        public void OnTimer(object sender, ElapsedEventArgs args)
        {
            var generatedPayments = ResponseFromKindergartenApi("/Payment/GeneratePayments", "GET");
            var generatedPayouts = ResponseFromKindergartenApi("/Payout/GeneratePayouts", "GET");
        }

        protected override void OnStop()
        {
            logger.LogMessage("Kindergarten service stopped!");
        }

        string ResponseFromKindergartenApi(string reference, string methodType, string data = null)
        {
            try
            {
                var certificateValidation = bool.Parse(ConfigurationManager.AppSettings["ServerCertificateValidation"]);

                var httpRequest = (HttpWebRequest)WebRequest.Create(ApiUrl + reference);
                httpRequest.Method = methodType; //"POST";

                httpRequest.Accept = "application/json";
                httpRequest.ContentType = "application/json";

                if (!certificateValidation)
                {
                    httpRequest.ServerCertificateValidationCallback += (sender, certificate, chain, sslPolicyErrors) => true;
                }

                if (data != null)
                {
                    var postData = Encoding.UTF8.GetBytes(data);
                    httpRequest.ContentLength = postData.Length;

                    using (var stream = httpRequest.GetRequestStream())
                    {
                        stream.Write(postData, 0, postData.Length);
                    }
                }


                var webResponse = httpRequest.GetResponse();

                // Get the stream containing content returned by the server.
                var dataStream = webResponse.GetResponseStream();
                // Open the stream using a StreamReader for easy access.
                var reader = new StreamReader(dataStream);
                // Read the content.
                string responseFromServer = reader.ReadToEnd();

                return responseFromServer;
            }
            catch (Exception ex)
            {
                // check if working
                logger.LogMessage("Exception: " + ex.Message);

                return null;
            }
        }

    }
}
