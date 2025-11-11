// CommonJS
// let os = require(`os`);

// ES Modules
import { arch, platform, cpus } from 'os'; 

// Basic system information
console.log(`OS Platform: ${platform()}`);
console.log(`Number of CPU Cores: ${cpus().length}`);
console.log(`CPU Architecture: ${arch()}`);
