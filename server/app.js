const express = require("express");
const cors = require("cors");
const app = express();
const os = require('os')
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    const ProcessorType = os.arch()	
  const cPUCoresSpeed = os.cpus()
 const  freeMemoryAvailableInBytes = os.freemem();
 const  freeMemoryAvailableInGb = "your total free Ram memory is "+ (freeMemoryAvailableInBytes / Math.pow(1024, 3)).toFixed(2) + 'GB';
 const  computerName = os.hostname();
 const  operatingSystemName = os.platform();
 const  totalMemoryInBytes  = os.totalmem()  ;
 const totalMemoryInGB = "your total RAM is " + (totalMemoryInBytes / Math.pow(1024, 3)).toFixed(2) + 'GB';
 const  OsSpecificName = os.type();
 const  homeDirectoryPath = os.homedir()
 
 const  OSReleaseInformation = os.release();
 const   DefaultTemporaryDirectory = os.tmpdir();
 const    OsVersionInformation = os.version();
  res.json({
    ProcessorType: ProcessorType ,
  cPUCoresSpeed: cPUCoresSpeed,
  computerName: computerName,
  operatingSystemName: operatingSystemName,
  totalMemoryInstalled: totalMemoryInGB,
  OsSpecificName: OsSpecificName,
  homeDirectoryPath: homeDirectoryPath,
  freeMemoryAvailable: freeMemoryAvailableInGb,
  OSReleaseInformation: OSReleaseInformation,
  DefaultTemporaryDirectory: DefaultTemporaryDirectory,
  OsVersionInformation: OsVersionInformation,
  });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});