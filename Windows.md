# Windows Service Setup Guide using node-windows

This guide explains how to create a Windows service for a Node.js application using the `node-windows` library.

## Prerequisites
- Node.js and npm installed on your system
- Administrative privileges (run commands as Administrator)
- Project directory containing your `index.js` file

## Step 1: Install node-windows
1. Open PowerShell or Command Prompt as Administrator
2. Navigate to your project directory:
   ```powershell
   cd Play-sound-on-webhook-alert
   ```
3. Install the package:
   ```powershell
   npm install node-windows
   ```

## Step 2: Create Service Installation Script
Create `create-service.js` in your project root with this content:

```javascript
const { Service } = require('node-windows');

const svc = new Service({
  name: 'WebhookAlertService',
  description: 'Node.js webhook service',
  script: 'C:\\absolute\\path\\to\\your\\index.js', // Use actual path
  nodeOptions: [
    '--harmony',
    '--max_old_space_size=4096'
  ]
  // Optional: Add logging configuration
  // logpath: 'C:\\path\\to\\logs',
  // env: { name: 'NODE_ENV', value: 'production' }
});

svc.on('install', () => {
  console.log('Service installed');
  svc.start();
});

svc.on('start', () => console.log('Service started'));

svc.install();
```

**Important**:  
- Replace `C:\\absolute\\path\\to\\your\\index.js` with your actual file path
- Use double backslashes (`\\`) in paths
- `nodeOptions` are optional and can be modified/removed

## Step 3: Install the Service
Run the installation script:
```powershell
node create-service.js
```

Successful output should show:
```
Service installed
Service started
```

## Step 4: Verify Service Installation
1. Press `Win + R`, type `services.msc`
2. Locate **WebhookAlertService** in the list
3. Check status should be "Running"

### Command Line Verification:
```powershell
sc query WebhookAlertService
```

## Step 5: Service Management

### Start/Stop Service
```powershell
net start WebhookAlertService
net stop WebhookAlertService
```

### Uninstall Service
Create `remove-service.js`:
```javascript
const { Service } = require('node-windows');

const svc = new Service({
  name: 'WebhookAlertService'
});

svc.on('uninstall', () => console.log('Service removed'));
svc.uninstall();
```

Run removal script:
```powershell
node remove-service.js
```

## Configuration Tips
1. **Logging**: Uncomment `logpath` in service config to store logs
2. **Environment Variables**: Add via `env` property in service config
3. **Automatic Restart**: Service automatically restarts on failure
4. **Dependencies**: Specify other services using `dependencies` array

## Advantages of node-windows
- No external tools required
- Full programmatic control
- Native Windows service integration
- Easy installation/removal process

## Troubleshooting
- **Access Denied**: Always run commands as Administrator
- **Path Errors**: Verify file paths use double backslashes
- **Service Not Starting**: Check Windows Event Viewer for errors
- **File Permissions**: Ensure service account has file access rights
```

