# Linux Service Setup Guide for Node.js Webhook Alert

This guide explains how to configure your Node.js webhook alert as a persistent service with automatic startup on boot using cron.

## Prerequisites
- Node.js (v14+) and npm installed
- Git (optional, for repository cloning)
- Basic terminal familiarity

## Step 1: Install Project Dependencies
1. Clone repository (if applicable):
   ```bash
   git clone https://github.com/PhillMckinnon/Play-sound-on-webhook-alert
   cd Play-sound-on-webhook-alert
   ```
2. Install npm packages:
   ```bash
   npm install
   ```

## Step 2: Manual Service Start Test
Verify your application works:
```bash
node index.js
```
Press `Ctrl+C` to stop after verification

## Step 3: Create Startup Script
1. Create `startup.sh` in your project directory:
   ```bash
   #!/bin/bash
   cd /absolute/path/to/your/project
   /usr/bin/node index.js
   ```
2. Make executable:
   ```bash
   chmod +x startup.sh
   ```

**Important**:  
- Replace `/absolute/path/to/your/project` with actual path
- Use `$(which node)` if needing specific Node.js version

## Step 4: Configure Automatic Startup via Cron
1. Edit crontab:
   ```bash
   crontab -e
   ```
2. Add this line at the end:
   ```bash
   @reboot cd /absolute/path/to/your/project && /usr/bin/node index.js > /var/log/webhook.log 2>&1
   ```
   or using startup script:
   ```bash
   @reboot /absolute/path/to/your/project/startup.sh
   ```

## Step 5: Verify Configuration
1. Reboot server:
   ```bash
   sudo reboot
   ```
2. Check service status:
   ```bash
   ps aux | grep node
   ```
   Should show your node process

3. Check cron execution:
   ```bash
   grep CRON /var/log/syslog
   ```
   
## Troubleshooting
- **Service Not Starting**: Check `/var/log/syslog` for cron errors
- **Permission Issues**: Verify file ownership with `ls -la`
- **Port Conflicts**: Use `sudo lsof -i :<port>` to check port usage
```

This cron method is the easiest way to do it for a basic setup.
