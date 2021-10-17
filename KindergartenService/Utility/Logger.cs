using System;
using System.Collections.Generic;
using System.Linq;
using System.Configuration;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace KindergartenService.Utility
{
    public class Logger
    {
        private Logger() { }

        private static Logger _instance;

        private static readonly object _lock = new object();

        public static Logger GetInstance()
        {
            if (_instance == null)
            {
                lock (_lock)
                {
                    if (_instance == null)
                    {
                        _instance = new Logger();
                    }
                }
            }
            return _instance;
        }


        public void LogMessage(string message)
        {
            string logFolder = ConfigurationManager.AppSettings["LogPath"];
            string logFile = ConfigurationManager.AppSettings["LogFile"];
            string fileName = string.Format("{0}_{1}.log", logFile, DateTime.Now.ToShortDateString());

            if (!Directory.Exists("logFolder"))
            {
                Directory.CreateDirectory("logFolder");
            }
            string filePath = string.Format(@"{0}\{1}", logFolder, fileName);

            StringBuilder sb = new StringBuilder();
            sb.Append(DateTime.Now.ToString());
            sb.Append(" : ");
            sb.Append(message);
            sb.Append('\n');

            StreamWriter writer = new StreamWriter(filePath, true);
            writer.Write(sb.ToString());
            writer.Flush();
            writer.Close();
        }
    }

}
